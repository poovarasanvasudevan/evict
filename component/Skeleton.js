import React from 'react';
import Base from "./Base";
import Navbar from "./navbar";
import ChildNavbar from "./child-navbar";

export default props => {

    return (
        <Base>
            <div className="page-header">
                <Navbar/>
                <ChildNavbar/>
            </div>
            <div className="page-content">
                {props.children}
            </div>
        </Base>
    );
}
