import React from 'react';
import {Flex, Box} from "@rebass/grid";

import {
    Menu,
    MenuDivider,
    MenuItem,
    Classes,
    Icon,
    Card,
    InputGroup,
    Popover,
    Button,
    Position
} from '@blueprintjs/core';
import ProgressSpinner from '../../component/page-spinner';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const Skeleton = dynamic(() => import('../../component/Skeleton'), {
    ssr: false,
    loading: () => <ProgressSpinner/>
});

import ReactFromJSON from "react-from-json";
import mapper from '../../component/mapper'

export default props => {

    const entry = {
        type: 'Flex',
        props: {
            p: 2,
            children: {
                type: 'Box',
                props: {
                    p: 2,
                    width: 0.12,
                    children: [
                        {
                            type: "FormGroup",
                            props: {
                                label: "Article ID",
                                labelFor: 'article_id',
                                labelInfo: "(required)",
                                children: {
                                    type: 'InputGroup',
                                    props: {
                                        id: 'article_id',
                                        placeholder: "Article ID"
                                    }
                                }
                            }
                        },
                        {
                            type: "FormGroup",
                            props: {
                                label: "Article ID",
                                labelFor: 'article_id',
                                labelInfo: "(required)",
                                children: {
                                    type: 'InputGroup',
                                    props: {
                                        id: 'article_id',
                                        placeholder: "Article ID"
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        }

    };


    return (
        <Skeleton>
            <Flex>
                <Box width={10 / 10}>
                    <div>
                        <ReactFromJSON entry={entry} mapping={mapper}/>
                    </div>
                </Box>
            </Flex>
        </Skeleton>
    );
}
