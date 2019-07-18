import React from 'react';
import Skeleton from "../component/Skeleton";
import {Flex, Box} from "@rebass/grid";

import {
    Menu,
    MenuDivider,
    MenuItem,
    Classes,
    Icon,
    ButtonGroup,
    Button,
    Divider,
    Popover,
    Position,
    Tooltip,
    Dialog,
    AnchorButton,
    Intent
} from '@blueprintjs/core';


export default props => {
    const [newMeeting, setNewMeeting] = React.useState(false);

    const handleClose = () => {
        setNewMeeting(false);
    };

    const createMeeting = (
        <Menu>
            <Menu.Item onClick={() => setNewMeeting(true)} text="Meeting"/>
            <Menu.Item text="help"/>
        </Menu>
    );
    return (
        <Skeleton>
            <Flex className='h100'>
                <Box width={1.5 / 10} p={2} style={{borderRight: '1px solid #eaeaea'}}>
                    <div>
                        <ButtonGroup minimal={true}>
                            <Popover content={createMeeting} position={Position.BOTTOM_RIGHT}>
                                <Button icon="add" text={'Create'}/>
                            </Popover>
                        </ButtonGroup>
                        <Divider/>
                    </div>
                </Box>
                <Box p={1} width={8.5 / 10}></Box>
            </Flex>


            <Dialog
                icon="info-sign"
                onClose={handleClose}
                title="Create New Meeting"
                isOpen={newMeeting}
                autoFocus={true}
                canEscapeKeyClose={true}
                canOutsideClickClose={true}
                enforceFocus={true}
                usePortal={true}
            >
                <div className={Classes.DIALOG_BODY}>

                </div>
                <div className={Classes.DIALOG_FOOTER}>
                    <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                        <Tooltip content="Close Dialog.">
                            <Button onClick={handleClose}>Close</Button>
                        </Tooltip>
                        <Button intent={Intent.PRIMARY}>
                            Create Meeting
                        </Button>
                    </div>
                </div>
            </Dialog>
           {/*<Flex>*/}
            {/*<Box p={1} width={1.5 / 10} style={{borderRight: '1px solid #eaeaea'}}>*/}
            {/*<Menu>*/}
            {/*<MenuItem icon="new-text-box" text="New text box"/>*/}
            {/*<MenuItem ico n="new-object" text="New object"/>*/}
            {/*<MenuItem icon="new-link" text="New link"/>*/}
            {/*<MenuItem icon="cog" text="Settings..."/>*/}
            {/*</Menu>*/}
            {/*</Box>*/}
            {/*<Box p={1} width={8.5 / 10}></Box>*/}
            {/*</Flex>*/}
        </Skeleton>
    );
}
