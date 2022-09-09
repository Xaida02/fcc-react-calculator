import React from "https://cdn.skypack.dev/react@17.0.1";
import '../stylesheets/ClearBtn.css';
 

const ClearBtn = (props) => (
    <div className='clear-btn' id="clear" onClick={props.handleClear}>
        {props.children}
    </div>
)


export default ClearBtn