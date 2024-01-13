import { CodeBlock, hybrid } from 'react-code-blocks';

export default function CustomCodeBlock({ code, language }) {
  return (
    <div className="my-4">
      <CodeBlock
        text={code}
        language={language}
        theme={hybrid}
        showLineNumbers={false}
      />
    </div>
    
  )
}
