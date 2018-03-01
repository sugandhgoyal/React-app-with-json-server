
import React from 'react';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import{
    convertToRaw,
    ContentState
} from 'draft-js';
import '../assets/css/articleForm.css';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }
    componentWillReceiveProps = (nextProps) => {
        const contentBlock = htmlToDraft(nextProps.parentEditorData);
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const editorState = EditorState.createWithContent(contentState);
        this.setState({editorState})
        // console.log(contentBlock);
        // console.log(this.state.editorState);
      }
  
    onEditorStateChange = (editorState) => {
        this.setState({editorState});
        this.props.handleStateOfOuterEditor(draftToHtml(convertToRaw(editorState.getCurrentContent())));        
    };

    render() {
        const {editorState} = this.state;
        return (<Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}/>)
    }
}
export default Example;
