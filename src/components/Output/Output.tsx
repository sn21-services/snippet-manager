"use client";

import { useState } from "react";
import { Resizable } from "react-resizable";

type OutputProps = {
  outputContent: string;
  consoleLogs: { method: string; data: never[]; timestamp: string }[];
};

const Output = ({ outputContent, consoleLogs }: OutputProps) => {
  const [sizeContent, setSizeContent] = useState<{
    width: number;
    height: number;
  }>({
    width: 100,
    height: 100,
  });
  const handleResize = (event, { node, size, handle }) => {
    setSizeContent({ ...sizeContent, width: size.width, height: size.height });
  };
  return (
    <div className="flex flex-col h-full">
      <iframe
        className="h-[60%]"
        srcDoc={outputContent}
        sandbox="allow-scripts"
      />
      <Resizable
        onResize={handleResize}
        className="h-[40%]"
        width={sizeContent.width}
        height={sizeContent.height}
      >
        <div
          style={{
            width: sizeContent.width + "px",
            height: sizeContent.height + "px",
          }}
        >
          <div className="p-3 bg-gray-800">Console</div>
          {consoleLogs.map((log, index) => (
            <div
              key={index}
              style={{
                padding: "4px 0",
                color: log.method === "error" ? "#ff6b6b" : "#fff",
                borderLeft:
                  log.method === "error"
                    ? "3px solid #ff6b6b"
                    : "3px solid #4caf50",
                paddingLeft: "8px",
                marginBottom: "4px",
              }}
            >
              <span
                style={{ opacity: 0.6, fontSize: "11px", marginRight: "8px" }}
              >
                [{log.timestamp}]
              </span>
              {log.data.map((item, i) => (
                <span key={i} style={{ marginRight: "8px" }}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </Resizable>
    </div>
  );
};

export default Output;
