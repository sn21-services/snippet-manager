"use client";
import { useState } from "react";

import ModalSaveCode from "@/components/ModalSaveCode/ModalSaveCode";
import MenuUser from "@/components/MenuUser/MenuUser";

type HeaderAppProps = {
  onClickRunCode?: () => void;
};

const HeaderApp = ({ onClickRunCode }: HeaderAppProps) => {
  const [openModalSaveCode, setOpenModalSaveCode] = useState<boolean>(false);
  const handleSaveCode = () => {
    setOpenModalSaveCode(true);
  };
  return (
    <>
      <header className="h-12 bg-[#2e3138] flex items-center">
        <section className="flex items-center justify-between px-4 w-full">
          <div>
            <button
              className="rounded-lg bg-amber-600 py-1.5 px-2 text-sm cursor-pointer hover:bg-amber-700 flex items-center gap-2"
              onClick={onClickRunCode}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"
                />
              </svg>
              Run code
            </button>
          </div>
          <div className="flex items-center justify-end gap-3">
            <button
              className="py-1 px-3 text-sm rounded-lg border border-[#3e3e3e] cursor-pointer flex items-center gap-2"
              onClick={handleSaveCode}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                width="1em"
                height="1em"
              >
                <path d="M32 480H0V32h336l112 112v336H32m384-32V157.3L322.7 64H320v128H64V64H32v384zM96 64v96h192V64zm80 256a48 48 0 1 0 96 0 48 48 0 1 0-96 0m48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160"></path>
              </svg>
              Save
            </button>
            <MenuUser />
          </div>
        </section>
      </header>

      <ModalSaveCode
        open={openModalSaveCode}
        onCloseModal={() => setOpenModalSaveCode(false)}
      />
    </>
  );
};

export default HeaderApp;
