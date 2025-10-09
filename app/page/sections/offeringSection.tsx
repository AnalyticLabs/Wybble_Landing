import {
  Briefcase,
  BarChart3,
  FlaskConical,
  Cpu,
  Code,
  Shield,
} from "lucide-react";

const OfferingSection = () => {
  const data = {
    title: "What we offer",
    subtitle:
      "Comprehensive AI-driven solutions tailored to meet your business needs.",
    offerings: [
      {
        title: "Business & Growth Strategy",
        description:
          "Expert management solutions to drive growth, efficiency, and long-term success.",
        icon: Briefcase, // Business Icon
      },
      {
        title: "Advanced Analytics & AI",
        description:
          "Transform data into actionable insights with cutting-edge analytics, ML, and AI-driven solutions.",
        icon: BarChart3, // Analytics Icon
      },
      {
        title: "Research & Product Innovation",
        description:
          "Pioneering R&D and product development to deliver breakthrough, industry-leading solutions.",
        icon: FlaskConical, // Research & Innovation Icon
      },
      {
        title: "Embedded & IoT Solutions",
        description:
          "Smart, connected systems leveraging IoT and embedded technologies for real-world applications.",
        icon: Cpu, // IoT & Embedded Icon
      },
      {
        title: "Software Development & Services",
        description:
          "End-to-end software solutions, from concept to execution, tailored to your needs.",
        icon: Code, // Software Development Icon
      },
      {
        title: "Cybersecurity & Compliance",
        description:
          "Robust security strategies and compliance solutions to safeguard your digital assets.",
        icon: Shield, // Cybersecurity Icon
      },
    ],
  };
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Title Section */}
      <div className="flex flex-col gap-8">
        <div className="inline-block motion-opacity-in-0 motion-translate-y-in-100">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-extrabold mb-2 text-center">
              {data.title}
            </h2>
            <p className="text-md text-center">{data.subtitle}</p>
            <div className="w-36 md:w-56 h-1 bg-primary mt-4"></div>
          </div>
        </div>

        {/* Offerings Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.offerings.map((offering, index) => {
            const IconComponent = offering.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start p-6 bg-white rounded-xl backdrop-blur-md bg-opacity-70 hover:shadow-xl hover:scale-105
                         transition-all duration-300 motion-safe:animate-fadeInUp"
              >
                {/* Icon */}
                <div className={`p-3 bg-primary rounded-full`}>
                  <IconComponent className="text-white w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  {offering.title}
                </h3>
                <p className="text-md text-gray-400 mt-2 leading-relaxed">
                  {offering.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OfferingSection;
