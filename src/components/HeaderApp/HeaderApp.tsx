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
      <header className="h-14 bg-[#2e3138] flex items-center">
        <section className="flex items-center justify-between px-3 w-full">
          <div>
            <button
              className="rounded-lg bg-amber-600 py-2 px-3 text-sm cursor-pointer hover:bg-amber-700"
              onClick={onClickRunCode}
            >
              Run code
            </button>
          </div>
          <div className="flex items-center justify-end gap-3">
            <button
              className="py-1 px-3 text-sm rounded-lg border border-[#3e3e3e] cursor-pointer"
              onClick={handleSaveCode}
            >
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
