import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
const Filter = (props) => {
    return (
        <main 
            className="filter"
            style={{
                width: '100vw',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
        <svg style={{position: "absolute", top: "-9999999px"}}>
        <filter id="blur-filter">
          <feGaussianBlur stdDeviation="90px" />
        </filter>
          <filter id="sharpen-filter">
          <feColorMatrix type="saturate" values="0.10"/>
            <feConvolveMatrix 
                order="3"
                preserveAlpha="true"
                kernelMatrix="
                    0  -1  0 
                    -1  4  -1 
                    0  -1  0 
                "
            />
          </filter>
        </svg>
        <Lad />
        <Lad filter={"url(\"#sharpen-filter\")"} />
        </main>
    )
}

        //<Lad filter={"url(\"#sharpen-filter\") url(#sharpen-filter)"} />
const Lad = (props) => {
    return (
        <img src="res/lad.png" 
            style={{
                width: '50%',
                height: "auto",
                filter: props.filter,
                //filter: "url(\"filter.svg#sharpen-filter\")",
                //filter: "blur(2em)"
            }}
        />
    )
}
export default Filter