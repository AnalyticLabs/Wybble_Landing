const HomeSection = () => {
  return (
    // <div className="relative h-[38rem] md:max-h-screen lg:h-[48rem] overflow-hidden">
    <div className="relative min-h-screen lg:h-[48rem] overflow-hidden">
      <div className="absolute top-16 right-0 h-full md:block opacity-40 md:opacity-100">
        <img
          src="/background-logo.png"
          alt="Wybble Background Image"
          className="object-cover sm:text-white md:object-contain w-full h-full scale-110 origin-bottom-right motion-rotate-in-180 "
        />
      </div>
      {/* <div className="relative z-10 container flex flex-col items-start mt-48 sm:mt-0 sm:justify-center h-full md:text-left"> */}
      <div className="relative z-10 container flex flex-col items-start justify-center min-h-screen md:text-left pt-24 sm:pt-0">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-4 w-full -motion-translate-y-in-100 motion-opacity-in-0">
          Wybble.AI
        </h1>
        <h2 className="text-2xl md:text-3xl text-secondary font-semibold -motion-translate-y-in-100 motion-opacity-in-0">
          Innovating the Future with AI Solutions
        </h2>
        <p className="text-lg mt-4 font-semibold text-highlight -motion-translate-y-in-100 motion-opacity-in-0">
          Revolutionize your business with cutting-edge technology, advanced
          analytics, and transformative products
        </p>
        <div className="flex flex-col w-full mt-8 sm:mt-4 sm:w-auto sm:flex-row items-start justify-start gap-4 motion-translate-y-in-100 motion-opacity-in-0">
          <a
            className="w-full rounded-full sm:w-auto mt-4 bg-secondary text-background px-6 py-3 md:py-4 font-medium text-lg transition duration-300 ease-in-out hover:bg-primary"
            href="#career"
          >
            Explore all jobs
          </a>
          <a
            className="w-full rounded-full sm:w-auto mt-4 bg-secondary text-background px-6 py-3 md:py-4 font-medium text-lg transition duration-300 ease-in-out hover:bg-primary"
            href="#offerings"
          >
            Explore Offerings
          </a>
          <a
            className="w-full rounded-full sm:w-auto sm:mt-4 px-6 py-3 md:py-4 font-medium text-lg text-secondary hover:bg-foreground transition duration-300 ease-in-out"
            href="#contact"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
