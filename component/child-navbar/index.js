import React from "react";
import {Card, ButtonGroup, Button, Navbar} from "@blueprintjs/core";
import Link from "next/link";

const ChildNavbar = (props) => {

    return (
        <Card style={{padding: '5px'}}>
            <ButtonGroup minimal={true}>
                <Link href='/database'>
                    <Button icon="database">Database</Button>
                </Link>
                <Link href='/meeting'>
                    <Button icon="grouped-bar-chart">Meetings</Button>
                </Link>
                <Link href='/kb'>
                    <Button icon="book">Knowledge Base</Button>
                </Link>
            </ButtonGroup>
        </Card>
    );

};
export default ChildNavbar;
