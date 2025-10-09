const ProductSection = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1414690165279-49ab0a9a7e66?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "MonNit",
      description: "Simplifying remote monitoring with precision",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "HawKeye",
      description: "Delivering real-time analytics for informed decisions.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1706259481452-f857c96ceaca?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "TracKIT",
      description: "Tracking and managing assets with ease.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681488060968-ee7b2f6d8751?q=80&w=1083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "ChatIT",
      description: "Smart chat solutions for seamless customer interactions.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681487810054-4bced4f73e24?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "De-Fore",
      description: "Time-series forecasting made simple",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Py-Transfer Learning",
      description: "Utilize pre-trained models for rapid AI deployment",
    },
    {
      image:
        "https://images.unsplash.com/photo-1549560826-4b7bfe23f37b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "MediBot",
      description: "AI-powered solutions for healthcare",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1677408938823-dddebdf2fbff?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "SearchBot",
      description: "Empowering industries with intelligent search",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Our Products</h2>
      <p className="text-lg mb-10">
        Innovative tools designed to solve real-world challenges.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
              <p className="text-base text-secondary mt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
