import React from "react";
import {
    Navbar,
    Button,
    Alignment,
    Menu,
    MenuDivider,
    MenuItem,
    Popover,
    Position,
    Drawer,
    Icon,
    Classes,
    Alert,
    Intent
} from "@blueprintjs/core";
import Link from "next/link";
import {TimezonePicker, TimezoneDisplayFormat} from "@blueprintjs/timezone";


export default props => {

    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [timeZone, setTimeZone] = React.useState('');
    const [logout, setLogout] = React.useState(false);


    const logoutClose = () => {
        setLogout(false);
    };

    const exampleMenu = (
        <Menu>
            <MenuItem icon="cog" text="Application Settings"/>
            <MenuItem icon="notifications" text="Notification Settings"/>
            <MenuItem icon="user" text="Account Settings"/>
            <MenuItem icon="layout-group-by" text="Member Configuration"/>

            <Link href="/settings/layout">
                <MenuItem icon="new-grid-item" text="Layout Settings"/>
            </Link>

            <MenuDivider/>
            <MenuItem icon="log-out" onClick={() => setLogout(true)} text="Logout"/>
        </Menu>
    );

    const appsMenu = (
        <Menu>
            <Link href="/database">
                <MenuItem icon="database" text="Database"/>
            </Link>
            <Link href="/meeting">
                <MenuItem icon="group-objects" text="Meetings"/>
            </Link>
            <Link href="/kb">
                <MenuItem icon="bookmark" text="Knowledge Base"/>
            </Link>

            <Link href="/formbuilder">
                <MenuItem icon="dashboard" text="Form Builder"/>
            </Link>
        </Menu>
    );

    return (
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading style={{cursor: 'pointer'}}>
                    <Link href="/">
                        <img
                            src="/static/img/logo.svg"
                            height="35"
                            style={{marginTop: "3px"}}
                        />
                    </Link>
                </Navbar.Heading>

                <Navbar.Divider/>

                {/*<Link href='/database'>*/}
                {/*<Button text={'Database'} style={{fontWeight: 'bold', color: '#fff'}} class="bp3-button whitebutton bp3-minimal bp3-icon-database"/>*/}
                {/*</Link>*/}

                {/*<Link href='/meeting'>*/}
                {/*<Button text={'Meetings'} style={{fontWeight: 'bold', color: '#fff'}} class="bp3-button whitebutton bp3-minimal bp3-icon-series-add"/>*/}
                {/*</Link>*/}
            </Navbar.Group>

            <Navbar.Group align={Alignment.RIGHT}>
                <input className="bp3-input" placeholder="Search files..." type="text"/>
                <Navbar.Divider/>

                {/*<TimezonePicker*/}
                {/*value={timeZone}*/}
                {/*className="timepickerpop"*/}
                {/*valueDisplayFormat={TimezoneDisplayFormat.COMPOSITE}*/}
                {/*popoverProps={{position: Position.BOTTOM_LEFT}}*/}
                {/*onChange={(timezone) => setTimeZone(timezone)}>*/}

                {/*<Button class="bp3-button whitebutton bp3-minimal bp3-icon-globe"/>*/}
                {/*</TimezonePicker>*/}
                <Popover content={appsMenu} position={Position.BOTTOM}>
                    <Button class="bp3-button whitebutton bp3-minimal bp3-icon-grid"/>
                </Popover>

                <Button onClick={() => setDrawerOpen(true)} class="bp3-button whitebutton bp3-minimal bp3-icon-help"/>
                <Button class="bp3-button whitebutton bp3-minimal bp3-icon-user"/>

                <Button class="bp3-button whitebutton bp3-minimal bp3-icon-notifications"/>
                <Popover content={exampleMenu} position={Position.BOTTOM}>
                    <Button class="bp3-button whitebutton bp3-minimal bp3-icon-cog"/>
                </Popover>
            </Navbar.Group>


            <Alert
                confirmButtonText="Okay"
                isOpen={logout}
                onClose={logoutClose}
                cancelButtonText="Cancel"
                onCancel={logoutClose}
                intent={Intent.PRIMARY}
            >
                <p>
                    Are you Sure want to logout from system, it will removes your temporary changes
                </p>
            </Alert>
            <Drawer
                icon="info-sign"
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                title="Help."
                usePortal={true}
                autoFocus={true}
                canEscapeKeyClose={true}
                canOutsideClickClose={true}
                size={'30%'}>

                <div className={Classes.DRAWER_BODY}>
                    <div className={Classes.DIALOG_BODY}>
                        <p>
                            <strong>
                                Data integration is the seminal problem of the digital age. For over ten years,
                                we’ve helped the world’s premier organizations rise to the challenge.
                            </strong>
                        </p>
                        <p>
                            Palantir Foundry radically reimagines the way enterprises interact with data by
                            amplifying and extending the power of data integration. With Foundry, anyone can source,
                            fuse, and transform data into any shape they desire. Business analysts become data
                            engineers — and leaders in their organization’s data revolution.
                        </p>
                        <p>
                            Foundry’s back end includes a suite of best-in-class data integration capabilities: data
                            provenance, git-style versioning semantics, granular access controls, branching,
                            transformation authoring, and more. But these powers are not limited to the back-end IT
                            shop.
                        </p>
                        <p>
                            In Foundry, tables, applications, reports, presentations, and spreadsheets operate as
                            data integrations in their own right. Access controls, transformation logic, and data
                            quality flow from original data source to intermediate analysis to presentation in real
                            time. Every end product created in Foundry becomes a new data source that other users
                            can build upon. And the enterprise data foundation goes where the business drives it.
                        </p>
                        <p>Start the revolution. Unleash the power of data integration with Palantir Foundry.</p>
                    </div>
                </div>
                <div className={Classes.DRAWER_FOOTER}>Footer</div>
            </Drawer>
        </Navbar>
    );
};
