import React from "react";
import productOne from "../assets/pic2.png";
import productTwo from "../assets/pic3.png";
import productThree from "../assets/pic4.png";

const NatureCare = () => {
  return (
    <section className="w-full bg-[#f1f1ed] px-[clamp(16px,5vw,70px)] py-[clamp(35px,5vw,75px)]">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-[1fr_1fr_0.85fr] gap-[clamp(10px,1.4vw,22px)] max-[700px]:grid-cols-2">

        <div className="aspect-[0.82] w-full overflow-hidden">
          <img
            src={productOne}
            alt="Sage product"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="aspect-[0.82] w-full overflow-hidden">
          <img
            src={productTwo}
            alt="Sage product"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-col max-[700px]:col-span-2 max-[700px]:mt-[clamp(22px,5vw,40px)]">
          <h2 className="text-[clamp(30px,3.2vw,52px)] font-medium leading-[0.88] tracking-[-0.045em] text-[#3e4938]">
            Pure care
            <br />
            by nature
          </h2>

          <div className="mt-[clamp(16px,2vw,28px)] max-w-[430px] space-y-[clamp(9px,1vw,14px)] text-[clamp(10px,0.8vw,13px)] leading-[1.35] text-[#555950]">
            <p>
              Thoughtfully crafted formulas designed to bring balance and calm
              to your daily routine.
            </p>

            <p>
              Lightweight textures, gentle ingredients, and a minimalist
              approach help support healthy-looking skin — effortlessly, every
              day.
            </p>
          </div>

          <div className="mt-[clamp(18px,2.5vw,32px)] aspect-[1.9] w-full overflow-hidden">
            <img
              src={productThree}
              alt="Sage body care products"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default NatureCare;