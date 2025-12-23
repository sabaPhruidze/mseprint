export const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="
        hidden screen-size-13:inline-flex items-center
        absolute top-[158px] screen-size-18:top-[206px] left-6 z-50
        text-white border border-white rounded-lg
        no-underline
        px-2 py-3 screen-size-5:px-4 screen-size-5:py-2
        hover:bg-white hover:text-black hover:border-0
        focus:scale-95
        transition-all
        duration-500
        font-inter-extrabold text-[12px] screen-size-5:text-[18px]
      "
    >
      Skip to content
    </a>
  );
};

export default SkipLink;
