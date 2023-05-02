import Markdown from 'marked-react'

const Preview = ({text}) => {
    return(
    
        <div className="preview-block">
        <header>Preview</header>
        <div id="preview">
        <Markdown>{text}</Markdown>
        </div>
        </div>
        
    )
}

export default Preview