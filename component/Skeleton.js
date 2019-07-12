import React from 'react';
import Base from "./Base";
import Navbar from "./navbar";

export default props => {

    return (
        <Base>
            <div className="page-header">
                <Navbar/>
            </div>
            <div className="page-content">
                {props.children}
            </div>
        </Base>
    )
}
