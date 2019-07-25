window.MonacoEnvironment = {baseUrl: '/monaco-editor-external'};
//import * as monaco from '@timkendrick/monaco-editor/dist/external'
import * as monaco from 'monaco-editor';
import React, {Component} from 'react'
import MonacoEditor from 'react-monaco-editor'
import '../../node_modules/@timkendrick/monaco-editor/dist/external/monaco.css'

export default (props) => (
    <MonacoEditor
        language="javascript"
        theme="vs-light"
        value=""
        options={{selectOnLineNumbers: true,fontSize:19,scrollBeyondLastLine:false }}
        onChange={() => null}
        editorDidMount={() => null}
        {...props}
    />
)
