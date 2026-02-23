import { Checkbox } from "@headlessui/react";

const TableProject = () => {
  return (
    <div>
      <div className="mt-8 mb-2">
        <div className="flex items-center gap-3">
          <h2 className="font-bold">Recent projects</h2>
          <button className="flex items-center gap-1.5 py-1.5 px-3 rounded-sm border border-[#202327] hover:border hover:border-[#ebf0fa24] text-[12px] cursor-pointer font-medium">
            Show all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M5.7 13.7 5 13l4.6-4.6L5 3.7l.7-.7 5 5v.7z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="m-auto mt-6">
        <table className="w-full table-fixed border-collapse">
          <thead className="border-[#2c2f34] border-b">
            <tr>
              <th className="text-[12px] text-[#9e9e9e] font-normal text-left px-3 py-2 w-9">
                <Checkbox className="group block size-4 rounded border border-[#ffffff1a] bg-transparent data-checked:border-[#c7cad1]">
                  <svg
                    className="stroke-white opacity-0 group-data-checked:opacity-100"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Checkbox>
              </th>
              <th className="text-[12px] text-[#9e9e9e] font-normal text-left px-3 py-2">
                Title
              </th>
              <th className="text-[12px] text-[#9e9e9e] font-normal text-left px-3 py-2">
                Description
              </th>
              <th className="text-[12px] text-[#9e9e9e] font-normal text-left px-3 py-2">
                Updated
              </th>
              <th className="text-[12px] font-normal text-left px-3 py-2"></th>
            </tr>
          </thead>
          <tbody className="align-baseline">
            <tr className="group cursor-pointer hover:bg-[#2c2f34] my-2">
              <td className="py-2 px-3 whitespace-no-wrap align-middle">
                <Checkbox className="group block size-4 rounded border border-[#ffffff1a] bg-transparent data-checked:border-[#c7cad1]">
                  <svg
                    className="stroke-white opacity-0 group-data-checked:opacity-100"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Checkbox>
              </td>
              <td className="text-[12px] text-[#ccc] py-2 px-3 whitespace-no-wrap">
                Vitejs - Vite (duplicated)
              </td>
              <td className="text-[12px] text-[#ccc] py-2 px-3 whitespace-no-wrap">
                Next generation frontend tooling.
              </td>
              <td className="text-[12px] text-[#ccc] py-2 px-3 whitespace-no-wrap">
                1 day ago
              </td>
              <td className="text-[12px] text-[#ccc] py-2 px-3 whitespace-no-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 32 32"
                  className="text-[#ccc]"
                >
                  <path
                    fill="currentColor"
                    d="M14 12.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0zm4.5-.5a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m2-5.5V7h8a.5.5 0 0 1 0 1h-2.543l-1.628 17.907A4.5 4.5 0 0 1 19.847 30h-7.694a4.5 4.5 0 0 1-4.482-4.093L6.043 8H3.5a.5.5 0 0 1 0-1h8v-.5a4.5 4.5 0 1 1 9 0m-8 0V7h7v-.5a3.5 3.5 0 1 0-7 0M7.048 8l1.62 17.817A3.5 3.5 0 0 0 12.152 29h7.694a3.5 3.5 0 0 0 3.486-3.183L24.953 8z"
                  />
                </svg>
              </td>
            </tr>
            <tr className="group cursor-pointer hover:bg-[#2c2f34] my-2">
              <td className="py-2 px-3 whitespace-no-wrap align-middle">
                <Checkbox className="group block size-4 rounded border border-[#ffffff1a] bg-transparent data-checked:border-[#c7cad1]">
                  <svg
                    className="stroke-white opacity-0 group-data-checked:opacity-100"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Checkbox>
              </td>
              <td className="text-[12px] text-[#ccc] py-2 px-3 whitespace-no-wrap">
                Vitejs - Vite (duplicated)
              </td>
              <td className="text-[12px] text-[#ccc] py-2 px-3 whitespace-no-wrap">
                Next generation frontend tooling.
              </td>
              <td className="text-[12px] text-[#ccc] py-2 px-3 whitespace-no-wrap">
                1 day ago
              </td>
              <td className="text-[12px] text-[#ccc] py-2 px-3 whitespace-no-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 32 32"
                  className="text-[#ccc]"
                >
                  <path
                    fill="currentColor"
                    d="M14 12.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0zm4.5-.5a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m2-5.5V7h8a.5.5 0 0 1 0 1h-2.543l-1.628 17.907A4.5 4.5 0 0 1 19.847 30h-7.694a4.5 4.5 0 0 1-4.482-4.093L6.043 8H3.5a.5.5 0 0 1 0-1h8v-.5a4.5 4.5 0 1 1 9 0m-8 0V7h7v-.5a3.5 3.5 0 1 0-7 0M7.048 8l1.62 17.817A3.5 3.5 0 0 0 12.152 29h7.694a3.5 3.5 0 0 0 3.486-3.183L24.953 8z"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableProject;
