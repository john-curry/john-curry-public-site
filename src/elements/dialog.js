import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import styles from 'dialog.module.sass'

const Dialog = (props) => {
    const [data, setData] = useState({
        from: '',
        subject: '',
        content: '',
    })

    const dataChanged = (next) => {
        setData((prev) => ({
            ...prev, ...next
        }))
    }

    const onChange = (open) => {
        const types = ['scroll', 'touchmove', 'onwheel', 'mousewheel']
        const args = (type) => ((type === 'mousewheel') ? { passive: false } : false)

        const disableEvt = (evt) => {
            evt.preventDefault()
        }

        if (open) {
            types.forEach((type) => {
                document
                    .getElementById('app-body')
                    .addEventListener(type, disableEvt, args(type))
            })
        }

        props.setDialog(!!open)

        return () => {
            types.forEach((type) => {
                document
                    .getElementById('app-body')
                    .removeEventListener(type, disableEvt, args(type))
            })
        }

    }

    const ref = useRef(null)
    useEffect(() => {
        return onChange(props.open)
    })

    return (
        <dialog ref={ref}
            id='dialog'
            className={styles.dialog}
            open={props.open}
        >
            <form onSubmit={(e) => props.onSubmit(e, data)}>
                <h5><p>Contact</p><button onClick={() => onChange(false)}>×</button></h5>
                <label htmlFor="dialog-from">From:       </label>
                <input value={data.from} onChange={(e) => dataChanged({ 'from': e.target.value })} id="dialog-from" type="text" name="email" />
                <label htmlFor="dialog-subject">Subject: </label>
                <input value={data.subject} onChange={(e) => dataChanged({ 'subject': e.target.value })} id="dialog-subject" type="text" name="subject" />
                <label htmlFor="dialog-content">Content: </label>
                <textarea onChange={(e) => dataChanged({ 'content': e.target.value })} id="dialog-content" name="text" value={data.content}></textarea>
                <menu>
                    <button onClick={() => onChange(false)} value="cancel">Cancel</button>
                    <button onClick={() => onChange(false)} value="default">Ok</button>
                </menu>
            </form>
        </dialog>
    )
}
export default Dialog