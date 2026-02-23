import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const MenuUser = () => {
  return (
    <div>
      <Popover className="relative">
        <PopoverButton className="w-7 h-7 rounded-full bg-[#79ecdb] text-[12px] flex items-center justify-center text-[#272727]">
          S
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="bottom"
          className="flex flex-col bg-[#2e3138] p-3 mt-2 absolute right-0 w-48 rounded-md shadow-lg -translate-x-3"
        >
          <Link href="/" className="text-sm/6">
            Your dashboard
          </Link>
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export default MenuUser;
