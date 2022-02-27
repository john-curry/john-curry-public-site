import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    const [curr, setCurr] = useState(props.getLastPage())
    return (
        <header className="topmatter">
            <nav>
                {
                    Object.entries(props.pages)
                    .filter(([key, val]) => val.display)
                    .map(([key, val]) => {
                        return (
                            <a
                                key={key}
                                href="#Top"
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

export default Header