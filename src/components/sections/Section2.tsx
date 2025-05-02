"use client";

import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

export const Section2 = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex flex-col items-center justify-start"
      style={{
        background:
          "linear-gradient(0deg, rgba(252, 192, 137, 0.60) 0%, rgba(248, 185, 136, 0.62) 25%, rgba(235, 164, 134, 0.67) 46%, rgba(214, 129, 130, 0.76) 66%, rgba(186, 80, 125, 0.88) 86%, #9F2379 100%)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="w-full mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-11">
          {/* 로고 영역 */}
          <div className="flex flex-col bg-white rounded-lg w-16 h-16 items-center justify-center font-bold text-[#EE7AAA]">
            <span>BOGO</span>
            <span>FIT</span>
          </div>
          {/* 오른쪽: 키오스크 설명 */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-white gap-7">
            <div className="border border-white rounded-xl w-full max-w-[190px] flex items-center justify-center h-11">
              <div className="text-lg">보고핏 모바일 APP</div>
            </div>

            <div className="flex flex-col gap-4 mb-8 text-gray-200 items-center text-sm md:text-base">
              <p>
                보고핏(BOGOFIT) App은 공지능(AI) 기술을 활용하여 온라인 쇼핑이나{" "}
              </p>
              <p>
                오프라인 쇼핑으로 구매하는 패션 상품의 사이즈 및 피팅의
                불확실성을
              </p>
              <p>
                해결하고자 정확도가 향상된 감나는 피팅 기능을 제공하고,
                사용자에게
              </p>
              <p>최적의 스타일을 추천하는 혁신적인 가상 피팅 플랫폼입니다.</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-row gap-2">
              <Link
                href="https://apps.apple.com/kr/app/bogofit/id6743146955"
                className="relative w-[130px] h-[40px]"
              >
                <Image
                  src="/Section2/apple.png"
                  alt="App Store 다운로드"
                  fill
                  quality={100}
                  className="object-contain"
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.metabank.bogofit"
                className="relative w-[130px] h-[40px]"
              >
                <Image
                  src="/Section2/google.png"
                  alt="Google Play 다운로드"
                  fill
                  quality={100}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          <div className="relative w-full lg:hidden">
            <div className="absolute -left-20 top-0 w-full max-w-[300px] h-[600px]">
              <Image
                src="/Section2/section2.png"
                alt="보고핏 모바일 앱 화면"
                fill
                quality={100}
                className="object-contain"
              />
            </div>
          </div>

          <div className=" gap-4 flex">
            <div className="w-full max-w-[155px] h-[300px]">
              <Image
                src="/Section2/image_1.png"
                alt="보고핏 모바일 앱 화면"
                width={155}
                height={300}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[155px] h-[300px]">
              <Image
                src="/Section2/image_2.png"
                alt="보고핏 모바일 앱 화면"
                width={155}
                height={300}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[155px] h-[300px]">
              <Image
                src="/Section2/image_3.png"
                alt="보고핏 모바일 앱 화면"
                width={155}
                height={300}
                quality={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Section2.displayName = "Section2";
