import {Button, Icon, FormGroup, InputGroup} from "@blueprintjs/core";
import AIcon from "@atlaskit/icon";
import React from "react";
import {Flex, Box} from "@rebass/grid";

export default {
    Button: (props) => <Button {...props} />,
    Icon: (props) => <Icon {...props}/>,
    AIcon: (props) => <AIcon {...props}/>,
    FormGroup: (props) => {
        let temp_props = props;
        return <FormGroup {...temp_props}>{props.children}</FormGroup>
    },
    InputGroup: (props) => <InputGroup {...props} />,
    Box: (props) => <Box {...props}>{props.children}</Box>,
    Flex: (props) => <Flex {...props}>{props.children}</Flex>
}
