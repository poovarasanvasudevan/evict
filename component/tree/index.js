import React from 'react';
import {Tree, ContextMenu, MenuItem, Menu, MenuDivider,Classes} from '@blueprintjs/core';

export default function (props) {
    const [menuItem, setMenuItem] = React.useState(props.item);

    const handleNodeClick = (nodeData, _nodePath, e) =>  {
       // nodeData.isExpanded ? onCollapse(nodeData) : onExpand(nodeData)
        if(props.onClicked ) {
            props.onClicked(nodeData)
        }
    };
    const handleNodeCollapse = (nodeData) => {
        nodeData.isExpanded = false;
        setMenuItem([...menuItem]);

        if(props.onCollapse ) {
            props.onCollapse(nodeData)
        }
    };
    const handleNodeExpand = (nodeData) => {
        nodeData.isExpanded = true;
        setMenuItem([...menuItem]);
        if(props.onExpand ) {
            props.onExpand(nodeData)
        }
    };
    const onExpand = React.useCallback(handleNodeExpand, []);
    const onCollapse = React.useCallback(handleNodeCollapse, []);
    const onNodeClick = React.useCallback(handleNodeClick, []);
    const showContextMenu = (nodeData, path, e) => {
        e.preventDefault();
        ContextMenu.show(
            <Menu>
                <MenuItem icon="search-around" text="Search around..."/>
                <MenuItem icon="search" text="Object viewer"/>
                <MenuItem icon="graph-remove" text="Remove"/>
                <MenuItem icon="group-objects" text="Group"/>
                <MenuDivider/>
                <MenuItem disabled={true} text="Clicked on node"/>
            </Menu>,
            {left: e.clientX, top: e.clientY}
        );
    };

    return (<Tree contents={menuItem}
                  onNodeContextMenu={showContextMenu}
                  onNodeCollapse={onCollapse}
                  onNodeClick={onNodeClick}
                  onNodeExpand={onExpand}/>);
}
