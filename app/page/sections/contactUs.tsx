import {
  FaPhoneVolume,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaGoogleScholar,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { SlSocialDribbble } from "react-icons/sl";
import { SiResearchgate, SiIeee, SiSlideshare } from "react-icons/si";

const ContactUs = () => {
  const data = [
    {
      title: "Email",
      type: "mailto",
      icon: <HiOutlineMail size={24} className="text-white" />,
      data: [
        {
          title: "nimai.analyticlabs@gmail.com",
          value: "mailto:nimai.analyticlabs@gmail.com",
        },
        {
          title: "solutions.analyticlabs@gmail.com",
          value: "mailto:solutions.analyticlabs@gmail.com",
        },
        {
          title: "solutions.wybbleai@gmail.com",
          value: "mailto:solutions.wybbleai@gmail.com",
        },
      ],
    },
    {
      title: "Phone Number",
      type: "tel",
      icon: <FaPhoneVolume size={24} className="text-white" />,
      data: [
        {
          title: "+91 9591957282",
          value: "tel:+91 9591957282",
        },
        {
          title: "+91 8460578783",
          value: "tel:+91 8460578783",
        },
      ],
    },
    {
      title: "Social Media",
      type: "social_media",
      icon: <SlSocialDribbble size={24} className="text-white" />,
      data: [
        {
          title: "WhatsApp",
          value: "https://wa.me/+919591957282",
        },
        {
          title: "LinkedIn",
          value:
            "https://www.linkedin.com/in/nimai-chand-das-adhikari-932396ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHjOKE1KtQY%2BpoKDRnLHAZw%3D%3D",
        },
        {
          title: "GoogleScholar",
          value:
            "https://scholar.google.co.in/citations?user=JDq-uwwAAAAJ&hl=en",
        },
        {
          title: "ResearchGate",
          value: "https://www.researchgate.net/profile/Nimai-Das-Adhikari-2",
        },
        {
          title: "Ieee",
          value:
            "https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=nimai%20chand%20das%20adhikari",
        },
        {
          title: "SlideShare",
          value: "https://www.slideshare.net/NimaiChandDasAdhikar",
        },
        {
          title: "Instagram",
          value: "https://www.instagram.com/chand_nimai?igsh=NmdsYThvaGV5eHhh",
        },
      ],
    },
  ];

  return (
    <div className="container pt-6 pb-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/logo.png" alt="Contact Us" className="w-3/4 h-auto" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center py-5">
          <div className="text-center mb-4">
            <h2 className="text-4xl font-extrabold mb-2 text-white">
              Contact Us
            </h2>
            <p className="text-lg text-white">
              Contact us with any medium below and we will reach out to you.
            </p>
          </div>
          <div className="w-3/4 flex flex-col gap-5">
            {data.map((item, index) => (
              <div
                key={index}
                className="relative rounded-xl bg-foreground shadow-md px-12 py-6 flex items-center gap-4"
              >
                <div className="bg-primary absolute -left-6 p-4 rounded-full shadow-lg flex-shrink-0">
                  {item.icon}
                </div>

                <div className="flex flex-col">
                  <div className="h-[1px] bg-gray-300 w-full mb-4"></div>

                  <div className="flex flex-col gap-2">
                    {item.data.map((dataItem, dataIndex) => (
                      <address
                        key={dataIndex}
                        className="flex items-center gap-3"
                      >
                        {item.type === "social_media" && (
                          <span className="text-primary">
                            {dataItem.title === "WhatsApp" && (
                              <FaWhatsapp className="w-5 h-5" />
                            )}
                            {dataItem.title === "LinkedIn" && (
                              <FaLinkedinIn className="w-5 h-5" />
                            )}
                            {dataItem.title === "GoogleScholar" && (
                              <FaGoogleScholar className="w-5 h-5" />
                            )}
                            {dataItem.title === "ResearchGate" && (
                              <SiResearchgate className="w-5 h-5" />
                            )}
                            {dataItem.title === "Ieee" && (
                              <SiIeee className="w-5 h-5" />
                            )}
                            {dataItem.title === "SlideShare" && (
                              <SiSlideshare className="w-5 h-5" />
                            )}
                            {dataItem.title === "Instagram" && (
                              <FaInstagram className="w-5 h-5" />
                            )}
                          </span>
                        )}
                        <a
                          className="sm:text-base md:text-sm lg:text-xl font-semibold hover:font-bold hover:text-primary not-italic"
                          href={dataItem.value}
                        >
                          {dataItem.title}
                        </a>
                      </address>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white font-semibold mt-6 text-center"></div>
      <p className="text-center text-white font-semibold text-lg mt-6">
        &copy; Copyright 2024 All rights reserved -{" "}
        <span className="text-lg text-primary font-bold">Wybble.AI</span>
      </p>
    </div>
  );
};

export default ContactUs;
