import React from "react";

const MobileDesc = (props) => {
    return (
        <div style={{textAlign:'start',padding:'10%'}}>
            <h1 className="dolpeText locationText">{props.title}</h1>
                <br/><p style={{color:'white'}}>
                    {props.body}
                </p>
        </div>
    );
}

export default MobileDesc;