import { useState } from 'react'
import { marked } from 'marked'
import './App.css'

// Configure marked to NOT break on single line breaks
marked.setOptions({
  breaks: true, // Single line breaks create <br>
})

// Default markdown content
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
      <h1>Markdown Previewer</h1>
      <div className='relative w-full min-w-[200px] min-h-[200px]'>
        <textarea
          id='editor'
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
