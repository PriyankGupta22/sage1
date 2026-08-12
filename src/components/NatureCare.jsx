const NatureCare = () => {
  return (
    <section className="flex w-full items-start gap-3 bg-[#f1f1ed] px-8 py-8 md:px-12 lg:px-16">

      <div className="flex w-[64%] gap-3">
        <div className="h-[260px] flex-1 bg-[#deded9]" />
        <div className="h-[260px] flex-1 bg-[#deded9]" />
      </div>

      <div className="flex w-[36%] flex-col">
        <h2 className="text-[28px] font-medium leading-[0.9] tracking-[-0.045em] text-[#3f4935] md:text-[34px]">
          Pure care
          <br />
          by nature
        </h2>

        <p className="mt-4 max-w-[240px] text-[7px] leading-[1.35] text-[#555950] md:text-[8px]">
          Thoughtfully crafted formulas designed to bring balance and calm
          to your daily routine.
        </p>

        <p className="mt-2 max-w-[240px] text-[7px] leading-[1.35] text-[#555950] md:text-[8px]">
          We believe effective, gentle ingredients and meaningful
          simplicity should support every skin type.
        </p>

        <div className="mt-4 h-[90px] w-full max-w-[210px] bg-[#d6d8d0]" />
      </div>

    </section>
  );
};

export default NatureCare;