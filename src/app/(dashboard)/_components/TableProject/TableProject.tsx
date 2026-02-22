const TableProject = () => {
  return (
    <div className="mt-8">
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
  );
};

export default TableProject;
