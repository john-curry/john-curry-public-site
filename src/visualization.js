import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'

const BarData = [
    { 'color': 'red',    'interval': 100, 'seed': 7, 'dev': 7, 'mean': 100, 'category': 'a', 'count': 42 },
    { 'color': 'orange', 'interval': 100, 'seed': 5, 'dev': 5, 'mean': 0, 'category': 'd', 'count': 20 },
    { 'color': 'green',  'interval': 100, 'seed': 29, 'dev': 9, 'mean': -.2, 'category': 'c', 'count': 10 },
    { 'color': 'yellow', 'interval': 100, 'seed': 17, 'dev': 7, 'mean': -9, 'category': 'f', 'count': 9 },
    { 'color': 'blue',   'interval': 100, 'seed': 13, 'dev': 3, 'mean': .01, 'category': 'b', 'count': 2 },
    { 'color': 'purple', 'interval': 100, 'seed': 11, 'dev': 1, 'mean': -3, 'category': 'e', 'count': 1 },
]

const gauss = (avg, std) => (x) => {
    const A = 1/(std*Math.sqrt(2*Math.PI))
    const B = -0.5*Math.pow(((x - avg)/std), 2)

    return A*Math.exp(B)

}

const rand = (min, max) => {
  return Math.random() * (max - min) + min;
}

const LineData = BarData.map(data => {
    const g = gauss(data.mean, data.dev)

    const min = data.seed-0.5*data.interval
    const max = data.seed+0.5*data.interval

    return (new Array(data.count)).fill(data.seed).map((s, i) => ({
        category: data.category,
        seed: s,
        interval: data.interval,
        amplitude: s + (2*Math.random() - 1),
        frequency: Math.random() * 2 * Math.PI/data.interval,
        phase: rand(-1, 1) * 2 * Math.PI,
        x: Math.random(),
        y: rand(min, max),
        z: rand(0, s),
        g: g,
    }))
})


const Visualization = (props) => {
    return (
        <main className="visualization">
            <section data-done='true' data-type="Histogram"   className="graph bar"><BarGraph /></section>
            <section data-done='false' data-type="Pie Chart"   className="graph line">    </section>
            <section data-done='false' data-type="Line Plot"   className="graph pie">     </section>
            <section data-done='false' data-type="Scatterplot" className="graph scatter"> </section>
        </main>
    )
}
const BarGraph = () => {
    const offset = {x: 5.1, y: 5.1 }
    const [width, height] =  [ 1000, 500 ]
    const n = 10
    const nx = 20
    const ny = 10

    const lx = {
        x1: offset.x,
        x2: width - offset.x,
        y1: offset.y,
        y2: offset.y,
    }

    const ly = {
        x1: offset.x,
        x2: offset.x,
        y1: offset.y,
        y2: height - offset.y,
    }
    
    const barsize = 10
    const bars = categories(100, barsize, width, height, {x: 30.1, y: offset.y })

    const xlabels = bars.map(b => ({
        x: b.x + b.offset.x,
        y: 8*b.offset.y,
        text: b.text,
        label: 'xlabel',
    }))

    const labels = bars.map(b => ({
        y: b.gh - b.height - 4*b.offset.y,
        x: b.x + 2*b.offset.x,
        text: b.label,
        label: 'label',
        height: '10'
    }))

    return (
        <svg viewBox='0 0 1100 700' id="viewbox">
            <text x='130' y='50' className='graphtitle'>Graph Showing The Number of Objects Per Classification</text>
            <text x='300' y='699' className='graphdesc'>Count (number) vs. Classification (label)</text>
            <svg x="100" y="100" width="1000" height="500" id="graph-area">
                <g transform="scale(1, -1) translate(0, -500)" >
                    {
                        xlines(width, height, offset, n).map((l, i) => <GridLine key={i} {...l} />)
                    }
                    {
                        ylines(width, height, offset, n).map((l, i) => <GridLine key={i} {...l} />)
                    }
                    {
                        bars.map((b, i) => (<Rect key={i} {...b} />))
                    }
                    <svg x="0" y="0" width="1000" height="500" id="yaxis">
                            <g transform="translate(0, 500)" >
                            {
                                labels.map((xl, i) => (
                                    <g key={i} transform="scale(1, -1)" >
                                        <Text key={i} {...xl} />
                                    </g>
                                ))
                            }
                            </g>
                    </svg>
                    <line stroke="black" {...ly} />
                    <line stroke="black" {...lx} />
                </g>
            </svg>
            <svg x="0" y="100" width="100" height="600" id="yaxis">
                {
                    ylines(width, height, offset, n).map((l, i) => ({
                        x: l.x1,
                        y: l.y1,
                        //text: (n-i)*height,
                        text: (n-i)*height/(barsize*n),
                        label: 'ylabel',
                    })).map((t, i) => (
                        <Text key={i} {...t}  />
                    ))
                }
            </svg>
            <svg x="120" y="600" width="1100" height="100" id="xaxis">
                {
                    xlabels.map((xl, i) => (<Text key={i} {...xl} />))
                }
            </svg>
        </svg>
    )
}

const Text = (coords) => (<text textAnchor='end' x={coords.x} y={coords.y} className={coords.label}>{coords.text}</text>)
const Rect = (coords) => (<g color={coords.color}><rect fill="currentcolor" {...coords} /></g>)
const GridLine = (coords) => (<line strokeDasharray='1' strokeWidth='1px' stroke={'lightgray'} {...coords} />)

const categories = (width, height, gw, gh, offset) => BarData.map((data, i) => ({
    offset: offset,
    gw: gw,
    gh: gh,
    label: data.count.toString(),
    height: data.count*height,
    color: data.color,
    width: Math.min(width, gw/BarData.length),
    text: data.category,
    x: offset.x + (i * gw/BarData.length),
    y: offset.y,
}))

const xlines = (width, height, offset, n) => (new Array(n+1)).fill({}).map((_, i) => ({
        x1: i*((width - 2*offset.x)/n) + offset.x,
        x2: i*((width - 2*offset.x)/n) + offset.x,
        y1: offset.y,
        y2: height - offset.y,
}))

const ylines = (width, height, offset, n) => (new Array(n+1)).fill({}).map((_, i) => ({
        y1: (i)*((height - 2*offset.y)/n) + offset.y,
        y2: (i)*((height - 2*offset.y)/n) + offset.y,
        x1: offset.x,
        x2: width - offset.x,
}))
export default Visualization