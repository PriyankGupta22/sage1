import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import heroImage from "../assets/hero1.png";
import logoImage from "../assets/logo.png";


const Hero = () => {
  return (
    <section className="relative h-[100svh] min-h-[500px] w-full overflow-hidden bg-[#b99a82]">

      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/5" />

      <nav className="absolute left-1/2 top-[clamp(18px,2vw,28px)] z-20 flex h-[clamp(38px,3vw,46px)] w-[calc(100%-clamp(32px,8vw,110px))] max-w-[1180px] -translate-x-1/2 items-center justify-between rounded-[10px] border border-white/30 bg-white/10 px-[clamp(10px,1vw,16px)] backdrop-blur-[8px]">

        <div className="flex h-7 w-7 items-center justify-center text-[clamp(17px,1.4vw,21px)] text-white">
          <img
                      src={logoImage}
                      alt="logo"
                      className="h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center gap-[clamp(12px,1.5vw,24px)] max-[600px]:hidden">
          <a href="#" className="text-[clamp(8px,0.65vw,10px)] text-white">
            About us
          </a>

          <a href="#" className="text-[clamp(8px,0.65vw,10px)] text-white">
            Catalog
          </a>

          <a href="#" className="text-[clamp(8px,0.65vw,10px)] text-white">
            Services
          </a>

          <a href="#" className="text-[clamp(8px,0.65vw,10px)] text-white">
            Hair&Body
          </a>

          <a href="#" className="text-[clamp(8px,0.65vw,10px)] text-white">
            Accessories
          </a>

          <a href="#" className="text-[clamp(8px,0.65vw,10px)] text-white">
            Blog
          </a>
        </div>

        <div className="text-[clamp(12px,1vw,15px)] text-white">
          <FaShoppingCart />
        </div>

      </nav>

      <h1 className="absolute bottom-[10%] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap font-['Cormorant_Garamond'] text-[clamp(170px,70vw,520px)] font-medium leading-[0.62] tracking-[-0.085em] text-[#f5f3ed]">
        sage
      </h1>

    </section>
  );
};

export default Hero;