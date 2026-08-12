const Philosophy = () => {
  return (
    <section className="flex min-h-[360px] w-full items-center bg-[#f1f1ed] px-8 py-10 md:px-14 lg:px-16">
      
      <div className="flex w-1/2 flex-col justify-center">
        <h2 className="max-w-[300px] text-[28px] font-medium leading-[0.95] tracking-[-0.04em] text-[#3f4935] md:text-[34px]">
          New philosophy,
          <br />
          of selfcare: healthy
          <br />
          skin&hair
        </h2>

        <p className="mt-4 max-w-[290px] text-[7px] leading-[1.35] text-[#555950] md:text-[8px]">
          Sage is about conscious simplicity — effective formulas,
          thoughtful ingredients, and fair values designed for real
          everyday life.
        </p>

        <p className="mt-2 max-w-[290px] text-[7px] leading-[1.35] text-[#555950] md:text-[8px]">
          We believe skincare should support your skin, not overwhelm
          it. Combining modern science with nature, our approach
          creates simple rituals for everyday care.
        </p>

        <button className="mt-5 w-fit rounded-full bg-[#8b967d] px-4 py-1.5 text-[6px] font-medium text-white">
          More about Sage
        </button>
      </div>

      <div className="flex h-full w-1/2 items-center justify-center">
        <div className="h-[270px] w-full max-w-[500px] bg-[#deded9]" />
      </div>

    </section>
  );
};

export default Philosophy;