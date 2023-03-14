import { useState } from "react"



export default function DivBG() {
    const [bgColor, SetBgColor] = useState('silver');

    return (
        <div>
            <div style={{backgroundColor: bgColor}}>
                Hi! I'm a div inside a component
            </div>
            <input type="button" value="red" onClick={(event) => SetBgColor(event.target.value)} />
            <input type="button" value="green" onClick={(event) => SetBgColor(event.target.value)}/>
            <input type="button" value="blue" onClick={(event) => SetBgColor(event.target.value)}/>
            <input type="button" value="yellow" onClick={(event) => SetBgColor(event.target.value)}/>
            <input type="button" value="pink" onClick={(event) => SetBgColor(event.target.value)}/>
            <input type="button" value="purple" onClick={(event) => SetBgColor(event.target.value)}/>
            <input type="button" value="orange" onClick={(event) => SetBgColor(event.target.value)}/>
            <input type="button" value="gold" onClick={(event) => SetBgColor(event.target.value)}/>
        </div>
    )

}