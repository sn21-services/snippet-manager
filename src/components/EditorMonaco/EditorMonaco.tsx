"use client";

import { useEffect, useState } from "react";
import { Resizable, ResizeCallbackData } from "react-resizable";
import { Editor, type EditorProps, useMonaco } from "@monaco-editor/react";
import { emmetCSS, emmetHTML, emmetJSX } from "emmet-monaco-es";

const RATIO = 0.55;

const EditorMonaco = ({ language, ...props }: EditorProps) => {
  const monaco = useMonaco();
  const [width, setWidth] = useState<number | null>(null);

  const onResize = (_: React.SyntheticEvent, { size }: ResizeCallbackData) => {
    setWidth(size.width);
  };

  useEffect(() => {
    const calcWidth = () => {
      setWidth(Math.round(window.innerWidth * RATIO));
    };

    calcWidth(); // init
    window.addEventListener("resize", calcWidth);

    return () => window.removeEventListener("resize", calcWidth);
  }, []);

  useEffect(() => {
    if (!monaco) return;

    emmetHTML(monaco);
    emmetCSS(monaco);
    emmetJSX(monaco);
  }, [monaco]);

  if (width === null) return null;

  return (
    <Resizable
      width={width}
      height={Infinity}
      axis="x"
      resizeHandles={["e"]}
      onResize={onResize}
      className="h-full"
    >
      <div className="relative wrap-editor" style={{ width: `${width}px` }}>
        <Editor
          theme="vs-dark"
          language={language}
          options={{
            tabCompletion: "on",
            quickSuggestions: true,
            suggestOnTriggerCharacters: true,
            snippetSuggestions: "inline",
          }}
          {...props}
        />
      </div>
    </Resizable>
  );
};

export default EditorMonaco;
