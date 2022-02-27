import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="sitemap">
                <h3>Site Map</h3>
                <span>
                    <h3>Home</h3>
                    {
                        Object.entries(props.sections).map(([name, section]) => {
                            return (
                                <ul key={name}>
                                    <li><h4><a href={`#${name}`}>{section.short}</a></h4></li>
                                </ul>
                            )
                        })
                    }
                </span>
            </div>
            <div className="details">
                <h3>Details</h3>
                <span>
                    <ul>
                        <li><p>John F. Curry</p></li>
                        <li><a href="tel:250-365-9675">Phone</a></li>
                        <li><a href="mailto:johnforrestcurry@gmail.com">Email</a></li>
                    </ul>
                </span>
            </div>
        </footer>
    )
}

export default Footer