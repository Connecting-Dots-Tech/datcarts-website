interface PageTopProps {
  pageName: string;
}

const PageTop = ({ pageName }: PageTopProps) => {
  return (
    <div className="relative flex min-h-[60vh] w-full items-center justify-center bg-[url('/assets/Herobg.webp')] bg-cover bg-center bg-no-repeat">
      {/* Overlay Shadow */}
      <div
        className="absolute inset-0 flex min-h-[60vh] items-center justify-center bg-[url('/assets/bgherodesk.svg')] bg-cover bg-center bg-no-repeat opacity-80"
        aria-hidden="true"
      />

      {/* Page Title */}
      <h1 className="relative z-[1] px-4 text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
        {pageName}
      </h1>
    </div>
  );
};

export default PageTop;
