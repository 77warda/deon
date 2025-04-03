import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navigation = {
  "About Us": [
    { name: "A: Seestrasse 21", href: "#" },
    { name: "T: 00 1 23 45 67 89", href: "#" },
    { name: "E: qi@example.com", href: "#" },
    { name: "T: 99 8 76 54 321", href: "#" },
  ],
  "Reach Us": [
    { name: "Main Home", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Shop", href: "#" },
    { name: "Landing", href: "#" },
  ],
  Policies: [
    { name: "About Us", href: "#" },
    { name: "About Me", href: "#" },
    { name: "Our Process", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "Pricing Plans", href: "#" },
  ],
  Newsletter: [
    {
      description:
        "Get first dibs on new styles, promotions, events and other magical updates right in your inbox.",
    },
  ],
};

function Footer() {
  const [inputValue, setInputValue] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <footer className="bg-black opacity-90 lg:text-left">
      <div className="container mx-auto min-h-[75vh] py-5 px-5">
        <div className=" pb-5 pt-36">
          <h1 className="text-white text-6xl">DEON</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 my-10">
            {Object.entries(navigation).map(([section, links], index) => (
              <div
                key={section}
                className={
                  section === "Newsletter"
                    ? " md:col-span-3 lg:col-span-3"
                    : " md:col-span-1 lg:col-span-1"
                }
              >
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-500 hover:to-sky-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm tracking-wider font-normal text-white"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                  {section === "Newsletter" && (
                    <div className="w-full">
                      <p className="text-2xl tracking-wider font-normal text-white">
                        Our Newsletter
                      </p>
                      <div className="mt-5 relative md:mb-6">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={inputValue}
                          onChange={handleInputChange}
                          className="text-sm bg-transparent block w-full border-b border-opacity-40 border-[#6EC1D0] py-4 px-2 focus:border-[#6EC1D0] focus:outline-none text-gray-500 placeholder:font-normal placeholder:tracking-wider placeholder:text-sm"
                          placeholder="Your Email"
                        />
                        <Link
                          to="#"
                          className="text-sm tracking-widest uppercase text-white flex items-center gap-2 group transition-all"
                        >
                          <span className="my-10 w-20 h-[0.5px] bg-white block transition-all duration-300 group-hover:w-0 group-hover:opacity-0"></span>
                          <span className="transition-all duration-200 group-hover:-translate-x-2">
                            Subscribe
                          </span>
                        </Link>
                      </div>
                    </div>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="px-5 text-white text-opacity-40 font-light text-base tracking-wider">
            © 2022{" "}
            <a href="/" className="hover:text-white ">
              Qode Interactive
            </a>
            , All Rights Reserved
          </p>
        </div>
      </div>
      {showButton && (
        <div
          className="fixed -right-16 md:-right-8 lg:-right-8 bottom-32 -rotate-90 cursor-pointer"
          onClick={scrollToTop}
        >
          <p className="uppercase text-sm tracking-widest text-gray-500 flex items-center gap-2 group transition-all">
            <span className="w-20 h-[0.5px] bg-gray-500 block transition-all duration-300 group-hover:opacity-0"></span>
            <span className="group-hover:-translate-x-20 transition-all duration-200">
              Back to top
            </span>
          </p>
        </div>
      )}
    </footer>
  );
}

export default Footer;
