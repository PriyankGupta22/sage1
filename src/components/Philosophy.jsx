import React from "react";
import productImage from "../assets/pic1.png";

const Philosophy = () => {
  return (
    <section className="w-full bg-[#f1f1ed] px-[clamp(18px,5vw,70px)] py-[clamp(35px,6vw,90px)]">
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-[clamp(30px,6vw,110px)] max-[700px]:flex-col max-[700px]:items-start">

        <div className="w-[46%] max-[700px]:w-full">
          <h2 className="max-w-[clamp(300px,32vw,520px)] text-[clamp(30px,3.2vw,52px)] font-medium leading-[0.88] tracking-[-0.045em] text-[#3e4938]">
            New philosophy
            <br />
            of selfcare: healthy
            <br />
            skin&hair
          </h2>

          <div className="mt-[clamp(18px,2vw,30px)] max-w-[clamp(300px,31vw,500px)] space-y-[clamp(8px,1vw,14px)] text-[clamp(10px,0.78vw,13px)] leading-[1.35] text-[#555950]">
            <p>
              Sage is about conscious simplicity — effective formulas,
              thoughtful ingredients, and soft textures designed for real
              everyday life.
            </p>

            <p>
              We believe skincare should support your skin, not overwhelm
              it. Combining modern science with a calm, minimal approach.
            </p>
          </div>

          <button className="mt-[clamp(20px,2.5vw,35px)] rounded-full bg-[#8b967d] px-[clamp(18px,2vw,28px)] py-[clamp(7px,0.7vw,10px)] text-[clamp(10px,0.7vw,12px)] font-medium text-white transition-transform duration-300 hover:scale-105">
            More about Sage
          </button>
        </div>

        <div className="flex w-[50%] items-center justify-end max-[700px]:w-full max-[700px]:justify-center">
          <div className="w-full max-w-[650px] overflow-hidden">
            <img
              src={productImage}
              alt="Sage skincare product"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;