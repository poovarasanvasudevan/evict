import {Button, Icon, FormGroup, InputGroup, MenuItem} from "@blueprintjs/core";
import {Select} from "@blueprintjs/select";
import AIcon from "@atlaskit/icon";
import React from "react";
import {Flex, Box} from "@rebass/grid";

export default {
    Button: (props) => <Button {...props} />,
    Icon: (props) => <Icon {...props}/>,
    AIcon: (props) => <AIcon {...props}/>,
    FormGroup: (props) => <FormGroup {...props}>{props.children}</FormGroup>,
    InputGroup: (props) => <InputGroup {...props} />,
    Box: (props) => <Box {...props}>{props.children}</Box>,
    Flex: (props) => <Flex {...props}>{props.children}</Flex>,
    MenuItem: (props) => <MenuItem {...props}>{props.children}</MenuItem>,
    Select: (props) => <Select {...props}>{props.children}</Select>,
}
