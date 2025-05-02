export default function FeaturesSection() {
  return (
    <section id="features" className="py-8 md:py-12 bg-white">
      <div className=" w-full mx-auto flex justify-center items-center">
        <div className="relative w-full max-w-4xl">
          <video
            src="/bogofit.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto max-h-[500px] object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
