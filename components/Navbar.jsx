"use client";

import { useState, useEffect } from "react";
import { logo, menu, close, arrowdown, arrowUp } from "../assets";
import { services } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  // Hooks
  const [subDropdownVisibility, setSubDropdownVisibility] = useState({});
  const [isFixedNavbar, setIsFixedNavbar] = useState(false);
  const [active, setActive] = useState("Home");
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [isServicesDropdownVisible, setIsServicesDropdownVisible] =
    useState(false);
  const [isEssaySubDropdownVisible, setIsEssaySubDropdownVisible] =
    useState(false);
  const [isAssignmentSubDropdownVisible, setIsAssignmentSubDropdownVisible] =
    useState(false);
  const [isLawDropdownVisible, setIsLawSubDropdownVisible] = useState(false);

  // functions

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setSidebarToggle(false);
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

  return (
    <section>
      <nav className="w-full bg-gray-800 items-center fixed stick z-30">
        <div
          className={`w-full py-4 flex justify-center bg-gray-800 items-center absolute ${
            isFixedNavbar ? "hidden" : "stick"
          }`}
        >
          <Image
            layout="fixed"
            src={logo}
            alt="hoobank"
            height={90}
            width={90}
          />
        </div>
        {/* Navbar elements */}
        <nav
          className={`w-full h-[40px] bg-gray-800 items-center fixed ${
            isFixedNavbar ? "fixed" : "top-24"
          }`}
        >
          {/* Home */}
          <div className="ml-10 relative hidden normal-screen:flex justify-center">
            <ul className="menu flex me-50 items-center space-x-6 justify-center">
              <li
                className="font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-400 transition-all rounded-lg p-2 mr-10"
                onClick={() => setActive("Home")}
              >
                <button>
                  <a href="#home">Home</a>
                </button>
              </li>

              {/* Services Menu */}
              <li
                className="relative"
                onMouseEnter={() => {
                  // setActive("Services");
                  setIsServicesDropdownVisible(true);
                }}
                onMouseLeave={() => {
                  // setActive("Services");
                  setIsServicesDropdownVisible(false);
                }}
              >
                <button
                  className={`font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-400 transition-all rounded-lg  ${
                    isServicesDropdownVisible ? "text-white" : "text-dimWhite"
                  } mr-10`}
                >
                  <a
                    href="#services"
                    onMouseEnter={() => {
                      setIsServicesDropdownVisible(true);
                    }}
                  >
                    Services
                  </a>
                  <div className="absolute right-5 top-[21px] transform -translate-y-3.5 pl-3">
                    <Image
                      src={isServicesDropdownVisible ? arrowUp : arrowdown}
                      alt="Arrow Icon"
                      className={`w-[12px] h-[12px] object-contain ${
                        isServicesDropdownVisible ? "arrow-up" : "arrow-down"
                      }`}
                    />
                  </div>

                  <div
                    className={`dropdown ${
                      isServicesDropdownVisible
                        ? "dropdown-enter"
                        : "dropdown-exit"
                    } bg-gray-800 text-white font-normal min-w-[220px]   z-20 absolute top-full mt-0`}
                    onMouseEnter={() => {
                      setIsServicesDropdownVisible(true);
                    }}
                    onMouseLeave={() => {
                      setIsServicesDropdownVisible(false);
                      setIsEssaySubDropdownVisible(false);
                      setIsAssignmentSubDropdownVisible(false);
                    }}
                  >
                    {/* Add your dropdown menu items here */}
                    <ul className="space-y-2 mb-2">
                      <li
                        className="hover:bg-slate-700 flex justify-center hover:text-orange-400"
                        onMouseEnter={(e) => {
                          setIsEssaySubDropdownVisible(true);
                          e.stopPropagation();
                        }}
                        onMouseLeave={() => {
                          setIsEssaySubDropdownVisible(false);
                        }}
                      >
                        <a href="#item1" className="flex items-center">
                          Essay
                          <svg
                            class="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </a>
                        {isEssaySubDropdownVisible && (
                          <div className="sub-dropdown">
                            <ul
                              className={` grid grid-cols-2   top-10 bg-gray-800 text-white font-normal space-y-2 min-w-[570px] px-4 py-4 ${
                                isEssaySubDropdownVisible
                                  ? "opacity-100 transition-all delay-700 ease-in-out "
                                  : ""
                              }`}
                            >
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all ease-in-out text-left mt-2 ">
                                <a href="#subitem1">Essay Editing</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Buy an Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Nursing Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Master's Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Law Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">MBA Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">University Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Write My Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Make My Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Do My Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Narrative Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Argumentative Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Expository Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Descriptive Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Custom Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Admission Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Urgent Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Analysis Essay</a>
                              </li>

                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Critical Essay</a>
                              </li>

                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Scholarship Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Student Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Persuasive Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Process Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Literature Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Informal Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Classification Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">Cause and Effect Essay</a>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <a href="#subitem2">
                                  Compare and Contrast Essay
                                </a>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>

                      <li
                        className="hover:bg-slate-700 transition-all flex justify-center hover:text-orange-400"
                        onMouseEnter={(e) => {
                          setIsAssignmentSubDropdownVisible(true);
                          e.stopPropagation();
                        }}
                        onMouseLeave={() => {
                          setIsAssignmentSubDropdownVisible(false);
                        }}
                      >
                        <a href="#item1" className="flex items-center">
                          Assignment
                          <svg
                            class="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </a>
                        {isAssignmentSubDropdownVisible && (
                          <ul className="sub-dropdown top-10 bg-gray-800 text-white font-normal space-y-2 min-w-[240px] pl-4">
                            <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                              <a href="#subitem1">Assignment Writing</a>
                            </li>
                            <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                              <a href="#subitem2">Cookery</a>
                            </li>

                            <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                              <a
                                href="#subitem2"
                                className="flex items-center"
                                onMouseEnter={(e) => {
                                  setIsLawSubDropdownVisible(true);
                                  e.stopPropagation();
                                }}
                                onMouseLeave={() => {
                                  setIsLawSubDropdownVisible(false);
                                }}
                              >
                                Law
                                <svg
                                  class="w-2.5 h-2.5 ml-2"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 6 10"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 9 4-4-4-4"
                                  />
                                </svg>
                              </a>
                              {isLawDropdownVisible && (
                                <ul
                                  className="sub-dropdown top-10 bg-gray-800 text-white font-normal space-y-2 min-w-[240px] pl-4 py-4"
                                  onMouseEnter={(e) => {
                                    setIsLawSubDropdownVisible(true);
                                    e.stopPropagation();
                                  }}
                                  onMouseLeave={() => {
                                    setIsLawSubDropdownVisible(false);
                                  }}
                                >
                                  <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                    <a href="#subitem1">Property Law</a>
                                  </li>
                                  <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                    <a href="#subitem1">Constitutional Law</a>
                                  </li>
                                  <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                    <a href="#subitem1">Administrative Law</a>
                                  </li>
                                  <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                    <a href="#subitem1">Criminal Law</a>
                                  </li>
                                  <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                    <a href="#subitem1">Human Right Law</a>
                                  </li>
                                  <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                    <a href="#subitem1">Civil Law</a>
                                  </li>
                                  <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                    <a href="#subitem1">Tort Law</a>
                                  </li>
                                </ul>
                              )}
                            </li>
                            <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                              <a href="#subitem2">Management</a>
                            </li>
                            <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                              <a href="#subitem2">Managerial Economics</a>
                            </li>
                            <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                              <a href="#subitem2">Managerial Accounting</a>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li className="hover:bg-slate-700 transition-all flex justify-center hover:text-orange-400">
                        <a href="#item1" className="flex items-center">
                          Case Study
                          <svg
                            class="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </a>
                      </li>
                      <li className="hover:bg-slate-700 transition-all flex justify-center hover:text-orange-400">
                        <a href="#item1" className="flex items-center">
                          Coursework
                          <svg
                            class="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </a>
                      </li>
                      <li className="hover:bg-slate-700 transition-all flex justify-center hover:text-orange-400">
                        <a href="#item1" className="flex items-center">
                          Dissertation
                          <svg
                            class="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </a>
                      </li>
                      <li className="hover:bg-slate-700 transition-all flex justify-center hover:text-orange-400">
                        <a href="#item1" className="flex items-center">
                          Report
                          <svg
                            class="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </a>
                      </li>
                      <li className="hover:bg-slate-700 transition-all hover:text-orange-400">
                        <a href="#item4">Proofreading</a>
                      </li>
                      <li className="hover:bg-slate-700 transition-all hover:text-orange-400">
                        <a href="#item4">Referencing Styles</a>
                      </li>
                      <li className="hover:bg-slate-700 transition-all hover:text-orange-400">
                        <a href="#item4">PHD Thesis Writing</a>
                      </li>
                      <li className="hover:bg-slate-700 transition-all hover:text-orange-400">
                        <a href="#item4">Team Paper Writing</a>
                      </li>
                      {/* Add more items here */}
                    </ul>
                  </div>
                </button>
              </li>

              <li className="relative">
                <button
                  className="font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-400 transition-all rounded-lg p-2"
                  onClick={() => setActive("Countries")}
                >
                  <a href="#blogs">Countries</a>
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
          <div className="normal-screen:hidden flex mt-2 z-40 justify-end mx-3">
            <Image
              src={menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setSidebarToggle(!sidebarToggle)}
            />
          </div>
        </nav>
        {/* Sidebar */}
        <div
          className={`${
            sidebarToggle ? "sidebar-visible" : "sidebar-hidden"
          } p-6 bg-gray-800 text-white  right-0 top-0 h-full w-[320px] fixed z-20 transition-all`}
        >
          {/* Close Button inside Sidebar */}
          <div className="flex justify-end  mb-4">
            <Image
              src={close}
              alt="Close menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setSidebarToggle(!sidebarToggle)}
            />
          </div>

          <div className="flex">
            <div
              className={`${
                sidebarToggle ? "sidebar-visible" : "sidebar-hidden"
              } ps-6 bg-gray-800 text-white right-0 top-0 h-full w-[320px] fixed z-20 transition-all`}
            >
              {/* Close Button inside Sidebar */}
              <div className="flex justify-end mb-4">
                <Image
                  src={close}
                  alt="Close menu"
                  className="w-[28px] h-[28px] object-contain cursor-pointer"
                  onClick={() => setSidebarToggle(!sidebarToggle)}
                />
              </div>

              <div className="flex flex-col h-full overflow-y-auto">
                <ul className="list-none mt-10 flex flex-col">
                  <li
                    className={`font-poppins font-medium cursor-pointer text-[12px]   hover:text-orange-400 transition-all p-2 ${
                      active === "Home" ? "text-white" : "text-dimWhite"
                    } mb-4`}
                    onClick={() => {
                      setActive("Home");
                      setSidebarToggle(false); // Close the sidebar when a link is clicked
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
                            src={
                              isServicesDropdownVisible ? arrowUp : arrowdown
                            }
                            alt="Arrow Icon"
                            className={`w-[11px] h-[11px] object-contain ${
                              isServicesDropdownVisible
                                ? "arrow-up"
                                : "arrow-down"
                            }`}
                          />
                        </div>
                      )}
                    </a>
                  </li>

                  {/* Dropdown content for Services */}
                  {isServicesDropdownVisible &&
                    services.some(
                      (service) => service.subMenuItems.length > 0
                    ) && (
                      <li>
                        <div className="bg-gray-800  px-2">
                          <ul className="">
                            {services.map((service) => (
                              <li
                                key={service.id}
                                className={`font-poppins font-medium cursor-pointer text-[12px] p-2 ${
                                  active === service.name
                                    ? "text-white"
                                    : "text-dimWhite"
                                } mb-2 ml-2`}
                                onClick={() => {
                                  setActive(service.name);
                                  setSubDropdownVisibility((prevState) => {
                                    const newState = {};
                                    for (const key in prevState) {
                                      newState[key] = false;
                                    }
                                    newState[service.name] =
                                      !prevState[service.name];
                                    return newState;
                                  });
                                }}
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
                                          subDropdownVisibility[service.name]
                                            ? arrowUp
                                            : arrowdown
                                        }
                                        alt="Arrow Icon"
                                        className={`w-[11px] h-[11px] object-contain ${
                                          subDropdownVisibility[service.name]
                                            ? "arrow-up"
                                            : "arrow-down"
                                        }`}
                                      />
                                    </div>
                                  )}
                                </a>

                                {active === service.name &&
                                  subDropdownVisibility[service.name] && (
                                    <ul className="space-y-2 mt-2 space-x-0 ml-4">
                                      {service.subMenuItems.map(
                                        (subService) => (
                                          <li
                                            className="hover:text-orange-400"
                                            key={subService}
                                          >
                                            {subService}
                                          </li>
                                        )
                                      )}
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
                    }}
                  >
                    <a href="#Countries" className="flex items-center">
                      Countries
                    </a>
                  </li>

                  <li
                    className={`font-poppins font-medium cursor-pointer text-[12px] hover:text-orange-400 transition-all p-2 ${
                      active === "Blogs" ? "text-white" : "text-dimWhite"
                    } mb-4`}
                    onClick={() => {
                      setActive("Blogs");
                    }}
                  >
                    <a href="#Blogs" className="flex items-center">
                      Blogs
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
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
