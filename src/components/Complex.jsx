import React from "react";
import topProducts from "../assets/pic6.png";
import bottomProducts from "../assets/pic5.png";

const Complex = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f1f1ed] px-[clamp(18px,6vw,90px)] py-[clamp(40px,6vw,90px)]">
      <div className="relative mx-auto min-h-[clamp(520px,58vw,850px)] w-full max-w-[1500px]">

        <div className="pointer-events-none absolute left-[-2%] top-[clamp(90px,11vw,170px)] z-0 select-none font-['Cormorant_Garamond'] text-[clamp(210px,63vw,500px)] font-medium leading-[0.55] tracking-[-0.08em] text-[#adb4a4]">
          new
        </div>

        <div className="relative z-10 flex items-start justify-between gap-[clamp(20px,4vw,70px)] max-[700px]:flex-col">

          <div className="w-[39%] max-[700px]:w-full">
            <h2 className="max-w-[clamp(320px,38vw,560px)] text-[clamp(30px,3.4vw,54px)] font-medium leading-[0.88] tracking-[-0.045em] text-[#3e4938]">
              All-in-One
              <br />
              Skincare Complex
            </h2>

            <p className="mt-[clamp(14px,1.5vw,24px)] max-w-[clamp(260px,29vw,430px)] text-[clamp(10px,0.8vw,13px)] leading-[1.3] text-[#555950]">
              Multifunctional line designed to simplify your daily routine
              without compromising results.
            </p>
          </div>

          <div className="w-[47%] max-[700px]:w-full">
            <img
              src={topProducts}
              alt="Sage skincare collection"
              className="h-auto w-full object-contain"
            />
          </div>

        </div>

        <div className="relative z-10 mt-[clamp(65px,10vw,150px)] flex items-end justify-between gap-[clamp(25px,4vw,70px)] max-[700px]:mt-[clamp(80px,16vw,120px)] max-[700px]:flex-col max-[700px]:items-start">

          <div className="ml-[clamp(0px,7vw,100px)] w-[clamp(300px,47vw,620px)] max-[700px]:ml-0 max-[700px]:w-full">
            <img
              src={bottomProducts}
              alt="Sage product collection"
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="w-[31%] pb-[clamp(5px,1vw,15px)] max-[700px]:w-full">
            <p className="max-w-[clamp(280px,31vw,440px)] text-[clamp(10px,0.8vw,13px)] leading-[1.35] text-[#555950]">
              Each formula combines hydration, barrier support, and
              skin-balancing ingredients to work in one effortless step.
              The collection focuses on smart minimalism — fewer products,
              more impact, and consistent care for healthy-looking skin.
            </p>

            <button className="mt-[clamp(16px,2vw,28px)] rounded-full border border-[#9ca096] px-[clamp(20px,2vw,30px)] py-[clamp(7px,0.7vw,10px)] text-[clamp(10px,0.7vw,12px)] text-[#555950] transition-all duration-300 hover:bg-[#3e4938] hover:text-white">
              Catalog
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Complex;