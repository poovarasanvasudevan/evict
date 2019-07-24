import React from 'react';
import styled from 'styled-components';
import {Intent, Spinner} from "@blueprintjs/core";

const ProgressDiv = styled.div`
    height: 100%;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function (props) {
    return (
        <ProgressDiv>
            <Spinner style={{alignSelf: 'center'}} intent={Intent.PRIMARY} size={36}/>
        </ProgressDiv>);
}
