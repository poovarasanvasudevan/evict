import React from 'react';
import {Flex, Box} from "@rebass/grid";
import dynamic from 'next/dynamic';
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
    Checkbox,
    FormGroup,
    InputGroup,
    Dialog,
    TextArea,
    AnchorButton,
    Intent
} from '@blueprintjs/core';

import ProgressSpinner from "../component/page-spinner";

const Skeleton = dynamic(() => import('../component/Skeleton'), {
    ssr: false,
    loading: () => <ProgressSpinner/>
});
export default props => {
    const [newMeeting, setNewMeeting] = React.useState(false);
    const [privateMeeting, setPrivateMeeting] = React.useState(false);

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
                    <FormGroup
                        label="Summary"
                        labelFor="summary"
                        labelInfo="(required)"
                    >
                        <InputGroup id="summary" placeholder="Summary..."/>
                    </FormGroup>


                    <FormGroup
                        label="Description"
                        labelFor="description"
                        labelInfo="(required)">
                        <TextArea fill id="description" placeholder="Description..."/>
                    </FormGroup>

                    <FormGroup
                        label="Meeting Settings"
                    >
                        <Checkbox checked={privateMeeting} onChange={(data) => console.log(data)}
                                  label="Private Meeting"/>
                    </FormGroup>
                </div>
                <div className={Classes.DIALOG_FOOTER}>
                    <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                        <Tooltip content="Close Dialog."><Button onClick={handleClose}>Close</Button></Tooltip>
                        <Tooltip content="Create Meeting."><Button intent={Intent.PRIMARY}>Create
                            Meeting</Button></Tooltip>
                    </div>
                </div>
            </Dialog>


        </Skeleton>
    );
}
