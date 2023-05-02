import { useState } from 'react'
import './App.css'
import Editor from './Editor'
import Preview from './Preview'

function App() {

  const [text, setText] = useState("# Welcome to my React Markdown Previewer\n## This is a subheading...\n### This is another subheading\n\nThis is how you write code , between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction greet(name) {\n  console.log('Hello'+name)\n}\n```\n\nWe can make text **bold** or _italic_ or **_both!_**\n\nWe can also ~~cross~~ stuff\n\nHere is a link to [React](https://www.react.dev)\n\nThis is a\n> Block Quote!\n\nWe can even create tables : \n\n|Library Name | Is Good?|\n|-------------|---------|\n|React | Good|\n|Angular | Good|\n\n- There are also lists\n\n  - Bulleted\n    - With different indendation level\n      - Like this\n1. And there are numbered lists\n\n1. It's so easy\n1. And finally we have images\n\n![React Logo](https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?pid=ImgDet&rs=1)");



  const handleChange = (e) => {
    setText(e.target.value);
  }
 

  return (
   <div id='app'>
    <h1 className='main-heading' >Markdown Previewer</h1>
    <marquee  direction="rtl">A custom markdown previwer built using React</marquee>
    <Editor  text={text} handleChange={handleChange} />
    <Preview text={text} />
    </div>
  )
}

export default App
