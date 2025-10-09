import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Controller, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ClientTestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const data = [
    {
      img: "/RajuGeorge.jpeg",
      name: "Dr. Raju K George",
      title: "Dean R&D, IIST",
      review:
        "Our collaboration with Wybble.AI has been outstanding. Their expertise in AI/ML research and product development has greatly enhanced our R&D efforts at IIST. The team’s innovation and technical excellence make them a valuable partner for cutting-edge solutions.",
    },
    {
      img: "/KarandipSingh.jpeg",
      name: "Karandip Singh",
      title: "CEO - E Plato",
      review:
        "Working with Wybble.AI has been a game-changer for E-Plato. Their expertise in AI/ML and product development has helped us drive innovation and accelerate our growth. A highly skilled and reliable team!",
    },
    {
      img: "/jyoti.jpg",
      name: "Jyoti Prakash Sahoo",
      title: "Eupep Pvt. Ltd.",
      review:
        "Wybble.ai has been a key technology partner for Eupep Pvt Ltd, bringing cutting-edge AI/ML expertise to our product development. Their innovative approach and technical excellence have greatly enhanced our solutions. A truly reliable and forward-thinking team!",
    },
    {
      img: "/Seal_of_Odisha.png",
      name: "Odisha Smart City",
      title: "GOVT. OF ODISHA",
      review:
        "Traffic Management system with minimising the error rate by 20% and developing a cutting edge technology which got presented in IIT madras in PSE 2022",
    },
    {
      img: "/Rajesh-Kumar.jpg",
      name: "Rajesh Kumar",
      title: "Bollywood Actor",
      review:
        "Working with Wybble.ai has been an incredible experience. Their AI-driven solutions and innovative approach to product development have been instrumental in shaping Mera Family Farmer. The team's expertise and dedication make them a valuable technology partner.",
    },
  ];

  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsCentered(window.innerWidth > 450);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="container containerPadding">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold mb-2">Client Testimonials</h2>
        <p className="text-md text-gray-600">Testimonials from our clients</p>
      </div>

      <Swiper
        pagination={{ clickable: true }}
        modules={[Controller, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        centeredSlides={isCentered}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          0: { slidesPerView: 1 },
          425: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        style={{
          transition: "width 0.4s ease-in-out",
          alignItems: "center",
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              transition: "width 0.4s ease-in-out",
            }}
          >
            <div
              className={`${
                index === activeIndex ? "p-1" : "px-2 mt-20"
              } bg-white flex flex-col items-start`}
            >
              <img
                src={item.img}
                alt={`${item.name} - ${item.title}`}
                className={
                  `object-cover  max-w-full ` +
                  `${
                    index === activeIndex
                      ? "aspect-square"
                      : "aspect-square p-4"
                  }`
                }
                onClick={() => {
                  const nextIndex = index;
                  setActiveIndex(nextIndex);
                  swiperRef.current?.slideTo(nextIndex);
                }}
              />
              {index === activeIndex && (
                <>
                  <h3 className="text-base font-bold mt-4">{item.name}</h3>
                  <h4 className="text-sm text-highlight">{item.title}</h4>
                  <p className="text-md font-extrabold mt-4 text-start">
                    {item.review}
                  </p>
                  <button
                    className="px-4 py-4 mt-4 bg-primary text-white rounded-full cursor-pointer"
                    onClick={() => {
                      const nextIndex =
                        activeIndex === data.length - 1 ? 0 : activeIndex + 1;
                      setActiveIndex(nextIndex);
                      swiperRef.current?.slideTo(nextIndex);
                    }}
                  >
                    <ChevronRight />
                  </button>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientTestimonialSection;
