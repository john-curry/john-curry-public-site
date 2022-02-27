import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import Sections from './sections/frontpage.content.js'
import Splash from './elements/splash.js'
import Footer from './elements/footer.js'
import Header from './elements/header.js'
import Pages from './pages.js'

const GetHeader = (name, set) => {
    return (
        <Header 
            set={set} 
            curr={name} 
            pages={Pages} 
            getLastPage={GetLastPage} 
        />
    )
}

const GetApp = (name, splash, page, set) => {
    return (
        <div className={"container-" + name}>
            {GetHeader(name, set)}
            {!!splash ? <Splash /> : ''}
            {page}
            <Footer sections={Sections}/>
            <a href="#Top" className="goto-top"></a>
            <script src="js/main.js"></script>
        </div>
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