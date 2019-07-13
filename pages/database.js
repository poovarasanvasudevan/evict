import React from "react";
import Skeleton from "../component/Skeleton";
import {Flex, Box} from "@rebass/grid";

import {Select} from '@blueprintjs/select';
import {Button, ButtonGroup, Divider, MenuItem, Icon, Colors} from '@blueprintjs/core';
import Tree from 'rc-tree';
import 'rc-tree/assets/index.css';

import knex from '../database'
import {useQuery,useManualQuery} from 'graphql-hooks'


const Database = (props) => {

    const [sItem, setSItem] = React.useState([{label: 'Select', value: 'select1'}]);
    const [menuItem, setMenuItem] = React.useState([]);


    const HOMEPAGE_QUERY = `query allDatabaseApps {
                              apps : allDatabaseApps(orderBy: ID_ASC) {
                                result : nodes {
                                  id
                                  icon
                                  title
                                  description
                                  color
                                }
                              }
                            }
                            `;

    const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {});
    if (loading) return '<h1>Loading...</h1>'
    if (error) return '<h1>Something Bad Happened</h1>'


    var treeMap = [];
    data['apps']['result'].forEach((v, i) => {
        treeMap.push({
            key: v.id,
            title: v.title,

            icon: () => (
                <Icon icon={v.icon} iconSize={15} color={v.color}/>
            ),
            children : [ {
                key : 'child_' + v.id + "_app" + "_" + v.title,
                title : v.title
            }]
        })
    });


    return (
        <Skeleton>
            <Flex className='h100'>
                <Box width={1.5 / 10} p={2} style={{borderRight: '1px solid #eaeaea'}}>
                    <div>
                        <ButtonGroup minimal={true}>
                            <Button icon="database"/>
                            <Button icon="diagram-tree"/>
                        </ButtonGroup>
                        <Divider/>

                        <Tree
                            className="myCls"
                            showLine
                            selectable={true}
                            treeData={treeMap}
                        />
                    </div>
                </Box>
                <Box width={8.5 / 10} p={2}></Box>
            </Flex>
        </Skeleton>
    );
};


Database.getInitialProps = ({req}) => {


    return {}
}

export default Database;
