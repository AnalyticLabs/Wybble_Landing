const FounderSection = () => {
  return (
    <div className="container mx-auto py-24 px-6 md:px-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Meet the <span className="text-primary">Minds Behind Wybble.ai</span>
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Innovation is driven by great leadership. Our founders are committed
          to pushing the boundaries of technology and business excellence.
        </p>
      </div>

      {/* Founder Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16 md:mt-20">
        {/* Founder 1 */}
        <div
          className="group relative bg-white/90 backdrop-blur-xl shadow-xl p-8 rounded-3xl border border-gray-200 flex flex-col items-center text-center
        transition-all transform hover:scale-105 hover:shadow-2xl hover:border-primary"
        >
          <img
            src="/arpana.jpg"
            alt="Arpana Alka"
            className="w-32 h-32 rounded-full border-4 border-primary shadow-lg transition-all duration-300 group-hover:scale-110"
          />
          <h3 className="mt-5 text-3xl font-semibold text-gray-900">
            Arpana Alka
          </h3>
          <p className="text-md text-gray-500 font-medium">MD & CEO</p>
        </div>

        {/* Founder 2 */}
        <div
          className="group relative bg-white/90 backdrop-blur-xl shadow-xl p-8 rounded-3xl border border-gray-200 flex flex-col items-center text-center
        transition-all transform hover:scale-105 hover:shadow-2xl hover:border-primary"
        >
          <img
            src="/PASSPORT_PHOTO_BRAJESWARI.jpg"
            alt="Mrs. Brajeswari Das Adhikari"
            className="w-32 h-32 rounded-full border-4 border-primary shadow-lg transition-all duration-300 group-hover:scale-110"
          />
          <h3 className="mt-5 text-3xl font-semibold text-gray-900">
            Mrs. Brajeswari Das Adhikari
          </h3>
          <p className="text-md text-gray-500 font-medium">Founder</p>
        </div>
      </div>

      {/* Backed By Section */}
      <div className="mt-24 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Backed By</h2>
        <p className="text-gray-600 text-lg">
          Proudly supported by leading institutions and visionaries.
        </p>
        {/* <div className="mt-8 flex justify-center gap-12"> */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 md:gap-12">
          <img
            src="/IIST.png"
            alt="IIST"
            className="w-24 md:w-28 transition-transform transform hover:scale-110 hover:opacity-80"
          />
          <img
            src="/eupep.avif"
            alt="Eupep"
            className="w-24 md:w-28 transition-transform transform hover:scale-110 hover:opacity-80"
          />
          <img
            src="/fluxx.png"
            alt="Fluxx EV"
            className="w-24 md:w-28 transition-transform transform hover:scale-110 hover:opacity-80"
          />
          <img
            src="/CloudHub.webp"
            alt="Cloud Hub"
            className="w-24 md:w-28 transition-transform transform hover:scale-110 hover:opacity-80"
          />
          <img
            src="/parthtech.png"
            alt="Prath Tech"
            className="w-24 md:w-28 transition-transform transform hover:scale-110 hover:opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
