import React from 'react'

export default function Layout(props) {
    return (
        <>
            <header>
                header
            </header>
            {props.children}
            <footer>
                footer
            </footer>
        </>
    )
}