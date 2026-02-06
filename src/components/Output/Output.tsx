"use client";

import { Resizable } from "react-resizable";

type OutputProps = {
  outputContent: string;
  consoleLogs: { method: string; data: never[]; timestamp: string }[];
};

const Output = ({ outputContent, consoleLogs }: OutputProps) => {
  return (
    <div>
      <iframe srcDoc={outputContent} sandbox="allow-scripts" />
      <Resizable width={100} height={100}>
        <div>
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
