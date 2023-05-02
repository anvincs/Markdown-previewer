

const Editor = ({text, handleChange}) => {
    return(
    
        <div className="editor-block">
        <header>Editor</header>
        <textarea name="editior" id="editor" cols="30" rows="100" value={text} onChange={handleChange} >
            
        </textarea>
        </div>
        
    )
}

export default Editor