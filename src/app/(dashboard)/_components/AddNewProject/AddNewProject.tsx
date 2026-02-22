import Image from "next/image";

import HtmlCssJsImage from "@/assets/images/html-css-js.png";

const AddNewProject = () => {
  return (
    <button className="bg-[#17191c] flex items-center rounded-lg hover:outline hover:outline-[#fff9] cursor-pointer gap-4">
      <div className="py-4 pl-5 flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36px"
          height="36px"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13 7v1H8v5H7V8H2V7h5V2h1v5z"></path>
        </svg>
        <div className="max-w-25 text-left">
          <span className="text-sm">New project</span>
          <p className="text-[12px] text-[#aaaaab] mt-1">
            start now, zero to hero
          </p>
        </div>
      </div>
      <Image src={HtmlCssJsImage} width={100} alt="" />
    </button>
  );
};

export default AddNewProject;
