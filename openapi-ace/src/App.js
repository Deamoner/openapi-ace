import React, { useState } from 'react';
import AceEditor from 'react-ace';
import * as yaml from 'js-yaml';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-terminal';

function App() {
  const [value, setValue] = useState('');
  const [mode, setMode] = useState('json'); // Change this to 'yaml' if you want to write your spec in YAML
  const [validationResult, setValidationResult] = useState(null);

  const validateSpec = async () => {
    try {
      return true;
    } catch (error) {
      setValidationResult(`Invalid OpenAPI spec: ${error.message}`);
    }
  };

  return (
    <div id="App-header" style={{ height: '100vh', width: '100vw' }}>
      <AceEditor
        mode={mode}
        theme="terminal"
        value={value}
        onChange={setValue}
        name="OPENAPI_EDITOR"
        editorProps={{ $blockScrolling: true }}
        style={{ height: '100%', width: '100%' }}
      />
      <button onClick={validateSpec}>Validate Spec</button>
      {validationResult && <p>{validationResult}</p>}
    </div>
  );
}

export default App;
