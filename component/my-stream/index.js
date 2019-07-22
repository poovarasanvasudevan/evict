import React from 'react';
import {Box, Flex} from "@rebass/grid";
import styled from 'styled-components';
import {Icon, Colors, Classes} from '@blueprintjs/core';


const MyStreamBox = styled(Box)`
 
    width: 250px;
    height: 150px;
    border-radius: 3px;
    display : flex;
    cursor : pointer;   
    background:black;
`;

const Indicator = styled(Icon)`
     padding: 3px;
     margin: 3px;
     border-radius: 3px;
     cursor:pointer;
     // display: none;
     //
     // ${MyStreamBox}:hover & {
     //    display:inline-block;
     // }
`;


export default function () {
    return (

        <MyStreamBox p={1}>
            <div style={{display: 'flex', flexDirection: 'row', width: '100%', alignSelf: 'flex-end'}}>
                <div>
                    <Indicator title="Network Stat"
                               icon="volume-up"
                               key="mic"
                               color={Colors.WHITE}
                               iconSize={12}/>

                    <Indicator title="Camera"
                               key="network"
                               icon="camera"
                               color={Colors.WHITE}
                               iconSize={12}/>

                    <Indicator title="Network Stat"
                               key="video"
                               icon="vertical-bar-chart-asc"
                               color={Colors.WHITE}
                               iconSize={12}/>
                </div>

                <div style={{flex: 'auto'}}></div>

                <div>
                    <Indicator title="Network Stat"
                               icon="help"
                               key="mics"
                               color={Colors.WHITE}
                               iconSize={12}/>
                </div>

            </div>
        </MyStreamBox>

    );
}
