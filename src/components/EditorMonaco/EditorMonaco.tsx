"use client";

import { useEffect, useState } from "react";
import { Resizable, ResizeCallbackData } from "react-resizable";
import { Editor, type EditorProps } from "@monaco-editor/react";
import "react-resizable/css/styles.css";

const RATIO = 0.55;

const EditorMonaco = ({ language, ...props }: EditorProps) => {
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
        <Editor theme="vs-dark" language={language} {...props} />
      </div>
    </Resizable>
  );
};

export default EditorMonaco;
