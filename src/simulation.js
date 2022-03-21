import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree , useV} from '@react-three/fiber'
import { OrbitControls, TransformControls, ContactShadows, useGLTF, useCursor } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'
import { Physics, usePlane, useBox, useSphere } from '@react-three/cannon'

const modes = ['translate', 'rotate', 'scale']
const state = proxy({ current: null, mode: 0 })

function BoxDemo(props) {
  const args = [ 10, 10, 10 ]
  const [ref, api] = useBox(() => ({ args: args, mass: 1, position: props.position, ...props }))

  useEffect(() => {
    return api.position.subscribe((p) => {
      props.focus.current = p
    })
  }, [props.focus])

  return (
    <mesh
      ref={ref} castShadow receiveShadow>
      <boxBufferGeometry args={args}/>
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}

function BallDemo(props) {
  const args=[10]
  const [ref, api] = useSphere(() => ({ args: args, mass: 1, position: props.position, ...props }))

  useEffect(() => {
    const [x, y, z] = props.position
    const point = [ x-10, y, z ]
    api.applyForce([1000, 0, 0], point)
    return api.position.subscribe((p) => {
      props.focus.current = p
    })
  }, [props.focus])

  return (
    <mesh
      ref={ref} castShadow receiveShadow>
      <sphereBufferGeometry args={args}/>
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}

const MyLight = (props) => {
  const ref = useRef(null)
  return (
    <directionalLight color={0xFFFFFF} target-position={[0,0,0]} intensity={.50} args={[10, 10, 0]} />
  )
}

const Plane = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, Math.PI / 6, -Math.PI/12], ...props }))

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <planeGeometry args={props.args || [1000, 1000]} />
      <meshStandardMaterial color={props.color || 'blue'} />
    </mesh>
  )
}
const Dolly = (props) => {
  useFrame(({clock, camera}) => {
    camera.position.set(props.target.x, props.target.y+50, 70+props.target.z)
    camera.matrixWorldNeedsUpdate = true
    props.set(() => [props.target.x, props.target.y-50, 200])
    camera.updateProjectionMatrix()
  })
  return null
}

const keymap = {
  "w": "up",
  "s": "down",
  "a": "left",
  "d": "right",
}

const Simulation = () => {
  const ref = useRef(null)
  const target = useRef([0, 50, 0])
  const [s, set] = useState([0, 30, 0])
  const [input, setInput] = useState({
    "up": false,
    "down": false,
    "left": false,
    "right": false,
  })

  useEffect(() => {
    ref.current.setAttribute("tab-index", "0")
  }, [s, set])

  const keydown = (e) => {
    setInput((prev) => ({ 
      ...prev,
      [keymap[e.key]]: true,
    }))
  }

  const keyup = (e) => {
    setInput((prev) =>({
      ...prev,
      [keymap[e.key]]: false,
    }))
  }

  return (
    <div className="sim">
      <ToolBox />
      <Menu />
      <Settings />
      <Console />
      <main className="viewport" autoFocus onKeyDown={keydown} onKeyUp={keyup}>
        <Canvas ref={ref} tabIndex="0" camera={{fov: 75, position: [target.current[0], target.current[1], 70]}}>
          <pointLight position={[10, 10, 10]} />
          <Physics>
            <Plane  />
            <Plane color="green" args={[10000, 10000]} rotation={[0, 0, 0]} />
            <Plane color="gray" args={[10000, 10000]} position={[0, -100, 0]} rotation={[-Math.PI/2, 0, 0]} />
            <BallDemo position={[target.current[0], target.current[1], 10]} focus={target}/>
          </Physics>
          <MyLight />
          <Dolly set={set} target={{ x: target.current[0], y: target.current[1], z: target.current[2] }}/>
        </Canvas>
      </main>
    </div>
  )
}
function Controls() {
  // Get notified on changes to state
  const snap = useSnapshot(state)
  const scene = useThree((state) => state.scene)
  return (
    <>
      {/* As of drei@7.13 transform-controls can refer to the target by children, or the object prop */}
      {snap.current && <TransformControls object={scene.getObjectByName(snap.current)} mode={modes[snap.mode]} />}
      {/* makeDefault makes the controls known to r3f, now transform-controls can auto-disable them when active */}
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
    </>
  )
}

export default Simulation

const ToolBox = () => {
  return (
    <fieldset className="toolbox user-interface ui ui-right">
      <div className="col">
        <input data-col="1" type="button" value="A" />
        <input data-col="1" type="button" value="B" />
        <input data-col="1" type="button" value="C" />
        <input data-col="1" type="button" value="D" />
      </div>
      <div className="col">
        <input data-col="2" type="button" value="1" />
        <input data-col="2" type="button" value="2" />
        <input data-col="2" type="button" value="3" />
        <input data-col="2" type="button" value="4" />
      </div>
    </fieldset>

  )
}
const Menu = () => {
  return (
    <menu className="menu ui-bar user-interface ui ui-top ui-sticky">
      <section>
        <label htmlFor="file">File</label>
        <select placeholder='File' id="file">
          <option>Open</option>
          <option>Save</option>
          <option>Save As...</option>
        </select>
      </section>
      <section>
        <label htmlFor="help">Help</label>
        <select placeholder='Help' id="help">
          <option>Search</option>
          <option>Documentation</option>
          <option>About</option>
        </select>
      </section>
    </menu>

  )
}

const Directions = () => {
  return (
    <div className='directional-controls'>
      <div className='up'></div>
      <div className='down'></div>
      <div className='left'></div>
      <div className='right'></div>
    </div>
  )
}
const Console = () => {
  return (
    <div className="console user-interface ui ui-bottom ui-sticky">
      <label className="ui-bar ui-status" htmlFor="output">console: &gt;<output></output></label>
      <label className="ui-bar ui-command" htmlFor="command">user: &gt;<input type="text" /></label>
    </div>

  )
}
const Settings = () => {
  const [isFull, setFull] = useState(false)

  const fullscreen = (e) => {
    setFull(!isFull)
  }

  useEffect(() => {
    const [header, footer] = document.querySelectorAll('header, footer')
    console.log([header, footer])
    header.hidden = isFull ? true : false
    footer.hidden = isFull ? true : false
  }, [isFull])

  return (
    <div className="settings user-interface ui ui-left col">
      <button onClick={(e) => fullscreen(e)}>[ ]</button>
      <button>X</button>
      <button>+</button>
    </div>

  )
}