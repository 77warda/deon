import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";

import { Link } from "react-router-dom";

const navigation = [
  {
    name: "Home",
    href: "/",
    submenu: [
      "Main Home",
      "App Presentation",
      "Digital Services",
      "Product Showcase",
      "Company Home",
      "App Showcase",
      "App Landing",
      "Software Support",
      "Startup Home",
      "IT Business",
      "Tech Company",
      "Landing",
    ],
  },
  {
    name: "Pages",
    href: "#",
    submenu: [
      "About Us",
      "About Me",
      "Our Team",
      "Our Process",
      "Pricing Plans",
      "Contact Us",
    ],
  },
  {
    name: "Portfolio",
    href: "/shop",
    submenu: [
      ["Standard", "Gallery", "Gallery Joined", "Masonry", "3 Image Slider"],
      ["Two Columns", "Three Columns", "Four Columns", "Five Columns"],
      ["Small Images", "Big Images", "Small Gallery", "Big Gallery"],
      ["Hover Types", "Fade In", "Zoom On Hover"],
    ],
  },
  { name: "Shop", href: "/deals", submenu: ["Men", "Women", "Kids"] },
  { name: "Blog", href: "#", submenu: ["Latest News", "Popular Posts"] },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [submenuTimeout, setSubmenuTimeout] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeColumn, setActiveColumn] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (index) => {
    if (submenuTimeout) {
      clearTimeout(submenuTimeout);
      setSubmenuTimeout(null);
    }
    setHoveredMenu(index);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredMenu(null);
    }, 1000);
    setSubmenuTimeout(timeout);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
    setActiveColumn(null); // Reset column when switching main submenu
  };

  const toggleColumn = (columnIndex) => {
    setActiveColumn(activeColumn === columnIndex ? null : columnIndex);
  };
  return (
    <div
      className={`fixed top-0 w-full z-10 px-5 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-5 " : "bg-transparent py-16"
      }`}
    >
      <div className="px-1 lg:px-8">
        <nav
          className="w-full md:max-w-[100rem] lg:max-w-[100rem] mx-auto flex items-center justify-between"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link
              to="/"
              className={`text-lg font-semibold uppercase tracking-widest ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Deon
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <HiOutlineBars3BottomRight
                className={`h-6 w-6 ${!mobileMenuOpen ? "block" : "hidden"}`}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.href}
                  className={`hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-500 hover:to-sky-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm uppercase font-semibold tracking-[4px] ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.name}
                </Link>
                {item.submenu.length > 0 && (
                  <div
                    className={`absolute mt-7 bg-white shadow-lg px-8 py-8 transition-all duration-300 transform ${
                      hoveredMenu === index
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-5 invisible"
                    } ${
                      item.name === "Portfolio"
                        ? "-right-5 w-[50vw] grid grid-cols-4 gap-4 p-4"
                        : "-left-10 w-64"
                    }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {Array.isArray(item.submenu[0])
                      ? item.submenu.map((column, colIndex) => (
                          <div key={colIndex} className="flex flex-col">
                            {column.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to="#"
                                className="text-lg block px-4 py-1 text-gray-700 hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-500 hover:to-sky-400 hover:bg-clip-text hover:text-transparent transition-all duration-300"
                              >
                                {subItem}
                              </Link>
                            ))}
                          </div>
                        ))
                      : item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to="#"
                            className="text-lg block px-4 py-1 text-gray-700 hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-500 hover:to-sky-400 hover:bg-clip-text hover:text-transparent transition-all duration-300"
                          >
                            {subItem}
                          </Link>
                        ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog
          as="div"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className={`text-black -m-1.5 p-1.5 text-lg font-semibold uppercase tracking-widest `}
              >
                Deon
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <TfiClose className={`h-6 w-6 text-black`} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6">
              {navigation.map((item, index) => (
                <div key={index} className="py-2">
                  {/* Main Menu Button */}
                  <button
                    className="text-black text-lg font-semibold w-full text-left flex justify-between items-center"
                    onClick={() => toggleSubmenu(index)}
                  >
                    {item.name}
                    <span>
                      {activeSubmenu === index ? (
                        <TfiAngleUp className="h-5 w-5 transition-transform duration-300" />
                      ) : (
                        <TfiAngleDown className="h-5 w-5 transition-transform duration-300" />
                      )}
                    </span>
                  </button>

                  {/* Submenu */}
                  {activeSubmenu === index && (
                    <div className="ml-4 mt-2">
                      {Array.isArray(item.submenu[0])
                        ? // If submenu contains arrays (like Portfolio)
                          item.submenu.map((column, columnIndex) => (
                            <div key={columnIndex}>
                              {/* Column Heading (Expandable) */}
                              <button
                                className="text-gray-900 font-medium w-full text-left flex justify-between items-center py-2"
                                onClick={() => toggleColumn(columnIndex)}
                              >
                                Column {columnIndex + 1}
                                <span>
                                  {activeColumn === columnIndex ? (
                                    <TfiAngleUp className="h-4 w-4" />
                                  ) : (
                                    <TfiAngleDown className="h-4 w-4" />
                                  )}
                                </span>
                              </button>

                              {/* Inner Column Items */}
                              {activeColumn === columnIndex && (
                                <div className="ml-4">
                                  {column.map((subItem, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      to="#"
                                      className="block text-gray-700 py-1"
                                    >
                                      {subItem}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))
                        : // If submenu is just a list
                          item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to="#"
                              className="block text-gray-700 py-1"
                            >
                              {subItem}
                            </Link>
                          ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
}

export default Header;
