import React, { useState } from 'react';

const ParagraphWordCounter = () => {
  const [text, setText] = useState('');
  
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim().split(/\s+/).length;

  return (
    <div>
      <textarea
        rows={4}
        cols={50}
        value={text}
        onChange={handleTextChange}
        placeholder="Type or paste your paragraph here..."
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default ParagraphWordCounter;
