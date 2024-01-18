import { CodeBlock, hybrid } from 'react-code-blocks';

export default function CustomCodeBlock({ code, language, hasDescription }) {
  return (
    <div className={`${hasDescription ? "mt-4 mb-1" : "my-4"}`}>
      <CodeBlock
        text={code}
        language={language}
        theme={hybrid}
        showLineNumbers={false}
      />
    </div>
    
  )
}
