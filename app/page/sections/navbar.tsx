import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "offerings", label: "Offerings" },
  { id: "products", label: "Products" },
  { id: "investments", label: "Investments" },
  { id: "career", label: "Careers" },
  { id: "aboutUs", label: "About Us" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
}: {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [scrollY, setScrollY] = useState(0);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeSection) {
      setCurrentSection(activeSection);
    }
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
      window.history.replaceState(null, "", `#${id}`);
    }
    setCurrentSection(id);
    setIsMenuOpen(false);
  };
  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrollY > 10 ? "bg-background" : "bg-transparent"
      }`}
    >
      <header className="flex items-center justify-between container">
        {/* Logo */}
        <div
          className="p-2 bg-primary rounded-full my-4 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src="/logo.png"
            alt="Wybble"
            className="w-12 h-12 md:w-16 md:h-16"
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined text-4xl">menu</span>
        </button>

        {/* Navigation */}
        <nav
          className={`lg:flex ${
            isMenuOpen
              ? "absolute top-0 left-0 w-screen h-screen bg-primary text-white z-50 flex flex-col justify-center items-center"
              : "hidden"
          } lg:flex-row gap-4`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-4xl font-bold lg:hidden"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>

          <ul className="flex flex-col lg:flex-row gap-2">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-2 py-4 font-bold cursor-pointer ${
                  isMenuOpen ? "text-4xl" : "text-base"
                } ${
                  currentSection === item.id
                    ? "text-foreground bg-secondary rounded-lg decoration-2 underline-offset-8 lg:no-underline"
                    : ""
                }`}
              >
                <a href={`#${item.id}`} className="relative z-10">
                  {item.label}
                </a>
                {currentSection === item.id && (
                  <span className="absolute top-0 left-0 w-full h-20 bg-secondary lg:block hidden -z-10 mt-[-40px]"></span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
