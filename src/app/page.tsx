"use client";
import { useState, useEffect } from "react";
import { type EditorProps } from "@monaco-editor/react";

import EditorMonaco from "@/src/components/EditorMonaco/EditorMonaco";
import Output from "@/src/components/Output/Output";
import HeaderApp from "@/src/components/HeaderApp/HeaderApp";

const Home = () => {
  const [code, setCode] = useState<string>("");
  const [outputContent, setOutputContent] = useState<string>("");
  const [consoleLogs, setConsoleLogs] = useState<
    { method: string; data: never[]; timestamp: string }[]
  >([]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "console") {
        const newLog = {
          method: event.data.method, // 'log', 'error', 'warn'
          data: event.data.data,
          timestamp: new Date().toLocaleTimeString(),
        };

        setConsoleLogs((prev) => [...prev, newLog]);
      }
    };

    window.addEventListener("message", handleMessage);

    // Cleanup
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleChangeValue = (value: EditorProps["value"]) => {
    setCode(value ?? "");
  };

  const handleRunCode = () => {
    setConsoleLogs([]);

    const html = /*html*/ `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <script>
          (() => {
            const originLog = console.log;
            const originLogError = console.error;

            console.log = function(...args) {
              window.parent.postMessage({
                type: 'console',
                method: 'log',
                data: args.map(arg => {
                  if (typeof arg === 'object') {
                    return JSON.stringify(arg, null, 2);
                  }
                  return String(arg);
                })
              }, '*');
              
              originLog.apply(console, args);
            };

            console.error = function(...args) {
              window.parent.postMessage({
                type: 'console',
                method: 'error',
                data: args.map(arg => String(arg))
              }, '*');
              originalError.apply(console, args);
            };
            
            window.onerror = function(msg, url, line, col, error) {
              window.parent.postMessage({
                type: 'console',
                method: 'error',
                data: ['Error at line ' + line + ': ' + msg]
              }, '*');
              return false;
            };

          })()
          ${code}
        </script>
      </body>
      </html>
    `;
    setOutputContent(html);
  };

  return (
    <div className="h-screen">
      <HeaderApp />
      <div className="flex h-[calc(100vh-64px)]">
        <EditorMonaco
          value={code}
          defaultLanguage="javascript"
          onChange={handleChangeValue}
        />

        <div className="w-1/2">
          <Output consoleLogs={consoleLogs} outputContent={outputContent} />
        </div>
      </div>
    </div>
  );
};

export default Home;
