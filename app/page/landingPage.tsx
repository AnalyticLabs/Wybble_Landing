import { useState, useEffect } from "react";
import HomeSection from "./sections/homeSection";
import OfferingSection from "./sections/offeringSection";
import ProductSection from "./sections/productSection";
import InvestmentSection from "./sections/invenstmentSection";
import FounderSection from "./sections/foundersSection";
import PeopleMentor from "./sections/peopleMentors";
import LocationSection from "./sections/locationSection";
import ClientTestimonialSection from "./sections/clientTestimonialSection";
import ContactUs from "./sections/contactUs";
import Navbar from "./sections/navbar";
import CareersSection from "./sections/careersSection";
// import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// import { FaGoogleScholar } from "react-icons/fa6";
// import { SiIeee, SiResearchgate, SiSlideshare } from "react-icons/si";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "career", label: "Careers" },
  { id: "offerings", label: "Offerings" },
  { id: "products", label: "Products" },
  { id: "investments", label: "Investments" },
  { id: "aboutUs", label: "About Us" },
  { id: "contact", label: "Contact" },
];

export function LandingPage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.replaceState(null, "", "#home");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.id)
      );
      const scrolledSections = sections.filter(
        (section) =>
          section &&
          section.getBoundingClientRect().top <= window.innerHeight / 2 &&
          section.getBoundingClientRect().bottom >= window.innerHeight / 2
      );

      if (scrolledSections.length > 0) {
        const newSection = scrolledSections[0]?.id || "";
        setActiveSection(newSection);
        window.history.replaceState(null, "", `#${newSection}`); // Update URL
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const socials = [
  //   {
  //     id: 1,
  //     icon: <FaWhatsapp className="w-5 h-5" />,
  //     path: "https://wa.me/+919591957282",
  //   },
  //   {
  //     id: 2,
  //     icon: <FaLinkedinIn className="w-5 h-5" />,
  //     path: "https://www.linkedin.com/in/nimai-chand-das-adhikari-932396ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHjOKE1KtQY%2BpoKDRnLHAZw%3D%3D",
  //   },
  //   {
  //     id: 3,
  //     icon: <FaGoogleScholar className="w-5 h-5" />,
  //     path: "https://scholar.google.co.in/citations?user=JDq-uwwAAAAJ&hl=en",
  //   },
  //   {
  //     id: 4,
  //     icon: <SiResearchgate className="w-5 h-5" />,
  //     path: "https://www.researchgate.net/profile/Nimai-Das-Adhikari-2",
  //   },
  //   {
  //     id: 5,
  //     icon: <SiIeee className="w-5 h-5" />,
  //     path: "https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=nimai%20chand%20das%20adhikari",
  //   },
  //   {
  //     id: 6,
  //     icon: <SiSlideshare className="w-5 h-5" />,
  //     path: "https://www.slideshare.net/NimaiChandDasAdhikar",
  //   },
  //   {
  //     id: 7,
  //     icon: <FaInstagram className="w-5 h-5" />,
  //     path: "https://www.instagram.com/chand_nimai?igsh=NmdsYThvaGV5eHhh",
  //   },
  // ];

  return (
    <main>
      {/* Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Sections */}
      <div className="flex flex-col min-h-screen justify-between">
        <div>
          <section id="home">
            <HomeSection />
          </section>
          <section id="offerings">
            <OfferingSection />
          </section>
          <section id="products" className="bg-secondary text-foreground">
            <ProductSection />
          </section>
          <section id="investments">
            <InvestmentSection />
          </section>
          <section id="career">
            <CareersSection />
          </section>
          <section id="aboutUs" className="bg-white">
            <FounderSection />
            <PeopleMentor />
            <div className="bg-background">
              <LocationSection />
            </div>
            <ClientTestimonialSection />
          </section>
        </div>

        {/* Contact Section */}
        <section id="contact" className="bg-secondary">
          <ContactUs />
          {/* <footer className="py-12 bg-secondary text-white">
            <div className="container mx-auto px-6 md:px-12">
              <div className="flex flex-col md:flex-row justify-between gap-12">
                <div className="max-w-md text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-semibold flex items-center justify-center md:justify-start gap-2">
                    <img
                      src="/logo.png"
                      alt="wybble"
                      width={50}
                      className="md:w-[60px]"
                    />
                    Wybble.AI
                  </h2>
                  <p className="mt-2 text-lg text-gray-400">
                    Innovating the Future with AI Solutions
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                    {socials.map((item) => (
                      <a
                        key={item.id}
                        href={item.path}
                        className="p-2 rounded-full bg-primary hover:scale-110 transition-transform"
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <nav className="text-center md:text-right">
                  <ul className="flex flex-wrap justify-center md:justify-end gap-6">
                    {NAV_ITEMS.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="relative z-10 text-lg hover:text-primary font-semibold transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="border-t border-gray-700 pt-6 text-center text-gray-600">
                &copy; Copyright 2025 All rights reserved -{" "}
                <span className="text-lg text-primary font-bold">
                  Wybble.AI
                </span>
              </div>
            </div>
          </footer> */}
        </section>
      </div>
    </main>
  );
}
