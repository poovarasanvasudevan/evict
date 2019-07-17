import React from 'react';
import Base from "../component/Base";
import {Flex, Box} from "@rebass/grid";
import {Button, Card, Elevation, H5, Classes, FormGroup, InputGroup} from "@blueprintjs/core";

export default function (props) {
    return (
        <Base>
            <Flex className='h100 flex-container' style={{marginTop: '10%'}}>
                <Box width={3 / 10} p={2}>
                    <Card elevation={1}>

                        <Flex>
                            <Box width={1.5 / 10}></Box>
                            <Box width={7 / 10} p={2}>

                                <img src="/static/img/logo.png" width={180}/>

                                <div style={{marginTop:'30px'}}>
                                    <FormGroup
                                        label="Username"
                                        labelFor="username"
                                        labelInfo="(required)">
                                        <InputGroup leftIcon="user" id="username" placeholder="Email/Username"/>
                                    </FormGroup>


                                    <FormGroup
                                        label="Password"
                                        labelFor="password"
                                        labelInfo="(required)">
                                        <InputGroup type="password" leftIcon="key" id="password"
                                                    placeholder="Password"/>
                                    </FormGroup>

                                    <Button style={{float: 'right'}} text="Sign in" intent="primary"/>
                                </div>
                            </Box>
                            <Box width={1.5 / 10}></Box>
                        </Flex>
                    </Card>
                </Box>
            </Flex>

        </Base>
    );
}
