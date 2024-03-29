import React from "react";
import {Flex, Box} from "@rebass/grid";
import {Select} from '@blueprintjs/select';
import {
    Icon,
    Classes, Spinner, Intent
} from '@blueprintjs/core';

import Tree from '../component/tree';
import 'rc-tree/assets/index.css';

import {useQuery} from 'graphql-hooks';
import dynamic from 'next/dynamic';
import ProgressSpinner from '../component/page-spinner';

const Skeleton = dynamic(() => import('../component/Skeleton'), {
    ssr: false,
    loading: () => <ProgressSpinner/>
});

const Database = (props) => {

    const [sItem, setSItem] = React.useState([{label: 'Select', value: 'select1'}]);
    const HOMEPAGE_QUERY = `query allDatabaseApps {
                            apps: allDatabaseApps(orderBy: ID_ASC , condition: { parent : null } ) {
                                result: nodes {
                                  id
                                  icon
                                  title
                                  description
                                  color
                                  
                                  children: databaseAppsByParent(orderBy: ID_ASC) {
                                    result: nodes {
                                      id
                                      icon
                                      color
                                      title
                                      description
                                    }
                                  }
                                }
                              }
                            }
                            `;

    const {loading, error, data} = useQuery(HOMEPAGE_QUERY, {});

    if (loading) return <ProgressSpinner/>;
    if (error) return '<h1>Something Bad Happened</h1>';
    var treeMap = [];

    const child = (v) => {
        if (v.children['result']) {
            var child = [];
            v.children['result'].forEach((d, ia) => {
                child.push({
                    id: d.id,
                    label: d.title,
                    hasCaret: false,
                    icon: <Icon icon={d.icon} className={Classes.TREE_NODE_ICON} color={d.color}/>

                });
            });
            return child;
        }
        return [];
    };
    data['apps']['result'].forEach((v, i) => {
        treeMap.push({
            id: v.id,
            hasCaret: true,
            isExpanded: false,
            label: v.title,
            icon: <Icon icon={v.icon} className={Classes.TREE_NODE_ICON} color={v.color}/>,
            childNodes: child(v)
        });
    });

    return (
        <Skeleton>
            <Flex className='h100'>
                <Box width={1.5 / 10} p={2} style={{borderRight: '1px solid #eaeaea'}}>
                    <div>
                        {/*<ButtonGroup minimal={true}>*/}
                        {/*<Button icon="database"/>*/}
                        {/*<Button icon="diagram-tree"/>*/}
                        {/*</ButtonGroup>*/}
                        {/*<Divider/>*/}

                        <Tree
                            onCollapse={(data) => console.log(data)}
                            onExpand={(data) => console.log(data)}
                            onClicked={(data) => console.log(data)}
                            item={treeMap}/>
                    </div>
                </Box>
                <Box width={8.5 / 10} p={2}></Box>
            </Flex>
        </Skeleton>
    );
};


Database.getInitialProps = ({req}) => {
    return {};
};

export default Database;
