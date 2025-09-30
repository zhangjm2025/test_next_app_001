import Image from "next/image";
import LinkButton from "@/components/LinkButton";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="">
          <Image width={240} height={50} alt="My Chinese Name" src={'http://101.43.111.136:1313/uploads/images/all/2023-12/2edf4e0b20555a16e68a594f082d55fc.png'}></Image>
        </div>
        <div className="m-3 p-3">
          <Image width={240} height={50} alt="My Chinese Name" src={'/logo.png'}></Image>
        </div>

        <LinkButton href="/signin">
          Signin
        </LinkButton>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
