import { Controller, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const PeopleMentor = () => {
  const data = [
    {
      img: "/jyoti.jpg",
      name: "Jyoti Prakash Sahoo",
      expertise: "Full Stack Engineer",
    },
    {
      img: "/subhra.jpg",
      name: "Subhra Jyoti Lahiri",
      expertise: "Backend & Computer Science",
    },
    {
      img: "/omkar.jpg",
      name: "Omkar Kar",
      expertise: "ML & Computer Vision",
    },
    {
      img: "/aritra.jpg",
      name: "Aritra Roy",
      expertise: "AI, NLP & Computer Vision",
    },
    {
      img: "/debasish.jpg",
      name: "Debasish Birmiwal",
      expertise: "Data Science & Backend",
    },
    {
      img: "/bijon.jpg",
      name: "Bijon Guha",
      expertise: "Big Data & Computer Vision",
    },
    {
      img: "/Dibyajyoti.jpg",
      name: "Dibyajyoti Sahoo",
      expertise: "Full Stack Developer",
    },
    {
      img: "/sharath.jpg",
      name: "Sharath Nair",
      expertise: "Backend Microservice",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-900">
          People & Mentors
        </h2>
        <p className="text-lg text-gray-500 mt-2">
          Meet our experts who are shaping the future.
        </p>
      </div>

      <Swiper
        spaceBetween={24}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Controller, Pagination, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
        className="swiper-container"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center">
                <img
                  src={item.img}
                  alt={`${item.name} - ${item.expertise}`}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover"
                  style={{ width: "15rem", height: "15rem" }}
                />
              </div>
              <p className="mt-3 text-2xl text-center font-semibold text-gray-800 w-full">
                {item.name}
              </p>
              <p className="mt-1 text-lg text-center text-gray-600 w-full">
                ({item.expertise})
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination Styling */}
      <style>{`
        .swiper-container {
          padding-bottom: 50px;
        }
        .swiper-pagination-bullet {
          background: #4a90e2;
          width: 10px;
          height: 10px;
          transition: transform 0.2s ease-in-out;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb;
          transform: scale(1.3);
        }
      `}</style>
    </div>
  );
};

export default PeopleMentor;
