"use client";

import { useState, useEffect } from "react";
import { logo, menu, close, arrowdown, arrowUp } from "../assets";
import { services } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  // Hooks
  const [nestedDropdownVisibility, setNestedDropdownVisibility] = useState({});
  const [subDropdownVisibility, setSubDropdownVisibility] = useState("");
  const [isFixedNavbar, setIsFixedNavbar] = useState(false);
  const [liActive, setLiActive] = useState("Home");
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [isServicesDropdownVisible, setIsServicesDropdownVisible] =
    useState(false);
  const [isEssaySubDropdownVisible, setIsEssaySubDropdownVisible] =
    useState(false);
  const [isCaseStudySubDropdownVisible, setIsCaseStudySubDropdownVisible] =
    useState(false);
  const [isAssignmentSubDropdownVisible, setIsAssignmentSubDropdownVisible] =
    useState(false);
  const [isLawSubDropdownVisible, setIsLawSubDropdownVisible] = useState(false);
  const [isCourseworkSubDropdownVisible, setisCourseworkSubDropdownVisible] =
    useState(false);
  const [
    isDissertationSubDropdownVisible,
    setisDissertationSubDropdownVisible,
  ] = useState(false);
  const [isReportSubDropdownVisible, setisReportSubDropdownVisible] =
    useState(false);
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
            <ul className="flex me-50 items-center space-x-6 justify-center">
              <li
                className="font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-400 transition-all rounded-lg p-2 mr-10"
                onClick={() => setLiActive("Home")}
              >
                <button>
                  <Link href="/">Home</Link>
                </button>
              </li>

              {/* Services Menu */}
              <li
                className="relative  "
                onMouseEnter={() => {
                  // setLiActive("Services");
                  setIsServicesDropdownVisible(true);
                }}
                onMouseLeave={() => {
                  // setLiActive("Services");
                  setIsServicesDropdownVisible(false);
                }}
              >
                <button
                  className={`font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-400 transition-all rounded-lg  ${
                    isServicesDropdownVisible ? "text-white" : "text-dimWhite"
                  } mr-10`}
                >
                  <Link
                    href="#services"
                    onMouseEnter={() => {
                      setIsServicesDropdownVisible(true);
                    }}
                  >
                    Services
                  </Link>
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
                    } bg-gray-800 text-white font-normal min-w-[220px] z-20 absolute rounded-bl-lg rounded-br-lg  top-full`}
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
                        className="hover:bg-slate-700 flex justify-center mt-2 hover:text-orange-400"
                        onMouseEnter={(e) => {
                          setIsEssaySubDropdownVisible(true);
                          e.stopPropagation();
                        }}
                        onMouseLeave={() => {
                          setIsEssaySubDropdownVisible(false);
                        }}
                      >
                        <Link href="#item1" className="flex items-center">
                          Essay
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </Link>
                        {isEssaySubDropdownVisible && (
                          <div className="sub-dropdown">
                            <ul
                              className={` grid grid-cols-2 pb-2  bg-gray-800 rounded-tr-lg rounded-br-lg rounded-bl-lg text-white font-normal space-y-2 min-w-[570px] px-4 ${
                                isEssaySubDropdownVisible
                                  ? "opacity-100 transition-all delay-700 ease-in-out "
                                  : ""
                              }`}
                            >
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all mt-2 text-left">
                                <Link href="#subitem1">Essay Editing</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Buy an Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Nursing Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Master's Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Law Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">MBA Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">University Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Write My Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Make My Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Do My Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Narrative Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">
                                  Argumentative Essay
                                </Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Expository Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Descriptive Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Custom Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Admission Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Urgent Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Analysis Essay</Link>
                              </li>

                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Critical Essay</Link>
                              </li>

                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Scholarship Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Student Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Persuasive Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Process Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Literature Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Informal Essay</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">
                                  Classification Essay
                                </Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">
                                  Cause and Effect Essay
                                </Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">
                                  Compare and Contrast Essay
                                </Link>
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
                        <Link href="#item1" className="flex items-center">
                          Assignment
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </Link>
                        {isAssignmentSubDropdownVisible && (
                          <div className="sub-dropdown2 absolute left-full">
                            <ul className=" top-10 pt-1 pb-1 bg-gray-800 rounded-tr-lg rounded-br-lg text-white font-normal space-y-2 min-w-[240px] pl-4">
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                <Link href="#subitem1">Assignment Writing</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Cookery</Link>
                              </li>

                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link
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
                                    className="w-2.5 h-2.5 ml-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="m1 9 4-4-4-4"
                                    />
                                  </svg>
                                </Link>
                                {isLawSubDropdownVisible && (
                                  <div className="sub-dropdown3 absolute left-full">
                                    <ul
                                      className=" top-10 bg-gray-800 text-white rounded-tr-lg rounded-br-lg rounded-bl-lg font-normal space-y-2 min-w-[240px] pl-4 py-2"
                                      onMouseEnter={(e) => {
                                        setIsLawSubDropdownVisible(true);
                                        e.stopPropagation();
                                      }}
                                      onMouseLeave={() => {
                                        setIsLawSubDropdownVisible(false);
                                      }}
                                    >
                                      <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                        <Link href="#subitem1">
                                          Property Law
                                        </Link>
                                      </li>
                                      <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                        <Link href="#subitem1">
                                          Constitutional Law
                                        </Link>
                                      </li>
                                      <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                        <Link href="#subitem1">
                                          Administrative Law
                                        </Link>
                                      </li>
                                      <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                        <Link href="#subitem1">
                                          Criminal Law
                                        </Link>
                                      </li>
                                      <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                        <Link href="#subitem1">
                                          Human Right Law
                                        </Link>
                                      </li>
                                      <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                        <Link href="#subitem1">Civil Law</Link>
                                      </li>
                                      <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                        <Link href="#subitem1">Tort Law</Link>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">Management</Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">
                                  Managerial Economics
                                </Link>
                              </li>
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left">
                                <Link href="#subitem2">
                                  Managerial Accounting
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li
                        className="hover:bg-slate-700 transition-all flex justify-center hover:text-orange-400"
                        onMouseEnter={(e) => {
                          setIsCaseStudySubDropdownVisible(true);
                          e.stopPropagation();
                        }}
                        onMouseLeave={() => {
                          setIsCaseStudySubDropdownVisible(false);
                        }}
                      >
                        <Link href="#item1" className="flex items-center">
                          Case Study
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </Link>
                        {isCaseStudySubDropdownVisible && (
                          <div className="sub-dropdown absolute mt-[63px]">
                            <ul className="top-10 bg-gray-800 rounded-tr-lg rounded-br-lg text-white font-normal space-y-2 min-w-[240px] items-center pt-1 pb-2 pl-2">
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                <Link href="#subitem1">Case Study Writing</Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li
                        className="hover:bg-slate-700 transition-all flex justify-center hover:text-orange-400"
                        onMouseEnter={(e) => {
                          setisCourseworkSubDropdownVisible(true);
                          e.stopPropagation();
                        }}
                        onMouseLeave={() => {
                          setisCourseworkSubDropdownVisible(false);
                        }}
                      >
                        <Link href="#item1" className="flex items-center">
                          Coursework
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </Link>
                        {isCourseworkSubDropdownVisible && (
                          <div className="sub-dropdown absolute mt-[92px]">
                            <ul className="top-10 bg-gray-800 rounded-tr-lg rounded-br-lg text-white font-normal space-y-2 min-w-[240px] pb-2 pt-2 pl-2">
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                <Link href="#subitem1">Coursework Writing</Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li
                        className="hover:bg-slate-700 transition-all flex justify-center hover:text-orange-400"
                        onMouseEnter={(e) => {
                          setisDissertationSubDropdownVisible(true);
                          e.stopPropagation();
                        }}
                        onMouseLeave={() => {
                          setisDissertationSubDropdownVisible(false);
                        }}
                      >
                        <Link href="#item1" className="flex items-center">
                          Dissertation
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </Link>
                        {isDissertationSubDropdownVisible && (
                          <div className="sub-dropdown absolute mt-32">
                            <ul className="top-10 bg-gray-800 rounded-tr-lg rounded-br-lg text-white font-normal space-y-2 min-w-[240px] pb-2 pt-2 pl-2">
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                <Link href="#subitem1">
                                  Best Dissertation Writing
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li
                        className="hover:bg-slate-700 transition-all flex justify-center hover:text-orange-400"
                        onMouseEnter={(e) => {
                          setisReportSubDropdownVisible(true);
                          e.stopPropagation();
                        }}
                        onMouseLeave={() => {
                          setisReportSubDropdownVisible(false);
                        }}
                      >
                        <Link href="#item1" className="flex items-center">
                          Report
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </Link>
                        {isReportSubDropdownVisible && (
                          <div className="sub-dropdown absolute mt-40">
                            <ul className="top-10 bg-gray-800 rounded-tr-lg rounded-br-lg text-white font-normal space-y-2 min-w-[240px] pb-2 pt-2 pl-2">
                              <li className="hover:bg-slate-700 hover:text-orange-300 transition-all text-left mt-2 ">
                                <Link href="#subitem1">
                                  Best Report Writing
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li className="hover:bg-slate-700 transition-all hover:text-orange-400">
                        <Link href="#item4">Proofreading</Link>
                      </li>
                      <li className="hover:bg-slate-700 transition-all hover:text-orange-400">
                        <Link href="#item4">Referencing Styles</Link>
                      </li>
                      <li className="hover:bg-slate-700 transition-all hover:text-orange-400">
                        <Link href="#item4">PHD Thesis Writing</Link>
                      </li>
                      <li className="hover:bg-slate-700 transition-all hover:text-orange-400">
                        <Link href="#item4">Team Paper Writing</Link>
                      </li>
                      {/* Add more items here */}
                    </ul>
                  </div>
                </button>
              </li>

              <li className="relative">
                <button
                  className="font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-400 transition-all rounded-lg p-2"
                  onClick={() => setLiActive("Countries")}
                >
                  <Link href="#blogs">Countries</Link>
                </button>
              </li>
              <li className="relative">
                <button
                  className={`font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-400 transition-all rounded-lg p-2 mr-10`}
                  onClick={() => setLiActive("Blogs")}
                >
                  <Link href="#blogs">Blogs</Link>
                </button>
              </li>
              <li className="relative">
                <button
                  className="font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-400 transition-all rounded-lg p-2"
                  onClick={() => setLiActive("About us")}
                >
                  <Link href="#blogs">About us</Link>
                </button>
              </li>
              <li className="relative">
                <button
                  className="font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-400 transition-all rounded-lg p-2"
                  onClick={() => setLiActive("Contact us")}
                >
                  <Link href="#blogs">Contact us</Link>
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
                      liActive === "Home" ? "text-white" : "text-dimWhite"
                    } mb-4`}
                    onClick={() => {
                      setLiActive("Home");
                      setSidebarToggle(false); // Close the sidebar when a link is clicked
                    }}
                  >
                    <a href="#home">Home</a>
                  </li>

                  <li
                    className={`font-poppins font-medium cursor-pointer text-[12px] hover:text-orange-400 transition-all p-2 ${
                      liActive === "Services" ? "text-white" : "text-dimWhite"
                    } mb-4`}
                    onClick={() => {
                      setLiActive("Services");
                      setIsServicesDropdownVisible(!isServicesDropdownVisible);
                    }}
                  >
                    <a href="#Services" className="flex items-center">
                      Services
                      {services.some(
                        (service) =>
                          Object.keys(service.subMenuItems).length > 0
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

                  {isServicesDropdownVisible && (
                    <div className="bg-gray-800  px-2">
                      <ul>
                        {services.map((service) => (
                          <li
                            key={service.id}
                            className={`font-poppins font-medium cursor-pointer text-[12px] p-2 ${
                              liActive === service.name
                                ? "text-white"
                                : "text-dimWhite"
                            } mb-2 ml-2`}
                            onClick={() => {
                              if (liActive === service.name) {
                                // If the clicked li is already active, close the dropdown
                                setLiActive(null);
                                setSubDropdownVisibility({});
                              } else {
                                // If a different li is clicked, set it as active and close others
                                if (liActive) {
                                  // Reset the arrow of the previous active li
                                  setSubDropdownVisibility((prevState) => ({
                                    ...prevState,
                                    [liActive]: false,
                                  }));
                                }
                                setLiActive(service.name);
                                setSubDropdownVisibility((prevState) => ({
                                  ...prevState,
                                  [service.name]: true, // Open the clicked dropdown
                                }));
                              }
                            }}
                          >
                            <a
                              href={`#${service.name}`}
                              className="flex items-center"
                            >
                              <p className="hover:text-orange-400">
                                {service.name}
                              </p>
                              {Object.keys(service.subMenuItems).length > 0 && (
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
                                    } transition-transform duration-300`}
                                  />
                                </div>
                              )}
                            </a>

                            {liActive === service.name &&
                              subDropdownVisibility[service.name] &&
                              Object.keys(service.subMenuItems).length > 0 && (
                                <ul className="space-y-2 mt-4 ml-4 sidebar-subdropdown">
                                  {Object.entries(service.subMenuItems).map(
                                    ([subServiceName, subServiceValue]) => (
                                      <li
                                        className={`hover:text-orange-400 bg-black`}
                                        key={subServiceName}
                                        onClick={(e) => {
                                          e.stopPropagation(); // Prevent the click event from propagating to parent elements
                                          setNestedDropdownVisibility(
                                            (prevState) => ({
                                              ...prevState,
                                              [subServiceName]:
                                                !prevState[subServiceName],
                                            })
                                          );
                                        }}
                                      >
                                        {typeof subServiceValue === "object" &&
                                          subServiceValue !== null && (
                                            <div className="ml-2 mt-1">
                                              <Image
                                                src={
                                                  nestedDropdownVisibility[
                                                    subServiceName
                                                  ]
                                                    ? arrowUp
                                                    : arrowdown
                                                }
                                                alt="Arrow Icon"
                                                className={`w-[11px] h-[11px] object-contain ${
                                                  nestedDropdownVisibility[
                                                    subServiceName
                                                  ]
                                                    ? "arrow-up"
                                                    : "arrow-down"
                                                } transition-transform duration-300`}
                                              />
                                            </div>
                                          )}
                                        {typeof subServiceValue === "object" &&
                                        subServiceValue !== null ? (
                                          <a>{subServiceName}</a>
                                        ) : (
                                          <a href={subServiceValue}>
                                            {subServiceName}
                                          </a>
                                        )}
                                        {/* Check if the current subMenu item has nested items */}
                                        {typeof subServiceValue === "object" &&
                                          subServiceValue !== null && (
                                            <ul
                                              className={`pl-4 space-y-2 mt-2  ${
                                                nestedDropdownVisibility[
                                                  subServiceName
                                                ]
                                                  ? "block"
                                                  : "hidden"
                                              }`}
                                            >
                                              {Object.entries(
                                                subServiceValue
                                              ).map(
                                                ([
                                                  nestedSubServiceName,
                                                  nestedSubServiceHref,
                                                ]) => (
                                                  <li
                                                    className={`hover:text-orange-400 `}
                                                    key={nestedSubServiceName}
                                                    onClick={(e) => {
                                                      e.stopPropagation(); // Prevent the click event from propagating to parent elements
                                                      setNestedDropdownVisibility(
                                                        (prevState) => ({
                                                          ...prevState,
                                                          [nestedSubServiceName]:
                                                            !prevState[
                                                              nestedSubServiceName
                                                            ],
                                                        })
                                                      );
                                                    }}
                                                  >
                                                    <a
                                                      href={
                                                        nestedSubServiceHref
                                                      }
                                                    >
                                                      {nestedSubServiceName}
                                                    </a>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          )}
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <li
                    className={`font-poppins font-medium cursor-pointer text-[12px] hover:text-orange-400 transition-all p-2 ${
                      liActive === "Countries" ? "text-white" : "text-dimWhite"
                    } mb-4`}
                    onClick={() => {
                      setLiActive("Countries");
                    }}
                  >
                    <a href="#Countries" className="flex items-center">
                      Countries
                    </a>
                  </li>

                  <li
                    className={`font-poppins font-medium cursor-pointer text-[12px] hover:text-orange-400 transition-all p-2 ${
                      liActive === "Blogs" ? "text-white" : "text-dimWhite"
                    } mb-4`}
                    onClick={() => {
                      setLiActive("Blogs");
                    }}
                  >
                    <a href="#Blogs" className="flex items-center">
                      Blogs
                    </a>
                  </li>

                  <li
                    className={`font-poppins font-medium cursor-pointer text-[12px]   hover:text-orange-400 transition-all p-2 ${
                      liActive === "about" ? "text-white" : "text-dimWhite"
                    } mb-4`}
                    onClick={() => {
                      setLiActive("about");
                    }}
                  >
                    <a href="#about">About us</a>
                  </li>
                  <li
                    className={`font-poppins font-medium cursor-pointer text-[12px]   hover:text-orange-400 transition-all p-2 ${
                      liActive === "About us" ? "text-white" : "text-dimWhite"
                    } mb-4`}
                    onClick={() => {
                      setLiActive("Contact us");
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
