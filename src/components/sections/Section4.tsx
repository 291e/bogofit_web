import Image from "next/image";

export default function Section4() {
  return (
    <div
      id="contact"
      className="py-8 md:py-12 relative z-10 "
      style={{
        background:
          "linear-gradient(0deg, rgba(252, 192, 137, 0.60) 0%, rgba(248, 185, 136, 0.62) 25%, rgba(235, 164, 134, 0.67) 46%, rgba(214, 129, 130, 0.76) 66%, rgba(186, 80, 125, 0.88) 86%, #9F2379 100%)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className=" mx-auto flex flex-col items-center justify-center gap-10">
        {/* image_1.png */}
        <div className="relative w-full max-w-[668px] mx-auto mb-8">
          <Image
            src="/Section4/image_1.png"
            alt="MetaBank3D 문의 페이지 1"
            width={1000}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Section3.png - 전체 너비 */}
        <div className="relative w-full mb-8">
          <Image
            src="/Section4/Section3.png"
            alt="MetaBank3D 문의 페이지 2"
            width={1920}
            height={400}
            className="w-full h-auto max-h-[400px] object-contain"
            priority
          />
        </div>

        {/* image_2.png */}
        <div className="relative w-full max-w-[668px] mx-auto mb-8">
          <Image
            src="/Section4/image_2.png"
            alt="MetaBank3D 문의 페이지 3"
            width={1000}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* image_3.png */}
        <div className="relative w-full max-w-[668px] mx-auto mb-8">
          <Image
            src="/Section4/image_3.png"
            alt="MetaBank3D 문의 페이지 4"
            width={1000}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* image_4.png */}
        <div className="relative w-full max-w-[450px] mx-auto">
          <Image
            src="/Section4/image_4.png"
            alt="MetaBank3D 문의 페이지 5"
            width={1000}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
