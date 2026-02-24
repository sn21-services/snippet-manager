import Link from "next/link";

const LogoApp = () => {
  return (
    <Link href="/" className="font-medium text-amber-600 text-xs">
      <span className="bg-amber-600 w-4.5 h-4.5 inline-flex rounded-full items-center justify-center text-sm font-bold text-[#eee]">
        S
      </span>
      ave
      <span className="bg-amber-600 w-4.5 h-4.5 inline-flex rounded-full items-center justify-center text-sm font-bold text-[#eee]">
        C
      </span>
      ode
    </Link>
  );
};

export default LogoApp;
