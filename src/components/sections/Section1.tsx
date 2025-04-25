"use client";

import Image from "next/image";
import { forwardRef } from "react";

export const Section1 = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen max-h-[1080px] w-full flex items-center justify-center"
      style={{
        background:
          "linear-gradient(0deg, #0E1824 0%, #0F1927 21%, #161F32 39%, #202843 56%, #2E355C 72%, #3E4478 86%, #3D497B 88%, #3A5984 91%, #367494 95%, #3198A9 99%, #30A0AE 100%)",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="flex flex-col bg-[#EE7AAA] rounded-lg w-16 h-16 items-center justify-center font-bold text-white">
            <span>BOGO</span>
            <span>FIT</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-lg md:text-xl text-gray-200 mb-8">
              세계 최고 수준의 정확도
            </span>
            <span className="text-xl md:text-2xl font-bold mb-6 text-white">
              AI 기반 가상 피팅 시스템 &quot;보고핏(BOGOFIT)&quot;
            </span>
          </div>

          <div className="flex gap-16 h-full">
            <Image
              src="/Section1/section1_1.svg"
              alt="image1"
              width={1136}
              height={892}
              quality={100}
              priority
              className="w-auto h-auto max-w-full"
            />

            <div className="flex flex-col gap-8 w-full items-center justify-between">
              <div className="text-xl border border-white w-full max-w-[170px] rounded-lg h-full max-h-10 flex items-center justify-center">
                <span>보고핏 키오스크</span>
              </div>

              <div className="flex flex-col gap-6">
                <span className="text-2xl">
                  오프라인에서 직접 경험하는 AI 가상 피팅
                </span>
                <div className="flex flex-col gap-2">
                  <span>BOGOFIT Kiosk는 AI 기반 가상 피팅 솔루션으로,</span>
                  <span>매장에서 사진을 촬영하거나 프리셋을 선택해</span>
                  <span>
                    다양한 스타일을 실감나게 체험할 수 있는 스마트
                    키오스크입니다.
                  </span>
                </div>
              </div>

              <div className="w-full h-full flex items-end">
                <Image
                  src="/Section1/section1_2.svg"
                  alt="image2"
                  width={602}
                  height={246}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Section1.displayName = "Section1";
