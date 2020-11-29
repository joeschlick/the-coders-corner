
import React, { useState, useEffect } from 'react';
import './editor/style.css';
import EditorComponent from './editor/Editor';
import useLocalStorage from './editor/hooks/useLocalStorage';

function Editor() {

    const [html, setHtml] = useLocalStorage('html', '');
    const [css, setCss] = useLocalStorage('css', '');
    const [js, setJs] = useLocalStorage('js', '');
    const [srcDoc, setSrcDoc] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
          setSrcDoc(
            `
            <html>
              <body>${html}</body>
              <style>${css}</style>
              <script>${js}</script>
            </html>
            `
          )
        }, 250); 
        return () => clearTimeout(timeout);
      }, [html, css, js]); 

    return (
        <>
        <div style={{display: "flex", flexDirection: "row"}}>
            <div className="pane top-pane">
                <EditorComponent
                    language='xml' 
                    displayName='HTML'
                    value={html} 
                    onChange={setHtml}
                />
                <EditorComponent 
                    language='css' 
                    displayName='CSS' 
                    value={css} 
                    onChange={setCss}
                />
                <EditorComponent 
                    language="javascript" 
                    displayName="Javascript" 
                    value={js} 
                    onChange={setJs}
                />
            </div>
            <div className="pane">
                <iframe 
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
                />
            </div>
        </div>
        </>
    )
}

export default Editor;