"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRightCircleIcon } from "lucide-react";

const Home: React.FC = () => {
  // 모바일에서 토글을 위한 상태

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center w-full justify-center gap-40 px-4">
        <div className="px-4 py-5 max-xl:max-w-[400px] bg-gradient-to-r from-[#FEB6B2CC] to-[#FF4848CC] rounded-xl flex justify-center items-center shadow-md h-[100px] w-[300px]">
          <Link
            href="https://play.google.com/store/apps/details?id=com.metabank.bogofit"
            target="blink"
            className="flex gap-4 items-center text-white text-base hover:text-neutral-300"
          >
            <Image
              src="/Section2/google.png"
              alt="Google"
              width={100}
              height={100}
            />
            <ArrowRightCircleIcon className="size-7" />
          </Link>
        </div>
        <div className="px-8 py-5 bg-gradient-to-r from-[#7ABFFFCC] to-[#1C84FFCC] rounded-xl flex justify-center items-center shadow-md h-[100px] w-[300px]">
          <Link
            href="https://apps.apple.com/kr/app/bogofit/id6743146955"
            target="blink"
            className="flex gap-4 items-center justify-between text-white text-base hover:text-neutral-300"
          >
            <Image
              src="/Section2/apple.png"
              alt="App"
              width={100}
              height={100}
            />
            <ArrowRightCircleIcon className="size-7" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
