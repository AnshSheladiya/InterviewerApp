import React, { useState } from 'react';
import DropzoneHelper from './Helperfiles/react-dropzone/DropzoneHelper';

const App = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (files) => {
    // Handle the uploaded files here (e.g., save to state)
    setUploadedFiles(files);
  };

  return (
    <div className="App">
      <h1>File Upload Example</h1>
      <DropzoneHelper onFileUpload={handleFileUpload} />
      {uploadedFiles.length > 0 && (
        <div>
          <h2>Uploaded Files:</h2>
          <ul>
            {uploadedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;


