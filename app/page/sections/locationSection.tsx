const LocationSection = () => {
  const data = [
    {
      title: "Mumbai, India",
      img: "https://images.unsplash.com/photo-1660145416818-b9a2b1a1f193?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Bangalore, India",
      img: "https://plus.unsplash.com/premium_photo-1681550093390-14477e7b196a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Bhubaneswar, Odisha",
      img: "https://plus.unsplash.com/premium_photo-1694475136007-14c4dbf484f5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Kolkata, India",
      img: "https://images.unsplash.com/photo-1647102208648-5f3175091dda?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Delhi, India",
      img: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Balasore, India",
      img: "https://images.unsplash.com/photo-1640753063173-5cf5a0127ecc?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Trivandrum, India",
      img: "https://plus.unsplash.com/premium_photo-1691031429427-97978a028467?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Dublin, Ireland",
      img: "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Parma, Italy",
      img: "https://images.unsplash.com/photo-1541503673344-d5081408437b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="container containerPadding">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-extrabold mb-2">Where are we?</h2>
        <p className="text-lg text-gray-600">
          We are available at the following locations
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="text-xl font-bold p-2">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSection;
