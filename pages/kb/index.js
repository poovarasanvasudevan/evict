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


import Avatar from '@atlaskit/avatar';
import Comment, {
    CommentAuthor,
    CommentTime,
    CommentAction,
    CommentEdited,
} from '@atlaskit/comment';
import RefinementBar, {SearchFilter, SelectFilter} from '@atlaskit/refinement-bar';


const ChildAligner = styled.div`
    margin-left:20px;
`;

const CustomRefinmentBar = styled(RefinementBar)`
    border : 1px solid #eaeaea;
    height : 20px !important;
`;

export default props => {


    const [search, setSearch] = React.useState('');
    const [check, setCheck] = React.useState([]);
    const [keywords, setKeywords] = React.useState([
        {label: 'Adelaide', type: 'bug', value: 'adelaide'},
        {label: 'Brisbane', value: 'brisbane'},
        {label: 'Canberra', value: 'canberra'},
        {label: 'Darwin', value: 'darwin'},
        {label: 'Hobart', value: 'hobart'},
        {label: 'Melbourne', value: 'melbourne'},
        {label: 'Perth', value: 'perth'},
        {label: 'Sydney', value: 'sydney'},
    ]);

    const onSearchChange = value => {
        setSearch(value);
    };
    const onCheckChange = value => {
        setCheck(value);
    };


    const permissionsMenu = (
        <Popover
            content={
                <Menu>
                    <MenuItem text="can edit"/>
                    <MenuItem text="can view"/>
                </Menu>
            }

            position={Position.BOTTOM_RIGHT}
        >
            <Button minimal={true} rightIcon="caret-down">
                search in
            </Button>
        </Popover>
    );

    return (
        <Skeleton>
            <Flex>
                <Box width={10 / 10}>
                    <div>
                        <Box width={10 / 10}>
                            <Card style={{padding: '8px'}}>
                                <Flex>
                                    <Box width={2 / 10}>
                                        <Button text={'New'} icon={'add'} minimal />
                                    </Box>
                                    <Box width={6 / 10}>
                                        <Flex>


                                            <ChildAligner>
                                                <CustomRefinmentBar
                                                    fieldConfig={{
                                                        keywords: {
                                                            label: 'Keywords',
                                                            type: SelectFilter,
                                                            options: keywords,
                                                        },
                                                    }}
                                                    irremovableKeys={['keywords']}
                                                    onChange={onCheckChange}
                                                    value={check}
                                                />
                                            </ChildAligner>

                                            <ChildAligner>
                                                <InputGroup
                                                    rightElement={permissionsMenu}
                                                    leftIcon="search"
                                                    placeholder="Search"/>

                                                {/*<RefinementBar*/}
                                                {/*fieldConfig={{search: {label: 'Search', type: SearchFilter}}}*/}
                                                {/*irremovableKeys={['search']}*/}
                                                {/*onChange={onSearchChange}*/}
                                                {/*value={search}*/}
                                                {/*/>*/}
                                            </ChildAligner>
                                        </Flex>
                                    </Box>
                                    <Box width={2 / 10}>
                                    </Box>
                                </Flex>
                            </Card>
                        </Box>
                        <Box p={2} width={10 / 10}>
                            <Comment
                                avatar={<Avatar src="/static/img/bot.jpg" label="Atlaskit avatar" size="medium"/>}
                                author={<CommentAuthor>John Smith</CommentAuthor>}
                                edited={<CommentEdited>Edited</CommentEdited>}
                                restrictedTo="Restricted to Admins Only"
                                time={<CommentTime>30 August, 2016</CommentTime>}
                                content={
                                    <p>
                                        Content goes here. This can include <a href="/link">links</a> and
                                        other content.
                                    </p>
                                }
                                actions={[
                                    <CommentAction>Reply</CommentAction>,
                                    <CommentAction>Edit</CommentAction>,
                                    <CommentAction>Like</CommentAction>,
                                ]}
                            />
                        </Box>
                    </div>
                </Box>
            </Flex>
        </Skeleton>
    );
}
