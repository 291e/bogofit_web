// "use client";

// import Image from "next/image";
// import { forwardRef } from "react";

// export const Section3 = forwardRef<HTMLDivElement>((props, ref) => {
//   return (
//     <section
//       ref={ref}
//       className="min-h-screen w-full flex flex-col items-center justify-start z-10"
//       style={{
//         background:
//           "linear-gradient(0deg, #0E1824 0%, #0F1927 21%, #161F32 39%, #202843 56%, #2E355C 72%, #3E4478 86%, #3D497B 88%, #3A5984 91%, #367494 95%, #3198A9 99%, #30A0AE 100%)",
//         paddingTop: "80px",
//         paddingBottom: "80px",
//         paddingLeft: "40px",
//         paddingRight: "40px",
//       }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row w-full justify-center items-center gap-12">
//           {/* 왼쪽 영역: 이미지와 회사 정보 */}
//           <div className="w-full flex flex-col md:w-1/2 items-center gap-8">
//             {/* 회사 이미지 */}
//             <div className="mb-8">
//               <Image
//                 src="/Section3/section3.png"
//                 alt="회사 이미지"
//                 width={500}
//                 height={200}
//                 quality={100}
//                 className="max-w-full h-auto"
//               />
//             </div>

//             {/* 회사 소개 박스 */}
//             <div className="relative">
//               <Image
//                 src="/Section3/box.svg"
//                 alt="소개 배경"
//                 width={100}
//                 height={100}
//                 quality={100}
//                 className="w-full h-auto"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-10">
//                 <div className="flex flex-col items-center justify-center gap-1">
//                   <span>세상을 아름답게 데이터화하는 기업,</span>
//                   <span>주식회사 메타뱅크가 함께 합니다.</span>
//                 </div>
//                 <Image
//                   src="/Section3/metabank.svg"
//                   alt="메타뱅크 로고"
//                   width={160}
//                   height={30}
//                   quality={100}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* 오른쪽 영역: 기업 연혁 */}
//           <div className=" text-white flex flex-col md:w-1/2 gap-6 ">
//             <h2 className="text-2xl font-bold mb-8">기업연혁</h2>

//             <div className="flex flex-col gap-1">
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2025.03.</span>
//                 <span>TIPS 운영사 시드(Seed) 투자유치 체결</span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2024.12.</span>
//                 <span>벤처기업 인증</span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2024.11.</span>
//                 <span>서울시 중장년 창업 데모데이 “최우수상“ 수상</span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2024.10.</span>
//                 <span>㈜황금단 타쇼핑 솔루션 공급 계약 체결</span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2024.09.</span>
//                 <span>프리 팁스(Pre-TIPS) 지원사업 선정</span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2024.09.</span>
//                 <span>중국 웨이하이 법인 설립</span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2024.07.</span>
//                 <span>중국 둥 자상교육문화유통사와 1만불 공급계약 체결</span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2024.02.</span>
//                 <span>대한민국 산업대상 “대상’ 수상(K-R&D 부문)</span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2024.02.</span>
//                 <span>ISO 9001 인증 취득</span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2024.01.</span>
//                 <span>미국 라스베가스 2024 CES 참가</span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2023.07.</span>
//                 <span>2023 대덕특구 액셀러레이팅 지원사업 선정</span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2023.06.</span>
//                 <span>
//                   한국인정기구(KOLAS) 기술 인증 (성적서 인증번호 : 23-20007)
//                   공인시험 인증
//                 </span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2023.04.</span>
//                 <span>대덕연구개발특구 연구소 기업 등록</span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2023.03.</span>
//                 <span>한남대학교 기술지주회사 자회사 편입</span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2022.11.</span>
//                 <span>
//                   한국정보통신기술협회(TTA) 기술 인증(성적서 인증번호 :
//                   TTA-22-0976) 공인시험 인증
//                 </span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2022.09.</span>
//                 <span>창업진흥원 실험실 특화 초기창업패키지사업 선정</span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2022.07.</span>
//                 <span>
//                   중소벤처기업부 창업성장기술개발사업 디딤돌(첫걸음) 선정
//                 </span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2022.05.</span>
//                 <span>중소벤처기업부 산학R&D 예비연구 선정</span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2022.02.</span>
//                 <span>㈜메타뱅크 기업부설연구소 설립</span>
//               </div>
//               <div className="flex">
//                 <span className="w-20 text-gray-300">2021.12.</span>
//                 <span>㈜메타뱅크 법인 설립 </span>
//               </div>
//             </div>

//             {/* 회사 정보 */}
//             <div className="text-sm text-gray-300">
//               <p className="mb-1">기업명 : 주식회사 메타뱅크</p>
//               <p className="mb-1">
//                 주소 : 대전광역시 대덕구 70 한남대캠퍼스혁신파크 B동 205호
//               </p>
//               <p className="mb-1">이메일 : metabank@naver.com</p>
//               <p>연락처 : 042-345-1008</p>
//             </div>

//             <div className="text-sm text-gray-300 flex flex-col gap-4">
//               <p className="mb-1">
//                 기업부설연구소 : 대전광역시 대덕구 한남로 70 한남대학교
//                 미디어영상학과 인사례교양동 404호
//               </p>
//               <p className="mb-1">
//                 중국법인 : 중국 산동성 위해시 경제기술개발특구 17-5 지혜곡 A3호
//                 1008호
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// });

// Section3.displayName = "Section3";
