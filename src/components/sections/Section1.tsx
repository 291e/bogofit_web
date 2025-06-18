"use client";

import Image from "next/image";
import { forwardRef, useState, useEffect } from "react";

export const Section1 = forwardRef<HTMLDivElement>((props, ref) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // 슬라이드 자동 변경 기능
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 4 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(0deg, #0E1824 0%, #0F1927 21%, #161F32 39%, #202843 56%, #2E355C 72%, #3E4478 86%, #3D497B 88%, #3A5984 91%, #367494 95%, #3198A9 99%, #30A0AE 100%)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-11">
          {/* 로고 영역 */}
          <div className="flex flex-col bg-[#EE7AAA] rounded-lg w-16 h-16 items-center justify-center font-bold text-white">
            <span>BOGO</span>
            <span>FIT</span>
          </div>

          {/* 헤드라인 영역 */}
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-200 mb-4">
              세계 최고 수준의 정확도
            </p>
            <h1 className="text-xl md:text-2xl font-bold text-white">
              AI 기반 가상 피팅 시스템 &quot;보고핏(BOGOFIT)&quot;
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <Image
              src="/qrcode.png"
              alt="보고핏 키오스크"
              width={100}
              height={100}
              priority
              className="object-contain"
            />
          </div>

          {/* 메인 콘텐츠 영역 */}
          <div className="flex flex-col md:flex-row justify-between w-full gap-10">
            {/* 왼쪽: 키오스크 이미지 */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5]">
                <Image
                  src="/Section1/section1.png"
                  alt="보고핏 키오스크"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 오른쪽: 키오스크 설명 */}
            <div className="w-full md:w-1/2 flex flex-col items-center text-white gap-7">
              <div className="border border-white rounded-xl w-full max-w-[150px] flex items-center justify-center h-11">
                <div className="text-lg">보고핏 키오스크</div>
              </div>

              <h2 className="text-xl md:text-2xl font-medium mb-4">
                오프라인에서 직접 경험하는 AI 가상 피팅
              </h2>

              <div className="flex flex-col gap-4 mb-8 text-gray-200 items-center text-sm md:text-base">
                <p>BOGOFIT Kiosk는 AI 기반 가상 피팅 솔루션으로,</p>
                <p>매장에서 사진을 촬영하거나 프리셋을 선택해</p>
                <p>
                  다양한 스타일을 실감나게 체험할 수 있는 스마트 키오스크입니다.
                </p>
              </div>

              {/* 슬라이드 이미지 */}
              <div className="w-full mt-auto flex flex-col gap-8">
                <div className="relative w-full aspect-[8/6]">
                  {[1, 2, 3, 4].map((num) => (
                    <Image
                      key={num}
                      src={`/Section1/image_${num}.png`}
                      alt={`슬라이드 이미지 ${num}`}
                      fill
                      className={`object-contain transition-opacity duration-500 ${
                        currentSlide === num ? "opacity-100" : "opacity-0"
                      }`}
                      priority={num === 1}
                    />
                  ))}
                </div>

                {/* 슬라이드 인디케이터 */}
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setCurrentSlide(num)}
                      className={`w-8 h-1 rounded-full transition-colors ${
                        currentSlide === num ? "bg-[#EE7AAA]" : "bg-gray-500"
                      }`}
                      aria-label={`슬라이드 ${num}로 이동`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Section1.displayName = "Section1";
