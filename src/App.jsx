import { useState } from 'react';
import './App.css';
import { defaultMarkdown, parseMarkdown } from './markdownUtils';


function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  return (
    <div className="markdown-previewer">
      <h1>Markdown Previewer</h1>
      <div className="editor-preview-container">
        <textarea
          id="editor"
          value={markdown}
          onChange={e => setMarkdown(e.target.value)}
          className="editor"
        />
        <div
          id="preview"
          className="preview"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(markdown) }}
        />
      </div>
    </div>
  );
}

export default App;
