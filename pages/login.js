import React from 'react';
import {Flex, Box} from "@rebass/grid";
import {Button, Card, Elevation, H5, Classes, FormGroup, InputGroup, Colors} from "@blueprintjs/core";
import {Head} from 'next/document';
import ProgressSpinner from "../component/page-spinner";
import dynamic from 'next/dynamic';
import styled from 'styled-components'

const Base = dynamic(() => import('../component/Base'), {
    ssr: false,
    loading: () => <ProgressSpinner/>
});


const SocialButton = styled(Button)`
    border-radius : 20px;
    margin:5px;
    border: 1px solid #eaeaea;
`;


export default function (props) {
    return (
        <Base>
            <style dangerouslySetInnerHTML={{__html: `body { background-color: ${Colors.COBALT2}`}}/>
            <Flex className='h100 flex-container' style={{marginTop: '10%'}}>
                <Box width={3 / 10} p={2}>
                    <Card elevation={1}>
                        <Flex>
                            <Box width={1.5 / 10}></Box>
                            <Box width={7 / 10} p={2}>

                                <img src="/static/img/logo_black.svg" height={50}/>

                                <FormGroup style={{marginTop: '30px'}}>
                                    <FormGroup
                                        label="Username"
                                        labelFor="username"
                                        labelInfo="(required)">
                                        <InputGroup autoComplete={'off'}
                                                    leftIcon="user"
                                                    id="username"
                                                    placeholder="Email/Username"/>
                                    </FormGroup>


                                    <FormGroup
                                        label="Password"
                                        labelFor="password"
                                        labelInfo="(required)">
                                        <InputGroup type="password"
                                                    leftIcon="key"
                                                    id="password"
                                                    placeholder="Password"/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Button style={{float: 'right'}} text="Sign in" intent="primary"/>
                                    </FormGroup>
                                </FormGroup>
                                <div style={{marginTop: '20px'}}>
                                    <SocialButton  icon="book" text="Google"
                                            minimal/>
                                    <SocialButton text="Facebook" minimal/>
                                    <SocialButton text="Github" minimal/>
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
