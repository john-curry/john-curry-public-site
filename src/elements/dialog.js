import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import styles from 'dialog.module.sass'

const Dialog = (props) => {
    const [data, setData] = useState({
        from: '',
        subject: '',
        content: '',
        submitted: false,
    })

    const dataChanged = (next) => {
        setData((prev) => ({
            ...prev, ...next
        }))
    }

    const onChange = (e, open) => {
        console.log(e)
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
        //return onChange(props.open)
    })

    const post = () => {
        return fetch("Contact", { 
            method: "post", 
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded'
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    const onSubmit = (ev, ok) => {
        ev.preventDefault()

        if (!ok) {
            props.setDialog(false)
            return
        }

        setData({
            submitted: true,
        })

        props.setDialog(false)
        //post.then((response) => {
        //    console.log(response)
        //}).catch((err) => {
        //    console.log(err)
        //})
    }

    return (
        <dialog ref={ref}
            id='dialog'
            className={styles.dialog}
            open={props.open}
        >
<<<<<<< HEAD
            <form onSubmit={(e) => props.onSubmit(e, data)}>
                <h5><p>Contact</p><button onClick={(e) => onChange(e, false)}>×</button></h5>
=======
            <form onSubmit={(ev) => onSubmit(ev)}>
                <h5><p>Contact</p><button onClick={(ev) => onSubmit(ev, false)}>×</button></h5>
>>>>>>> 91e3906236357e9ae78757c79458d9a9e9664432
                <label htmlFor="dialog-from">From:       </label>
                <input value={data.from || ''} onChange={(e) => dataChanged({ 'from': e.target.value })} id="dialog-from" type="text" name="from" />
                <label htmlFor="dialog-subject">Subject: </label>
                <input value={data.subject || ''} onChange={(e) => dataChanged({ 'subject': e.target.value })} id="dialog-subject" type="text" name="subject" />
                <label htmlFor="dialog-content">Content: </label>
                <textarea onChange={(e) => dataChanged({ 'content': e.target.value })} id="dialog-content" name="content" value={data.content || ''}></textarea>
                <menu>
<<<<<<< HEAD
                    <button onClick={(e) => onChange(e, false)} value="cancel">Cancel</button>
                    <button onClick={(e) => onChange(e, false)} value="default">Ok</button>
=======
                    <button onClick={(ev) => onSubmit(ev, false)} value="cancel">Cancel</button>
                    <button onClick={(ev) => onSubmit(ev, true)} value="default">Ok</button>
>>>>>>> 91e3906236357e9ae78757c79458d9a9e9664432
                </menu>
            </form>
        </dialog>
    )
}
export default Dialog