"use client";

import { useState, useEffect } from "react";
import { Resizable, type ResizeCallbackData } from "react-resizable";
import { cn } from "@/utils/tailwind.helper";

type ConsoleProps = {
  consoleLogs: { method: string; data: never[]; timestamp: string }[];
  onClearConsole: () => void;
};

const RATIO = 0.45;
const MIN_HEIGHT_CONSOLE = 28;

const Console = ({ consoleLogs, onClearConsole }: ConsoleProps) => {
  const [height, setHeight] = useState<number | null>(null);

  const onResize = (_: React.SyntheticEvent, { size }: ResizeCallbackData) => {
    setHeight(size.height);
  };

  useEffect(() => {
    const calcHeight = () => {
      setHeight(Math.round(window.innerHeight * RATIO));
    };

    calcHeight(); // init
    window.addEventListener("resize", calcHeight);

    return () => window.removeEventListener("resize", calcHeight);
  }, []);

  if (height === null) return null;

  const handleToggleConsole = () => {
    setHeight(
      height !== MIN_HEIGHT_CONSOLE
        ? MIN_HEIGHT_CONSOLE
        : Math.round(window.innerHeight * RATIO),
    );
  };

  return (
    <Resizable
      width={Infinity}
      height={height}
      axis="y"
      resizeHandles={["n"]}
      handleSize={[0, 8]}
      minConstraints={[Infinity, MIN_HEIGHT_CONSOLE]}
      maxConstraints={[Infinity, 700]}
      onResize={onResize}
    >
      <section
        className="bg-[#1e1e1e] absolute! bottom-0 w-full wrap-console overflow-auto"
        style={{ height: `${height}px` }}
      >
        <div className="bg-[#2e3138] flex items-center justify-between">
          <span className="text-[12px] border-b-2 px-2 py-1 border-amber-600">
            Console
          </span>
          <div className="flex items-center">
            <span className="border-l border-[#454a54] h-4" />
            <div
              className="px-2 py-1 cursor-pointer"
              onClick={handleToggleConsole}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 32 32"
                className={cn(
                  "text-[#cccccc]",
                  height === MIN_HEIGHT_CONSOLE && "transform rotate-180",
                )}
              >
                <path
                  fill="currentColor"
                  d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className="border-t border-b border-[#454a54] mb-2 px-2 py-1 flex items-center gap-2 cursor-pointer"
          onClick={onClearConsole}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a7 7 0 1 1-7 7 7.01 7.01 0 0 1 7-7M2 8c0 1.418.504 2.79 1.423 3.87l8.447-8.447A5.993 5.993 0 0 0 2 8m12 0c0-1.418-.504-2.79-1.423-3.87L4.13 12.577A5.993 5.993 0 0 0 14 8"></path>
          </svg>
          <span className="border-l border-[#454a54] h-4" />
        </div>

        {consoleLogs.map((log, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center p-1 mb-1",
              log.method === "error"
                ? "text-[#ff6b6b] border-l-2 border-[#ff6b6b]"
                : "text-white border-l-2 border-[#4caf50]",
            )}
          >
            <span className="mr-2 opacity-50 text-[11px]">
              [{log.timestamp}]
            </span>
            {log.data.map((item, i) => (
              <span key={i} className="mr-2 text-sm">
                {log.method === "alert" && "Alert:"} {item}
              </span>
            ))}
          </div>
        ))}
      </section>
    </Resizable>
  );
};

export default Console;
