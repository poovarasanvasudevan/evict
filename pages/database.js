import React from "react";
import Skeleton from "../component/Skeleton";
import {Flex, Box} from "@rebass/grid";

import {Select} from '@blueprintjs/select';
import {Button, ButtonGroup, Divider, MenuItem, Icon,Colors} from '@blueprintjs/core';
import Tree from 'rc-tree';
import 'rc-tree/assets/index.css';

export default props => {

    const [sItem, setSItem] = React.useState([{label: 'Select', value: 'select1'}]);

    const handleElementSelect = ({query}) => {
        console.log('printint our', query);
    };
    const dbIcon = () => (
        <Icon icon="database" iconSize={15} color={Colors.GOLD4}/>
    );
    const renderSelect = (item) => {
        console.log(item);
        return (
            <MenuItem
                key={item.label}

                onClick={handleElementSelect}
                text={item.label}
            />
        );
    };

    const treeData = [
        {
            key: '0-0',
            title: 'Tables',
            icon: dbIcon,
            children: [
                {
                    key: '0-0-0', title: 'parent 1-1', children:
                        [
                            {key: '0-0-0-0', title: 'parent 1-1-0'},
                        ],
                },
                {
                    key: '0-0-1', title: 'parent 1-2', children:
                        [
                            {key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true},
                            {key: '0-0-1-1', title: 'parent 1-2-1'},
                        ],
                },
            ],
        },
        {
            key: '0-9',
            title: 'Forms',
            icon: ()=> (
                <Icon icon="form" iconSize={15} color={Colors.COBALT4}/>
            ),
            children: [
                {
                    key: '0-0-0', title: 'parent 1-1', children:
                        [
                            {key: '0-0-0-0', title: 'parent 1-1-0'},
                        ],
                },
                {
                    key: '0-0-1', title: 'parent 1-2', children:
                        [
                            {key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true},
                            {key: '0-0-1-1', title: 'parent 1-2-1'},
                        ],
                },
            ],
        },
        {
            key: '0-1',
            title: 'Functions',
            icon: ()=> (
                <Icon icon="code" iconSize={15} color={Colors.RED3}/>
            ),
            children: [
                {
                    key: '0-0-0', title: 'parent 1-1', children:
                        [
                            {key: '0-0-0-0', title: 'parent 1-1-0'},
                        ],
                },
                {
                    key: '0-0-1', title: 'parent 1-2', children:
                        [
                            {key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true},
                            {key: '0-0-1-1', title: 'parent 1-2-1'},
                        ],
                },
            ],
        },
        {
            key: '0-8',
            title: 'Triggers',
            icon: ()=> (
                <Icon icon="take-action" iconSize={15} color={Colors.GREEN4}/>
            ),
            children: [
                {
                    key: '0-0-0', title: 'parent 1-1', children:
                        [
                            {key: '0-0-0-0', title: 'parent 1-1-0'},
                        ],
                },
                {
                    key: '0-0-1', title: 'parent 1-2', children:
                        [
                            {key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true},
                            {key: '0-0-1-1', title: 'parent 1-2-1'},
                        ],
                },
            ],
        },
        {
            key: '0-2',
            title: 'Schedulers',
            icon: ()=> (
                <Icon icon="time" iconSize={15} color={Colors.BLUE4}/>
            ),
            children: [
                {
                    key: '0-0-0', title: 'parent 1-1', children:
                        [
                            {key: '0-0-0-0', title: 'parent 1-1-0'},
                        ],
                },
                {
                    key: '0-0-1', title: 'parent 1-2', children:
                        [
                            {key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true},
                            {key: '0-0-1-1', title: 'parent 1-2-1'},
                        ],
                },
            ],
        },
        {
            key: '0-3',
            title: 'Users',
            icon: ()=> (
                <Icon icon="user" iconSize={15} color={Colors.GREEN4}/>
            ),
            children: [
                {
                    key: '0-0-0', title: 'parent 1-1', children:
                        [
                            {key: '0-0-0-0', title: 'parent 1-1-0'},
                        ],
                },
                {
                    key: '0-0-1', title: 'parent 1-2', children:
                        [
                            {key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true},
                            {key: '0-0-1-1', title: 'parent 1-2-1'},
                        ],
                },
            ],
        },
        {
            key: '0-4',
            title: 'Group',
            icon: ()=> (
                <Icon icon="group-objects" iconSize={15} color={Colors.GREEN4}/>
            ),
            children: [
                {
                    key: '0-0-0', title: 'parent 1-1', children:
                        [
                            {key: '0-0-0-0', title: 'parent 1-1-0'},
                        ],
                },
                {
                    key: '0-0-1', title: 'parent 1-2', children:
                        [
                            {key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true},
                            {key: '0-0-1-1', title: 'parent 1-2-1'},
                        ],
                },
            ],
        },
        {
            key: '0-7',
            title: 'File Storage',
            icon: ()=> (
                <Icon icon="folder-shared" iconSize={15} color={Colors.INDIGO4}/>
            ),
            children: [
                {
                    key: '0-0-0', title: 'parent 1-1', children:
                        [
                            {key: '0-0-0-0', title: 'parent 1-1-0'},
                        ],
                },
                {
                    key: '0-0-1', title: 'parent 1-2', children:
                        [
                            {key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true},
                            {key: '0-0-1-1', title: 'parent 1-2-1'},
                        ],
                },
            ],
        },
        {
            key: '0-6',
            title: 'Email',
            icon: ()=> (
                <Icon icon="comment" iconSize={15} color={Colors.GREEN4}/>
            ),
            children: [
                {
                    key: '0-0-0', title: 'parent 1-1', children:
                        [
                            {key: '0-0-0-0', title: 'parent 1-1-0'},
                        ],
                },
                {
                    key: '0-0-1', title: 'parent 1-2', children:
                        [
                            {key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true},
                            {key: '0-0-1-1', title: 'parent 1-2-1'},
                        ],
                },
            ],
        },
        {
            key: '0-10',
            title: 'Web Services',
            icon: ()=> (
                <Icon icon="globe" iconSize={15} color={Colors.VIOLET3}/>
            ),
            children: [
                {
                    key: '0-0-0', title: 'parent 1-1', children:
                        [
                            {key: '0-0-0-0', title: 'parent 1-1-0'},
                        ],
                },
                {
                    key: '0-0-1', title: 'parent 1-2', children:
                        [
                            {key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true},
                            {key: '0-0-1-1', title: 'parent 1-2-1'},
                        ],
                },
            ],
        },
    ];
    return (
        <Skeleton>
            <Flex className='h100'>
                <Box width={1.5 / 10} p={2} style={{borderRight: '1px solid #eaeaea'}}>
                    <div>
                        <ButtonGroup minimal={true}>
                            <Button icon="database"/>
                            <Button icon="diagram-tree"/>

                            <Select
                                items={sItem}
                                itemRenderer={renderSelect}
                                onItemSelect={handleElementSelect}
                                noResults={<MenuItem disabled text="No results."/>}>
                                <Button icon="globe"/>
                            </Select>
                        </ButtonGroup>
                        <Divider/>

                        <Tree
                            className="myCls"
                            showLine
                            selectable={true}
                            treeData={treeData}
                        />
                    </div>
                </Box>
                <Box width={8.5 / 10} p={2}></Box>
            </Flex>
        </Skeleton>
    );
};
