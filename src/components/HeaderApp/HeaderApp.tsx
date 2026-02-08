const HeaderApp = () => {
  return (
    <header className="border-b border-[#3e3e3e] h-16">
      <section className="flex items-center justify-between p-3">
        <div>
          <button className="rounded-lg bg-amber-600 py-2 px-3 text-base cursor-pointer hover:bg-amber-700">
            Run code
          </button>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button className="py-1 px-3 text-sm rounded-lg border border-[#3e3e3e]">
            Save
          </button>
          <span className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
            S
          </span>
        </div>
      </section>
    </header>
  );
};

export default HeaderApp;
