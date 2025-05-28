import { useState } from 'react'
import { marked } from 'marked'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Configure marked to NOT break on single line breaks
marked.setOptions({
  breaks: false, // Only double line breaks create new paragraphs
})

const defaultMarkdown = `# Heading 1

## Heading 2

[GitHub](https://github.com/ylmchzbie)

Here is some \`inline code\`.

\`\`\`js
// Code block
function greet() {
  console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2

> This is a blockquote.

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

**Bolded text**
`

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown)

  return (
    <>
      <div>
        <textarea
          id='editor'
          value={markdown}
          onChange={e => setMarkdown(e.target.value)}
        ></textarea>
      </div>
      <div
        id='preview'
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </>
  )
}

export default App
