const HeaderApp = () => {
  return (
    <header className="border-b border-[#3e3e3e]">
      <div className="flex items-center justify-end p-3 gap-3">
        <button className="py-1 px-3 text-sm rounded-lg border border-[#3e3e3e]">
          Save
        </button>
        <span className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
          S
        </span>
      </div>
    </header>
  );
};

export default HeaderApp;
