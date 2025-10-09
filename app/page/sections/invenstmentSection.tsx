const InvestmentSection = () => {
  const data = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1716915954992-291733ca4f58?q=80&w=1170&h=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fluxx.EV",
      subtitle: "Leading innovation in electric mobility",
      description:
        "Fluxx.EV is at the forefront of innovation in electric mobility, transforming the way we think about sustainable transportation...",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1667218846646-52e34875bd28?q=80&w=1170&h=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Nimai Nitai Enterprises",
      subtitle: "Solutions that drive industry growth",
      description:
        "Nimai Nitai Enterprises delivers innovative solutions that drive industry growth and enhance operational efficiency...",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1170&h=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Analytic Labs",
      subtitle: "Revolutionizing the power of data",
      description:
        "Analytic Labs is revolutionizing the power of data by transforming raw information into actionable insights...",
    },
    {
      image:
        "https://images.unsplash.com/photo-1677273424690-5e07bd92e6ce?q=80&w=1170&h=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Shree Chaitanya Restaurants",
      subtitle: "Fusing traditional cuisine with modern flavors",
      description:
        "Shree Chaitanya Restaurants offer a unique dining experience by blending traditional cuisine with modern flavors...",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Strategic Investments
      </h2>
      <p className="text-lg text-center text-gray-600 mt-2">
        Creating a sustainable future with impactful investments
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="overflow-hidden h-[14rem]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-extrabold">{item.title}</h3>
              <h4 className="text-lg font-medium text-gray-400">
                {item.subtitle}
              </h4>
              <div className="h-[2px] bg-gradient-to-r from-purple-400 to-blue-500 w-20 my-2"></div>
              <p className="text-gray-600 text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentSection;
