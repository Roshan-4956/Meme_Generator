import "./meme.css"
export default function Meme({ data }) {
    
    return (
        <>
            <div className="meme">
                <div className="memeWrapper">
                    <div className="memeContent">
                        <div className="memeText">
                            <h2 className="memeTextTop">{data.topText}</h2>
                            <h2 className="memeTextBottom">{data.bottomText}</h2>
                            <img src={data.url} alt="" className="memeImg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
