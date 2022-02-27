import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import Sections from './frontpage.content.js'
import Dialog from "elements/dialog.js"

const onSubmit = (e, data) => {
    e.preventDefault && e.preventDefault()
    alert("Uh-oh! This function hasn't been implemented yet. Thanks for trying!")
    return false
}

const FrontPage = () => {
    const [dialog, setDialog] = useState(false)
    return (
        <main className="frontpage">
            <SectionNav sections={FrontSections}/>
            <article className="frontpage">
                <LeadIn setDialog={setDialog} />
                {
                    Object.entries(Sections).map(([name, section]) => {
                        return (
                            <Section key={name} name={name} data={section}
                                showDialog={setDialog}
                            />
                        )
                    })
                }
            </article>
            <Dialog open={dialog} onSubmit={onSubmit} setDialog={setDialog} />
        </main>
        
    )
}

const FrontSections = Object.entries(Sections).map(([key, val]) => {
    return {
        'key': key, 'href': key, ...val,
    }
})

const SectionHeader = (props) => {
            return (
                <h3 data-title={props.header} className="frontpage article"></h3>
            )
}

const Section = (props) => {
    const linkClick = (e) => {
        props.showDialog(true)
    }
    return (
        <section 
                className={"about article-section section-" + props.name} 
                id={props.name} 
                data-section={props.name}
            >
            {props.header ? (<SectionHeader header={props.header} />) : ''}
            {
                Object.entries(props.data)
                .filter(([key,val]) => key !== 'short' && val !== '')
                .map(([key, val]) => {
                    return (
                        <p 
                            onClick={
                                (key === 'link' ? linkClick : undefined)
                            }
                            key={key} 
                            data-name={props.name} 
                            className={'section-'+ key}>
                            {Array.isArray(val) ? '' : val}
                        </p>
                    )
                })
            }
        </section>
    )
}
const SectionNavItem = (props) => {
    return (
        <li className={"nav-list-item nav item list listitem-"+ props.href}> 
            <a data-contents={props.short} href={`#${props.href}`}>
            </a>
        </li>
    )
}

const SectionNav = (props) => {
    return (
        <nav className="main nav">
            <ul className="nav list">
            {
                props.sections.map((section) => (
                    <SectionNavItem key={section.name} {...section} />
                ))
            }
            </ul>
        </nav>
    )
}

const LeadIn = (props) => {
    const [offset, setOffset] = useState(0);

    const ref = useRef(window.pageYoffset)

    useEffect(() => {
        const onScroll = () => {
            setOffset(ref.current.getBoundingClientRect().top - window.pageYOffset)
        }
        // clean up code
        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
            <section 
                ref={ref} 
                className={"lead" + ((offset < 0) ? " inview" : "")}
                id="lead" 
                data-role="card"
                >
                <div role="presentation">
                    <h4>Software Development and Web Design</h4>
                    <div className="quote">Are you looking to build a website?</div>
                    <div className="quote">Have no idea where to start?</div>
                    <div className="brews" role="img">👍</div>
                    <p>Look no further!</p>
                    <p>Let me, help you with all your application development needs.</p>
                    <button onClick={() => props.setDialog(true)}role="button" className="card-button">Get Started Now →</button>
                </div>
            </section>
    )
}

const Span = (props) => (<span {...props}>{props.text}</span>)
export default FrontPage