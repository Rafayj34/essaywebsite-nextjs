"use client";

import { useState, useEffect } from "react";
import { logo, menu, close, arrowdown, arrowUp } from "../assets";
import { services } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  // Hooks
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isServicesDropdownVisible, setIsServicesDropdownVisible] =
    useState(false);
  const [isCountriesDropdownVisible, setIsCountriesDropdownVisible] =
    useState(false);
  const [isBlogsDropdownVisible, setIsBlogsDropdownVisible] = useState(false);
  const [isFixedNavbar, setIsFixedNavbar] = useState(false);
  const [servicesData, setServicesData] = useState(services);

  // functions
  const handleMenuButtonClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setToggle(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    // Add scroll event listener to update the fixed state
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixedNavbar(true);
      } else {
        setIsFixedNavbar(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleServiceClick = (serviceId) => {
    // Find the service with the given serviceId
    const service = services.find((service) => service.id === serviceId);

    // Toggle the isSubMenuVisible property of the clicked service
    service.isSubMenuVisible = !service.isSubMenuVisible;

    // Set the active state to the clicked service name
    setActive(service.name);
  };
  return (
    <section>
      <nav className="w-full h-30 bg-gray-800 items-center fixed stick z-30">
        <div
          className={`w-full py-4 flex justify-center bg-gray-800 items-center absolute ${
            isFixedNavbar ? "hidden" : "stick"
          }`}
        >
          <Image layout="fixed" src={logo} alt="logo" height={90} width={90} />
        </div>
        {/* Navbar elements */}
        <nav
          className={`w-full h-[45px] bg-gray-800 items-center fixed ${
            isFixedNavbar ? "fixed" : "top-24"
          }`}
        >
          {/* Home */}
          <div className="ml-10 relative hidden normal-screen:flex justify-center">
            <ul className="flex me-10 items-center space-x-6 justify-center">
              <li
                className={`font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-400 transition-all rounded-lg p-2 ${
                  active === "Home" ? "text-white" : "text-dimWhite"
                } mr-10`}
                onClick={() => setActive("Home")}
              >
                <button>
                  <a href="#home">Home</a>
                </button>
              </li>

              {/* Services Menu */}
              <li className="relative">
                <button
                  className={`font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-400 transition-all rounded-lg p-2 ${
                    isServicesDropdownVisible ? "text-white" : "text-dimWhite"
                  } mr-10`}
                  onClick={() => {
                    setActive("Services");
                    setIsServicesDropdownVisible(!isServicesDropdownVisible);
                    setIsBlogsDropdownVisible(false);
                    setIsCountriesDropdownVisible(false);
                  }}
                >
                  <a href="#services">Services</a>
                  <div className="absolute right-7 top-[23px] transform -translate-y-1/2">
                    <Image
                      src={isServicesDropdownVisible ? arrowUp : arrowdown}
                      alt="arrow icon for dropdown"
                      className={`w-[12px] h-[12px] object-contain ${
                        isServicesDropdownVisible ? "arrow-up" : "arrow-down"
                      }`}
                    />
                  </div>
                  {/* Add the 'dropdown' class when 'isServicesDropdownVisible' is true */}
                  <div
                    className={`dropdown ${
                      isServicesDropdownVisible
                        ? "dropdown-enter"
                        : "dropdown-exit"
                    } bg-gray-800 text-white gap-5 min-w-[500px] py-4 px-6 flex z-20 absolute top-full mt-0`}
                    onMouseEnter={() => {
                      setIsServicesDropdownVisible(true);
                    }}
                    onMouseLeave={() => {
                      setIsServicesDropdownVisible(false);
                    }}
                  >
                    {/* Add your dropdown menu items here */}
                    <ul>
                      <li>
                        <a href="#item1">Item 1 with very long name</a>
                      </li>
                      <li>
                        <a href="#item2">Item 2</a>
                      </li>
                      <li>
                        <a href="#item3">Item 3</a>
                      </li>
                      <li>
                        <a href="#item4">Item 4</a>
                      </li>
                      {/* Add more items here */}
                    </ul>
                    <ul>
                      <li>
                        <a href="#item1">Item 1 </a>
                      </li>
                      <li>
                        <a href="#item2">Item 2</a>
                      </li>
                      <li>
                        <a href="#item3">Item 3</a>
                      </li>
                      <li>
                        <a href="#item4">Item 4</a>
                      </li>
                      {/* Add more items here */}
                    </ul>
                  </div>
                </button>
              </li>

              <li className="relative">
                <button
                  className={`font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-400 transition-all rounded-lg p-2 ${
                    isCountriesDropdownVisible ? "text-white" : "text-dimWhite"
                  } mr-10`}
                  onClick={() => {
                    setActive("Services");

                    setIsCountriesDropdownVisible(!isCountriesDropdownVisible);
                    setIsBlogsDropdownVisible(false);
                    setIsServicesDropdownVisible(false);
                  }}
                >
                  <a href="#countries">Countries</a>
                  <div className="absolute right-7 top-[23px] transform -translate-y-1/2">
                    <Image
                      src={isCountriesDropdownVisible ? arrowUp : arrowdown}
                      alt="arrow icon for dropdown"
                      className={`w-[12px] h-[12px] object-contain ${
                        isCountriesDropdownVisible ? "arrow-up" : "arrow-down"
                      }`}
                    />
                  </div>
                  {/* Add the 'dropdown' class when 'isCountriesDropdownVisible' is true */}
                  <div
                    className={`dropdown ${
                      isCountriesDropdownVisible
                        ? "dropdown-enter"
                        : "dropdown-exit"
                    } bg-gray-800 text-white gap-5 min-w-[200px] py-4 px-6 flex z-20 absolute top-full mt-0`}
                    onMouseEnter={() => {
                      setIsCountriesDropdownVisible(true);
                    }}
                    onMouseLeave={() => {
                      setIsCountriesDropdownVisible(false);
                    }}
                  >
                    {/* Add your dropdown menu items here */}
                    <ul>
                      <li>
                        <a href="#item1">Item 1</a>
                      </li>
                      <li>
                        <a href="#item2">Item 2</a>
                      </li>
                      <li>
                        <a href="#item3">Item 3</a>
                      </li>
                      <li>
                        <a href="#item4">Item 4</a>
                      </li>
                      {/* Add more items here */}
                    </ul>
                  </div>
                </button>
              </li>
              <li className="relative">
                <button
                  className={`font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-400 transition-all rounded-lg p-2 mr-10`}
                  onClick={() => setActive("Blogs")}
                >
                  <a href="#blogs">Blogs</a>
                </button>
              </li>
              <li className="relative">
                <button
                  className="font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-400 transition-all rounded-lg p-2"
                  onClick={() => setActive("About us")}
                >
                  <a href="#blogs">About us</a>
                </button>
              </li>
              <li className="relative">
                <button
                  className="font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-400 transition-all rounded-lg p-2"
                  onClick={() => setActive("Contact us")}
                >
                  <a href="#blogs">Contact us</a>
                </button>
              </li>
            </ul>
          </div>

          {/* -------------------------------------------------------------------------------------------------------- */}

          {/* Mobile Menu Button */}
          <div className="md:hidden normal-screen:hidden flex mt-2 z-40 justify-end mx-3">
            <Image
              src={menu}
              alt="menu icon for mobile sidebar"
              className="w-[28px] h-[28px] object-contain"
              onClick={handleMenuButtonClick}
            />
          </div>
        </nav>
        {/* Sidebar */}
        <div
          className={`${
            toggle ? "sidebar-visible" : "sidebar-hidden"
          } p-6 bg-gray-800 text-white  right-0 bottom-0 h-full w-[150px] fixed shadow-lg z-20 transition-all`}
        >
          {/* Close Button inside Sidebar */}
          <div className="flex justify-end  mb-4">
            <Image
              src={close}
              alt="close icon for mobile sidebar"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={handleMenuButtonClick}
            />
          </div>

          <div className="flex">
            <ul className="list-none mt-10 flex items-start flex-1 flex-col">
              <li
                className={`font-poppins font-medium cursor-pointer text-[12px]   hover:text-orange-400 transition-all p-2 ${
                  active === "Home" ? "text-white" : "text-dimWhite"
                } mb-4`}
                onClick={() => {
                  setActive("Home");
                  setToggle(false); // Close the sidebar when a link is clicked
                }}
              >
                <a href="#home">Home</a>
              </li>

              <li
                className={`font-poppins font-medium cursor-pointer text-[12px] hover:text-orange-400 transition-all p-2 ${
                  active === "Services" ? "text-white" : "text-dimWhite"
                } mb-4`}
                onClick={() => {
                  setActive("Services");
                  setIsServicesDropdownVisible(!isServicesDropdownVisible);
                }}
              >
                <a href="#Services" className="flex items-center">
                  Services
                  {services.some(
                    (service) => service.subMenuItems.length > 0
                  ) && (
                    <div className="ml-2 mt-1">
                      <Image
                        src={isServicesDropdownVisible ? arrowUp : arrowdown}
                        alt="arrow icon for dropdown"
                        className={`w-[11px] h-[11px] object-contain ${
                          isServicesDropdownVisible ? "arrow-up" : "arrow-down"
                        }`}
                      />
                    </div>
                  )}
                </a>
              </li>

              {/* Dropdown content for Services */}
              {isServicesDropdownVisible &&
                services.some((service) => service.subMenuItems.length > 0) && (
                  <li>
                    <div className="bg-gray-800  px-2">
                      <ul className="">
                        {services.map((service) => (
                          <li
                            key={service.id}
                            className={`font-poppins font-medium cursor-pointer text-[12px] transition-all p-2 ${
                              active === service.name
                                ? "text-white"
                                : "text-dimWhite"
                            } mb-4`}
                            onClick={() => setActive(service.name)}
                          >
                            <a
                              href={`#${service.name}`}
                              className="flex items-center"
                            >
                              <p className="hover:text-orange-400">
                                {service.name}
                              </p>
                              {service.subMenuItems.length > 0 && (
                                <div className="ml-2 mt-1">
                                  <Image
                                    src={
                                      active === service.name
                                        ? arrowUp
                                        : arrowdown
                                    }
                                    alt="arrow icon for dropdown"
                                    className={`w-[11px] h-[11px] object-contain ${
                                      active === service.name
                                        ? "arrow-up"
                                        : "arrow-down"
                                    }`}
                                  />
                                </div>
                              )}
                            </a>
                            {active === service.name &&
                              service.subMenuItems.length > 0 && (
                                <ul className="space-y-2 mt-2 space-x-0 ">
                                  {service.subMenuItems.map((subService) => (
                                    <li
                                      className="hover:text-orange-400"
                                      key={subService}
                                    >
                                      {subService}
                                    </li>
                                  ))}
                                </ul>
                              )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )}

              <li
                className={`font-poppins font-medium cursor-pointer text-[12px] hover:text-orange-400 transition-all p-2 ${
                  active === "Countries" ? "text-white" : "text-dimWhite"
                } mb-4`}
                onClick={() => {
                  setActive("Countries");
                  setIsCountriesDropdownVisible(!isCountriesDropdownVisible);
                }}
              >
                <a href="#Countries" className="flex items-center">
                  Countries
                  <div className="ml-2 mt-1">
                    <Image
                      src={isCountriesDropdownVisible ? arrowUp : arrowdown}
                      alt="arrow icon for dropdown"
                      className={`w-[11px] h-[11px] object-contain ${
                        isCountriesDropdownVisible ? "arrow-up" : "arrow-down"
                      }`}
                    />
                  </div>
                </a>
              </li>

              <li
                className={`font-poppins font-medium cursor-pointer text-[12px] hover:text-orange-400 transition-all p-2 ${
                  active === "Blogs" ? "text-white" : "text-dimWhite"
                } mb-4`}
                onClick={() => {
                  setActive("Blogs");
                  setIsBlogsDropdownVisible(!isBlogsDropdownVisible);
                }}
              >
                <a href="#Blogs" className="flex items-center">
                  Blogs
                  <div className="ml-2 mt-1">
                    <Image
                      src={isBlogsDropdownVisible ? arrowUp : arrowdown}
                      alt="arrow icon for dropdown"
                      className={`w-[11px] h-[11px] object-contain ${
                        isBlogsDropdownVisible ? "arrow-up" : "arrow-down"
                      }`}
                    />
                  </div>
                </a>
              </li>

              <li
                className={`font-poppins font-medium cursor-pointer text-[12px]   hover:text-orange-400 transition-all p-2 ${
                  active === "about" ? "text-white" : "text-dimWhite"
                } mb-4`}
                onClick={() => {
                  setActive("about");
                }}
              >
                <a href="#about">About us</a>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[12px]   hover:text-orange-400 transition-all p-2 ${
                  active === "About us" ? "text-white" : "text-dimWhite"
                } mb-4`}
                onClick={() => {
                  setActive("Contact us");
                }}
              >
                <a href="#contactus">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
