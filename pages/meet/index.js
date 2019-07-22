import React from 'react';
import Skeleton from "../../component/Skeleton";
import {Flex, Box} from "@rebass/grid";
import {Menu, MenuDivider, MenuItem, Classes, Icon, Spinner, Intent} from '@blueprintjs/core';
import Base from "../../component/Base";


import dynamic from 'next/dynamic';

const MyStream = dynamic(() => import('../../component/my-stream'), {
    ssr: false,
    loading: () => <Spinner style={{alignSelf: 'center'}} intent={Intent.PRIMARY} size={28}/>
});


export default props => {
    return (
        <Base>
            <Flex className="h100">
                <Box p={2} width={8.3 / 10} style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{alignSelf: 'flex-end'}}>
                        <MyStream/>
                    </div>
                </Box>
                <Box p={1} width={1.7 / 10} style={{borderLeft: '1px solid #eaeaea'}}>
                    <Menu>
                        <MenuItem icon="new-text-box" text="New text box"/>
                        <MenuItem icon="new-object" text="New object"/>
                        <MenuItem icon="new-link" text="New link"/>
                        <MenuItem icon="cog" text="Settings..."/>
                    </Menu>
                </Box>
            </Flex>
        </Base>
    );
}
