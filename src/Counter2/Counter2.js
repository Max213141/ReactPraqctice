import React from  'react'
import {clickedContext} from "../App";


export default props => {
    return (
        <div style = {{
            border:'1px solid #ccc',
            width:'200px',
            margin:'auto'
        }}>
            <h3>Counter2</h3>
            <clickedContext.Consumer>
                {clicked => clicked ? <p>Clicked</p> : null}
            </clickedContext.Consumer>
        </div>
    )
}