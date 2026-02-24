import Link from "next/link";

import LogoApp from "@/components/LogoApp/LogoApp";

type LayoutProps = {
  children: Readonly<React.ReactNode>;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header className="bg-[#2e3138] h-12 shadow-md relative flex items-center px-4 justify-between">
        <LogoApp />

        <div className="flex items-center gap-2.5">
          <button className="text-xs text-[#68def8] font-medium flex items-center gap-1 px-2 py-1.5 border border-transparent hover:bg-[#26292e] hover:border hover:border-[#ebf0fa1a] rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M14 7v1H8v6H7V8H1V7h6V1h1v6z"></path>
            </svg>
            New Project
          </button>
          <button className="w-7 h-7 rounded-full bg-[#79ecdb] text-xs flex items-center justify-center text-[#272727]">
            S
          </button>
        </div>
      </header>
      <div className="flex h-[calc(100vh-48px)]">
        <aside className="w-60 bg-[#2e3138] py-6 px-2.5">
          <div className="flex items-center gap-2 p-3">
            <span className="inline-flex w-8 h-8 justify-center items-center rounded-full text-[#272727] bg-[#79ecdb]">
              S
            </span>
            <span className="text-xs font-medium">sn21.services</span>
          </div>

          <ul className="list-none mt-3">
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 px-2.5 py-2 w-full hover:bg-[#ebf0fa0f] rounded-sm font-medium text-[15px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 17"
                  width="1em"
                  height="1em"
                >
                  <path d="M8.583 8.56V6.804a.583.583 0 1 0-1.166 0v2.238l2.367 2.367a.583.583 0 0 0 .825-.825L8.583 8.559z"></path>
                  <path
                    fillRule="evenodd"
                    d="M15 8.555a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1.167 0a5.833 5.833 0 1 1-11.666 0 5.833 5.833 0 0 1 11.666 0"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Dashboard
              </Link>
            </li>
          </ul>
        </aside>
        <main className="bg-[#202327] flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
