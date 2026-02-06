"use client";

import { Editor, type EditorProps } from "@monaco-editor/react";

const EditorMonaco = ({ ...props }: EditorProps) => {
  return (
    <div className="w-1/2">
      <Editor {...props} height="70vh" theme="vs-dark" />
    </div>
  );
};

export default EditorMonaco;
