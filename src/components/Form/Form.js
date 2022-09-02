import Meme from "../Meme/Meme"
import "./form.css"
import React from "react"

export default function Form() {
    const [allMemes, setallMemes] = React.useState("")

    const [data, setData] = React.useState({
        topText: "",
        bottomText: "",
        url: "/images/download.png"
    })

    function handleChange(event) {
        const { name, value } = event.target
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    React.useEffect(function () {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setallMemes(data))
    }, [])

    function getMemeImage() {
        const memesArray = allMemes.data.memes
        const random = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[random].url
        setData(prevData => ({
            ...prevData,
            url: url
        }))
    }

    return (
        <>
            <div className="form">
                <div className="formWrapper">
                    <div className="formContent">
                        <div className="formInput">
                            <input
                                placeholder='Top Text'
                                className="formInputBar"
                                type="text"
                                name="topText"
                                value={data.topText}
                                onChange={handleChange}
                            />
                            <input
                                placeholder='Bottom Text'
                                className="formInputBar"
                                type="text"
                                name="bottomText"
                                value={data.bottomText}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="formButton" onClick={getMemeImage}>Get a new image</button>
                    </div>
                </div>
            </div>
            <Meme data={data} />
        </>
    )
}
