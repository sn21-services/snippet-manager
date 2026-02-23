"use client";
import { useState, useEffect } from "react";
import { type EditorProps } from "@monaco-editor/react";

import EditorMonaco from "@/components/EditorMonaco/EditorMonaco";

import Console from "@/components/Console/Console";
import Preview from "@/components/Preview/Preview";
import { LanguageDevelopment } from "@/constants/app.constants";
import { cn } from "@/utils/tailwind.helper";
import { CodeEditor } from "@/types/app.types";
import HeaderApp from "@/components/HeaderApp/HeaderApp";

const Home = () => {
  const [code, setCode] = useState<CodeEditor>({
    html: `<img src="https://images.pexels.com/photos/18816026/pexels-photo-18816026.jpeg" alt="">`,
    css: "",
    javascript: "",
  });
  const [contentCode, setContentCode] = useState<string>("");
  const [consoleLogs, setConsoleLogs] = useState<
    { method: string; data: never[]; timestamp: string }[]
  >([]);
  const [language, setLanguage] = useState<LanguageDevelopment>(
    LanguageDevelopment.HTML,
  );

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (["console", "alert"].includes(event.data.type)) {
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
    setCode({ ...code, [language]: value ?? "" });
  };

  const handleRunCode = () => {
    const html = /*html*/ `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
          * {
            box-sizing: border-box;
          }
          img {
            max-width: 100%;
            width: 100%;
            object-fit: cover;
          }  
          ${code.css}
        </style>
      </head>
      <body>
        ${code.html}
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

            const originalAlert = window.alert;
            window.alert = function (...args) {
              window.parent.postMessage({
                  type: "alert",
                  method: 'alert',
                  data: args.map(arg => String(arg))
                }, "*");
            };
          })()
        </script>
        <script>
           ${code.javascript}
        </script>
      </body>
      </html>
    `;
    setContentCode(html);
  };

  const handleClearConsole = () => {
    setConsoleLogs([]);
  };

  return (
    <>
      <HeaderApp onClickRunCode={handleRunCode} />
      <div className="flex items-center h-9">
        <div
          className={cn(
            "flex items-center px-5 py-2 gap-2 text-sm cursor-pointer select-none",
            language === LanguageDevelopment.HTML
              ? "bg-[#1e1e1e]"
              : "bg-[#3d3e41]",
          )}
          onClick={() => setLanguage(LanguageDevelopment.HTML)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <path
              fill="#F4BF75"
              d="m11.631 5.1.136-1.531H4.233l.4 4.672h5.216l-.187 2-1.679.459-1.67-.464L6.2 9.015H4.71l.19 2.433 3.085.875h.032v-.009l3.06-.866.423-4.76H6.014L5.886 5.1h5.744ZM2 1h12l-1.091 12.583L7.983 15l-4.892-1.417Z"
            ></path>
          </svg>
          html
        </div>
        <div
          className={cn(
            "flex items-center px-5 py-2 gap-2 text-sm cursor-pointer select-none",
            language === LanguageDevelopment.CSS
              ? "bg-[#1e1e1e]"
              : "bg-[#3d3e41]",
          )}
          onClick={() => setLanguage(LanguageDevelopment.CSS)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 -1 16 16"
          >
            <path
              fill="#1E9CEF"
              d="M3.785 2H14l-1.805 9.164L6.738 13 2 11.164l.482-2.447H4.5l-.2 1.011 2.864 1.107 3.3-1.107.461-2.328h-8.2l.395-2.045h8.206l.258-1.313h-8.2Z"
            ></path>
          </svg>
          css
        </div>
        <div
          className={cn(
            "flex items-center px-5 py-2 gap-2 text-sm cursor-pointer select-none",
            language === LanguageDevelopment.JAVASCRIPT
              ? "bg-[#1e1e1e]"
              : "bg-[#3d3e41]",
          )}
          onClick={() => setLanguage(LanguageDevelopment.JAVASCRIPT)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="#E79627"
            viewBox="-40 -40 586 586"
          >
            <path
              d="M412.226 385.563c28.065 37.511-46.893 64.77-77.11 10.559l-41.05 23.822 2.516 4.167c15.464 26.04 39.62 41.294 72.27 45.673 71.481 8.55 118.148-37.034
             92.817-101.767C443.667 331 396.5 324 369 305.75c-16.172-9.422-12.806-29.364.183-37.365 10.102-6.222 33.317-7.01 45.274 17.786l39.28-25.317C422.75 205 349.5 
             216.25 327.544 241.627 297.688 276.702 306.228 315.85 332.5 341c20.434 19.561 52.501 26.202 79.726 44.563m-185.588 79.069c22.63-9.153 35.904-28.074 
             39.416-56.202.305-2.848.508-184.599.508-184.599h-49.788l-.36 179.779c-1.164 11.64-8.122 19.983-18.289 21.619-17.347 2.791-28.911-2.26-40.963-24.826l-40.535 
             24.508c17.373 40.839 69.745 55.838 110.011 39.72M44.873 0h422.254C491.987 0 512 20.013 512 44.873v422.254c0 24.86-20.013 44.873-44.873 44.873H44.873C20.013 512 0 491.987 0 467.127V44.873C0 20.013 20.013 0 44.873 0"
            ></path>
          </svg>
          js
        </div>
      </div>
      <div className="flex h-[calc(100vh-84px)]">
        <EditorMonaco
          key="monaco"
          value={code[language]}
          defaultLanguage={LanguageDevelopment.HTML}
          language={language}
          onChange={(value) => handleChangeValue(value)}
        />
        <div className="relative flex-1 flex flex-col">
          <Preview contentCode={contentCode} />
          <Console
            consoleLogs={consoleLogs}
            onClearConsole={handleClearConsole}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
