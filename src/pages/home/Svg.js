//React
import React from 'react'

export default function Svg() {
    const color = "#7F9BAA";
    return (
        <div>
            <svg style = {{backgroundColor: "#ededed", display: "block" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={color} fill-opacity="1" d="M0,64L48,53.3C96,43,192,21,288,58.7C384,96,480,192,576,197.3C672,203,768,117,864,112C960,107,1056,181,1152,208C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    )
}
