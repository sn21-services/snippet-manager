import LogoApp from "@/components/LogoApp/LogoApp";

const FormLogin = () => {
  return (
    <section className="flex-2 bg-[#17191c] ">
      <header className="py-6 px-7">
        <LogoApp />
      </header>

      <div className="mt-20 px-10 text-center max-w-[70%] w-full mx-auto">
        <h1 className="text-4xl mb-6 font-medium">Welcome back</h1>
        <p className="text-sm text-[#fff9]">
          Sign in to &nbsp;
          <span className="underline text-amber-600 font-bold">SaveCode</span>
          &nbsp; with one of the options below or your credentials.
        </p>

        <button className="p-4 rounded-lg bg-[#737b8c33] w-full text-sm border border-[#ffffff14] mt-9 font-medium flex items-center gap-2 justify-center hover:bg-[#5c63701a]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            width="1em"
            height="1em"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 
              52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4"
            ></path>
          </svg>
          Continue with Google
        </button>
      </div>
    </section>
  );
};

export default FormLogin;
