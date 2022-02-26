import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Store from './store.js'
import Contact from './contact.js'
import About from './about.js'
import Sections from './sections/frontpage.js'
const start = "frontpage"

const Pages = {
    "frontpage": {
        "name": "frontpage",
        "text": "Home",
        "page": (data) => (<FrontPage {...data} />),
        "display": true,
    },
    "store": {
        "name": "store",
        "text": "Projects",
        "page": (data) => (<Store {...data} />),
        "display": false,
    },
    "contact": {
        "name": "contact",
        "text": "Contact",
        "page": (data) => (<Contact {...data} />),
        "display": false,
    },
    "about": {
        "name": "about",
        "text": "About",
        "page": (data) => (<About {...data} />),
        "display": false,
    }
}

const FrontSections = Object.entries(Sections).map(([key, val]) => {
    console.log([key, val])
    return {
        'key': key, 'href': key, ...val,
    }
})

const Quote = () => {
    return (
        <div>All good best commitment quality.</div>
    )
}

const Splash = () => {
    return (
        <section className="splash-screen">
            <h1 className="splash-title">John F. Curry</h1>
            <aside>
                Software Application Developer and Web Designer
            </aside>
        </section>
    )
}

const Section = (props) => {
    return (
        <section className="about article-section" id={props.name} data-section={props.name}   >
            <h3 data-title={props.header} className="frontpage article"></h3>
            {
                Object.entries(props.data)
                .filter(([key,val]) => key !== 'short' && val !== '')
                .map(([key, val]) => {
                    return (
                        <p 
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

const GetHeader = (name, set) => {
    return (<Header set={set} curr={name} />)
}

const Header = (props) => {
    const [curr, setCurr] = useState(GetLastPage())
    return (
        <header className="topmatter">
            <nav>
                {
                    Object.entries(Pages)
                    .filter(([key, val]) => val.display)
                    .map(([key, val]) => {
                        return (
                            <a
                                key={key}
                                style={{
                                    alignSelf: 'flex-end',
                                }}
                                onClick={(e) => {
                                    props.set(val)
                                    setCurr(val.name)
                                }}
                            >{val.text}</a>
                        )
                    })
                }
            </nav>
        </header>
    )
}
const GetApp = (name, splash, page, set) => {
    return (
        <div className={"container-" + name}>
            {GetHeader(name, set)}
            {!!splash ? <Splash /> : ''}
            {page}
            <a href="#Top" className="goto-top"></a>
            <script src="js/main.js"></script>
        </div>
    )
}

const Footer = (<footer>KCACP (c) 2021</footer>)
const DropIn = () => {
    return (
                <section className="lead" id="Lead" data-role="card">
                    <div className="brews" role="img">🍺</div>
                    <div role="presentation">
                        <h4>Big Deal</h4>
                        <div className="quote">Award winning.</div>
                        <p>Described by many as the best drink they've had since thier first taste of freedom.</p>
                        <button role="button" className="card-button">Find out</button>
                    </div>
                </section>
    )
}
const FrontPage = (props) => {
    return (
        <main className="frontpage">
            <SectionNav sections={FrontSections}/>
            <article className="frontpage">
                {
                    Object.entries(Sections).map(([name, section]) => {
                        console.log([name, section])
                        return (<Section key={name} name={name} data={section}/>)
                    })
                }
            </article>
        </main>
    )
}

const GetLastPage = () => {
    const name = localStorage.getItem("page")
    return name || false
}

const SetLastPage = (name) => {
    if (name === GetLastPage()) return

    localStorage.setItem("page", name)
}

const App = (props) => {
    const [page, set] = useState(Pages[props.startPage])

    useEffect(() => {
        SetLastPage(page.name)
    })

    return GetApp(page.name, (page.name === "frontpage"), page.page({ set: set }), set)
}

const current = GetLastPage() || 'frontpage'
ReactDOM.render(<App startPage={current} />, document.getElementById("app-container"))