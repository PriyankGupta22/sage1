const Complex = () => {
  return (
    <section className="relative min-h-[380px] w-full overflow-hidden bg-[#f1f1ed] px-8 py-8 md:px-12 lg:px-16">

      <div className="absolute left-0 top-[70px] z-0 font-['Cormorant_Garamond'] text-[190px] font-medium leading-[0.65] tracking-[-0.08em] text-[#aeb4a4] md:text-[250px]">
        new
      </div>

      <div className="relative z-10 flex flex-col">

        <div className="flex items-start justify-between">

          <div className="w-[35%]">
            <h2 className="text-[28px] font-medium leading-[0.9] tracking-[-0.045em] text-[#3f4935] md:text-[34px]">
              All-in-One
              <br />
              Skincare Complex
            </h2>

            <p className="mt-4 max-w-[230px] text-[7px] leading-[1.35] text-[#555950] md:text-[8px]">
              Multifunctional line designed to simplify your daily routine
              with comprehensive results.
            </p>
          </div>

          <div className="h-[145px] w-[58%] bg-[#deded9]" />

        </div>

        <div className="mt-[-5px] flex items-end justify-between">

          <div className="ml-[8%] h-[125px] w-[55%] bg-[#deded9]" />

          <div className="w-[30%] pb-1">

            <p className="max-w-[220px] text-[7px] leading-[1.35] text-[#555950] md:text-[8px]">
              Each formula combines hydration, barrier support, and
              skin-balancing ingredients to work in one effortless step.
              The collection focuses on smart minimalism — fewer products,
              more impact, and consistent care for healthy-looking skin.
            </p>

            <button className="mt-4 rounded-full border border-[#9ca096] px-5 py-1 text-[7px] text-[#555950]">
              Catalog
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Complex;