import React from "react"
import Skeleton from "../../component/Skeleton";
import {Flex, Box} from "@rebass/grid";
import {Menu, MenuItem} from '@blueprintjs/core';

export default props => {

    return (
        <Skeleton>
            <Flex className="h100">
                <Box p={1} width={8.5 / 10}>

                </Box>
                <Box p={1} width={1.5 / 10} style={{borderLeft: '1px solid #eaeaea'}}>
                    <Menu>
                        <MenuItem icon="new-text-box" text="New text box"/>
                        <MenuItem icon="new-object" text="New object"/>
                        <MenuItem icon="new-link" text="New link"/>
                        <MenuItem icon="cog" text="Settings..."/>
                    </Menu>
                </Box>
            </Flex>
        </Skeleton>
    );
}
