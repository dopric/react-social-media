import React, { useState } from "react"
import Layout from "./Layout"

export default function App() {

    const [text, setText] = useState("")

    function onChanged(event) {
        console.log(event.target.value)
        setText(event.target.value)
    }

    return (
        <Layout>
            <input onChange={onChanged}></input>
            {text}
        </Layout>)
}