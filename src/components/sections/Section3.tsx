"use client";

import Image from "next/image";
import { forwardRef } from "react";

export const Section3 = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen max-h-[1080px] w-full flex items-center justify-center z-10"
      style={{
        background:
          "linear-gradient(0deg, #0E1824 0%, #0F1927 21%, #161F32 39%, #202843 56%, #2E355C 72%, #3E4478 86%, #3D497B 88%, #3A5984 91%, #367494 95%, #3198A9 99%, #30A0AE 100%)",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex gap-6 justify-center">
          <div className="flex flex-col items-center justify-center gap-10">
            <Image
              src="/Section3/section3_1.svg"
              alt="image1"
              width={100}
              height={100}
              quality={100}
              className="w-full h-auto"
            />

            <div className="relative flex flex-col items-center justify-center">
              <Image
                src="/Section3/box.svg"
                alt="image2"
                width={100}
                height={100}
                quality={100}
                className="w-full h-auto"
              />
              <div className="absolute flex flex-col items-center justify-center gap-10">
                <div className="flex flex-col items-center justify-center gap-1">
                  <span>세상을 아름답게 데이터화하는 기업,</span>
                  <span>주식회사 메타뱅크가 함께 합니다.</span>
                </div>

                <Image
                  src="/Section3/metabank.svg"
                  alt="image3"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <span className="text-2xl font-bold">기업연혁</span>

            <div className="flex flex-col gap-1">
              <div className="flex gap-8">
                <span className="w-16">2025.3.</span>
                <span>TIPS 운영사 시드(Seed) 투자유치 체결</span>
              </div>

              <div className="flex gap-8">
                <span className="w-16">2024.12.</span>
                <span>벤처기업 인증</span>
              </div>
            </div>

            <div>
              <div>
                <span></span>
              </div>
              <div>
                <span></span>
              </div>
              <div>
                <span></span>
              </div>
              <span></span>
            </div>

            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Section3.displayName = "Section3";
