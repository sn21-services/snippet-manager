import Image from "next/image";

import FormLogin from "@/app/(auth)/login/_components/FormLogin/FormLogin";
import BgLoginImage from "@/assets/images/bg-login.jpg";

const page = () => {
  console.log(BgLoginImage);
  return (
    <main className="flex h-screen">
      <FormLogin />
      <section className="flex-4 flex justify-center">
        <Image
          src={BgLoginImage}
          alt=""
          className="object-cover h-full"
          priority
        />
      </section>
    </main>
  );
};

export default page;
