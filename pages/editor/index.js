import React from 'react';
import Skeleton from "../../component/Skeleton";
import {Flex, Box} from "@rebass/grid";

import {Menu, MenuDivider, MenuItem, Classes, Icon} from '@blueprintjs/core';
import dynamic from 'next/dynamic'
import ProgressSpinner from "../../component/page-spinner";

const CodeWithMonaco = dynamic(import('../../component/editor'), {ssr: false, loading: () => <ProgressSpinner/>})

export default props => {

    const someJs = [
        "import {myCoolFunc} from './utils'",
        'export default async () => {',
        '  await myCoolFunc()',
        '}'
    ].join("\n")

    return (
        <Skeleton>
            <Flex className="h100">
                <Box p={1} width={1.5 / 10} style={{borderRight: '1px solid #eaeaea'}}>
                    <Menu>
                        <MenuItem icon="new-text-box" text="New text box"/>
                        <MenuItem icon="new-object" text="New object"/>
                        <MenuItem icon="new-link" text="New link"/>
                        <MenuItem icon="cog" text="Settings..."/>
                    </Menu>
                </Box>
                <Box width={8.5 / 10}>
                    <CodeWithMonaco language="javascript" value={someJs}/>
                </Box>

            </Flex>
        </Skeleton>
    );
}
