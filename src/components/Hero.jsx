import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import heroImage from "../assets/hero1.png";
import logoImage from "../assets/logo.png";

const navItems = [
  { label: "About us", to: "/about-us" },
  { label: "Catalog", to: "/catalog" },
  { label: "Services", to: "/services" },
  { label: "Hair&Body", to: "/hair-body" },
  { label: "Accessories", to: "/accessories" },
  { label: "Blog", to: "/blog" },
];

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <section className="relative h-[100svh] min-h-[500px] w-full overflow-hidden bg-[#b99a82]">

      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/5" />

      <nav className="absolute lg:h-[6vw] left-1/2 top-[clamp(18px,2vw,28px)] z-20 flex h-[clamp(44px,3vw,58px)] w-[calc(100%-clamp(32px,8vw,110px))] max-w-[1380px] -translate-x-1/2 items-center justify-between rounded-[10px] border border-white/30 bg-white/10 px-[clamp(10px,1vw,16px)] backdrop-blur-[8px]">

        <Link to="/" className="flex h-7 w-7 items-center justify-center lg:h-[3vw] lg:w-[3vw]">
          <img
            src={logoImage}
            alt="logo"
            className="h-full w-full object-cover"
          />
        </Link>

        <div className="hidden items-center gap-[clamp(12px,1.5vw,24px)] lg:gap-[4vw] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-[clamp(8px,0.65vw,10px)] text-white lg:text-[1.2vw]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 text-white">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className="flex flex-col gap-[3px]">
              <span className="h-px w-4 bg-white" />
              <span className="h-px w-4 bg-white" />
              <span className="h-px w-4 bg-white" />
            </span>
          </button>

          <div className="flex h-9 w-9 items-center justify-center text-[clamp(12px,1vw,15px)] lg:h-[3vw] lg:w-[3vw]">
            <FaShoppingCart />
          </div>
        </div>

      </nav>

      {menuOpen && (
        <div className="absolute left-1/2 top-[clamp(70px,9vw,92px)] z-20 w-[calc(100%-clamp(32px,8vw,110px))] max-w-[1380px] -translate-x-1/2 rounded-[14px] border border-white/20 bg-[#ffffff1a] p-3 backdrop-blur-[10px] md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={closeMenu}
                className="rounded-[10px] px-4 py-3 text-sm text-white transition-colors hover:bg-white/15"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <h1 className="absolute bottom-[-5px] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap font-['Cormorant_Garamond'] text-[69vw] lg:ml-[-50px] font-medium leading-[0.62] tracking-[-0.085em] text-[#f5f3ed]">
        sage
      </h1>

    </section>
  );
};

export default Hero;