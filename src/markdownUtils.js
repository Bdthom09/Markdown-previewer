export const defaultMarkdown = `# Welcome to the Markdown Previewer!

## This is a sub-heading (H2)

[GitHub](https://github.com)

Here is some inline code: \`<div></div>\`

\`\`\`
function helloWorld() {
  console.log('Hello, world!');
}
\`\`\`

- List item one
- List item two
- List item three

> This is a blockquote.

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

**This text is bold!**
`;

export function parseMarkdown(markdown) {
  const { marked } = require('marked');
  return marked.parse(markdown, { breaks: true });
}
