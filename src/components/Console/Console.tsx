"use client";

import { useState } from "react";
import { Resizable, type ResizeCallbackData } from "react-resizable";

type ConsoleProps = {
  consoleLogs: { method: string; data: never[]; timestamp: string }[];
};

const Console = ({ consoleLogs }: ConsoleProps) => {
  const [height, setHeight] = useState(250);
  const onResize = (_: React.SyntheticEvent, { size }: ResizeCallbackData) => {
    setHeight(size.height);
  };

  return (
    <Resizable
      width={Infinity}
      height={height}
      axis="y"
      resizeHandles={["n"]}
      handleSize={[0, 8]}
      minConstraints={[Infinity, 100]}
      maxConstraints={[Infinity, 500]}
      onResize={onResize}
    >
      <section
        className="bg-[#171717] fixed! bottom-0 w-full wrap-console"
        style={{ height: `${height}px` }}
      >
        <div className="p-2 text-sm bg-[#212121]">Console</div>

        {consoleLogs.map((log, index) => (
          <div
            key={index}
            className="flex items-center p-1 mb-1"
            style={{
              color: log.method === "error" ? "#ff6b6b" : "#fff",
              borderLeft:
                log.method === "error"
                  ? "3px solid #ff6b6b"
                  : "3px solid #4caf50",
            }}
          >
            <span
              style={{ opacity: 0.6, fontSize: "11px", marginRight: "8px" }}
            >
              [{log.timestamp}]
            </span>
            {log.data.map((item, i) => (
              <span key={i} className="mr-2 text-sm">
                {item}
              </span>
            ))}
          </div>
        ))}
      </section>
    </Resizable>
  );
};

export default Console;
