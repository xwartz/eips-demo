import React from 'react'
import './style.css'

export type CodeBlockProps = {
  name: string
  code: string
  onClick: (p: any) => void
}
const CodeBlock: React.FC<CodeBlockProps> = ({ name, code, onClick }) => {
  return (
    <div className="codeblock" key={name}>
      <button className="code-button" onClick={onClick}>
        {name}
      </button>
      <details>
        <summary>show code</summary>
        <pre>{code}</pre>
      </details>
    </div>
  )
}

export default CodeBlock
