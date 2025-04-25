"use client";

import Image from "next/image";
import { forwardRef } from "react";

export const Section2 = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen max-h-[1080px] w-full flex items-start justify-center"
      style={{
        background:
          "linear-gradient(0deg, rgba(252, 192, 137, 0.60) 0%, rgba(248, 185, 136, 0.62) 25%, rgba(235, 164, 134, 0.67) 46%, rgba(214, 129, 130, 0.76) 66%, rgba(186, 80, 125, 0.88) 86%, #9F2379 100%)",
      }}
    >
      <div className="container mx-auto px-4 text-center relative top-32">
        <div className="flex flex-col h-full items-center justify-center mt-32 gap-16">
          <div className="flex flex-col bg-white rounded-lg w-16 h-16 items-center justify-center font-bold text-[#EE7AAA]">
            <span>BOGO</span>
            <span>FIT</span>
          </div>
          <div className="flex flex-col gap-8 w-full items-center justify-between">
            <div className="text-xl border border-white w-full max-w-[208px] rounded-lg h-10 flex items-center justify-center">
              <span>보고핏 모바일 APP</span>
            </div>

            <div className="flex flex-col gap-2">
              <span>
                보고핏(BOGOFIT) App은 공지능(AI) 기술을 활용하여 온라인 쇼핑이나
              </span>
              <span>
                오프라인 쇼핑으로 구매하는 패션 상품의 사이즈 및 피팅의
                불확실성을
              </span>
              <span>
                해결하고자 정확도가 향상된 감나는 피팅 기능을 제공하고,
                사용자에게
              </span>
              <span>
                최적의 스타일을 추천하는 혁신적인 가상 팅 플랫폼입니다.
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 right-12 w-full h-full">
          <Image
            src="/Section2/section2_1.svg"
            alt="image1"
            width={100}
            height={100}
            quality={100}
            className="w-auto h-auto max-w-full"
          />
        </div>

        <div className="relative top-40 left-300 w-full">
          <div className="flex flex-col items-center gap-6 absolute w-fit h-full">
            <Image
              src="/Header/BOGOFIT.svg"
              alt="보고핏"
              width={100}
              height={100}
              quality={100}
              className="w-full h-auto"
            ></Image>
            <Image
              src="/Section2/QR.svg"
              alt="보고핏"
              width={100}
              height={100}
              quality={100}
              className="w-full h-auto max-w-[150px]"
            ></Image>
            <div className="flex gap-2">
              <Image
                src="/Section2/apple.svg"
                alt="보고핏"
                width={100}
                height={100}
                quality={100}
                className="w-full h-auto"
              ></Image>
              <Image
                src="/Section2/google.svg"
                alt="보고핏"
                width={100}
                height={100}
                quality={100}
                className="w-full h-auto"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Section2.displayName = "Section2";
