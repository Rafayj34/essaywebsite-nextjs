"use client";

import { useState, useEffect } from "react";
import { logo, menu, close, arrowdown, arrowUp } from "../public/assets";
import { services } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { whatsapp } from "../public/assets";
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

  const handleDropdownMouseEnter = (...setStateFunctions) => {
    setStateFunctions.forEach((setStateFunction) => {
      setStateFunction(true);
    });
  };

  const handleDropdownMouseLeave = (...setStateFunctions) => {
    setStateFunctions.forEach((setStateFunction) => {
      setStateFunction(false);
    });
  };

  const handleParentDropdownMouseLeave = (setStateFunction) => {
    setStateFunction(false);
  };

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
      <nav className="w-screen bg-gray-800 items-center fixed stick z-30">
        <div
          className={`w-full py-4 flex justify-center bg-gray-800 items-center absolute ${
            isFixedNavbar ? "hidden" : "stick"
          }`}
        >
          <Image src={logo} alt="logo" height={90} width={90} />
          <div className="z-50 absolute right-10">
            <Link
              href="http://wa.me/+447378489100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex bg-green-600 px-3 py-2 hover:bg-green-700 transition-all rounded-xl text-white items-center">
                <Image
                  src={whatsapp}
                  alt="whatsapp"
                  height={25}
                  width={25}
                  className="mr-2"
                />
                +44 7378 489100
              </button>
            </Link>
          </div>
        </div>

        {/* Navbar elements */}
        <nav
          className={`w-full pt-1 h-[40px] bg-gray-800 items-center fixed ${
            isFixedNavbar ? "fixed" : "top-24"
          }`}
        >
          {/* Home */}
          <div className="ml-10 relative hidden normal-screen:flex justify-center">
            <ul className="flex  items-center justify-center">
              <li
                className="font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-600 transition-all rounded-lg  px-5"
                onClick={() => setLiActive("Home")}
              >
                <button>
                  <Link href="/">Home</Link>
                </button>
              </li>

              {/* Services Menu */}
              <li
                className="relative"
                onMouseEnter={() => {
                  handleDropdownMouseEnter(setIsServicesDropdownVisible);
                }}
                onMouseLeave={() => {
                  handleParentDropdownMouseLeave(setIsServicesDropdownVisible);
                }}
              >
                <button
                  className={`font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-600 transition-all rounded-lg  ${
                    isServicesDropdownVisible ? "text-white" : "text-dimWhite"
                  } px-5`}
                >
                  <Link
                    href="#"
                    onMouseEnter={() => {
                      setIsServicesDropdownVisible(true);
                    }}
                  >
                    Services
                  </Link>
                  <div className="absolute right-1 top-[21px] transform -translate-y-3.5 ">
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
                      handleDropdownMouseEnter(setIsServicesDropdownVisible);
                    }}
                    onMouseLeave={() => {
                      handleDropdownMouseLeave(
                        setIsServicesDropdownVisible,
                        setIsEssaySubDropdownVisible,
                        setIsAssignmentSubDropdownVisible
                      );
                    }}
                  >
                    {/* Add your dropdown menu items here */}
                    <ul className="pb-2">
                      <li
                        className="flex justify-center py-2 hover:text-orange-600"
                        onMouseEnter={(e) => {
                          handleDropdownMouseEnter(
                            setIsEssaySubDropdownVisible
                          );
                          e.stopPropagation();
                        }}
                        onMouseLeave={() => {
                          handleDropdownMouseLeave(
                            setIsEssaySubDropdownVisible
                          );
                        }}
                      >
                        <Link href="#" className="flex items-center">
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
                              className={` grid grid-cols-2 pb-2  bg-gray-800 rounded-tr-lg rounded-br-lg rounded-bl-lg text-white font-normal min-w-[570px] px-4 ${
                                isEssaySubDropdownVisible
                                  ? "opacity-100 transition-all delay-700 ease-in-out "
                                  : ""
                              }`}
                            >
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="/essay-editing-service">
                                  Essay Editing
                                </Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2  text-left">
                                <Link href="/essay-editing-service">
                                  Buy an Essay
                                </Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2  text-left">
                                <Link href="/nursing-essay-writing-service">
                                  Nursing Essay
                                </Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2  text-left">
                                <Link href="/masters-essay-writing-service">
                                  Master&apos;s Essay
                                </Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2  text-left">
                                <Link href="/best-law-essay-writing-service-uk">
                                  Law Essay
                                </Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="/mba-essay-writing-service">
                                  MBA Essay
                                </Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">University Essay</Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Write My Essay</Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Make My Essay</Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Do My Essay</Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Narrative Essay</Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">
                                  Argumentative Essay
                                </Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Expository Essay</Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Descriptive Essay</Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Custom Essay</Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Admission Essay</Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Urgent Essay</Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Analysis Essay</Link>
                              </li>

                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Critical Essay</Link>
                              </li>

                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Scholarship Essay</Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Student Essay</Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Persuasive Essay</Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Process Essay</Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Literature Essay</Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">Informal Essay</Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">
                                  Classification Essay
                                </Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">
                                  Cause and Effect Essay
                                </Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="#subitem2">
                                  Compare and Contrast Essay
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>

                      <li
                        className="py-2   transition-all flex justify-center hover:text-orange-600"
                        onMouseEnter={(e) => {
                          handleDropdownMouseEnter(
                            setIsAssignmentSubDropdownVisible
                          );

                          e.stopPropagation();
                        }}
                        onMouseLeave={() => {
                          handleDropdownMouseLeave(
                            setIsAssignmentSubDropdownVisible
                          );
                        }}
                      >
                        <Link href="#" className="flex items-center">
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
                          <div className="sub-dropdown2 top-9">
                            <ul className=" pt-1 pb-1 bg-gray-800 rounded-tr-lg rounded-br-lg text-white font-normal min-w-[240px] pl-4">
                              <li className="  hover:text-orange-600 transition-all text-left pt-2 ">
                                <Link href="/best-assignment-writing-service">
                                  Assignment Writing
                                </Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all text-left pt-2 ">
                                <Link href="/cookery-assignment-help">
                                  Cookery
                                </Link>
                              </li>

                              <li
                                className="  hover:text-orange-600 transition-all pt-2 text-left"
                                onMouseEnter={(e) => {
                                  handleDropdownMouseEnter(
                                    setIsLawSubDropdownVisible
                                  );

                                  e.stopPropagation();
                                }}
                                onMouseLeave={() => {
                                  handleDropdownMouseLeave(
                                    setIsLawSubDropdownVisible
                                  );
                                }}
                              >
                                <Link
                                  href="/law-assignment-help"
                                  className="flex items-center"
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
                                      className=" top-10 bg-gray-800 text-white rounded-tr-lg rounded-br-lg rounded-bl-lg font-normal min-w-[240px] pl-4 py-2"
                                      onMouseEnter={(e) => {
                                        handleDropdownMouseEnter(
                                          setIsLawSubDropdownVisible
                                        );

                                        e.stopPropagation();
                                      }}
                                      onMouseLeave={() => {
                                        handleDropdownMouseLeave(
                                          setIsLawSubDropdownVisible
                                        );
                                      }}
                                    >
                                      <li className="  hover:text-orange-600 transition-all text-left pt-2 ">
                                        <Link href="/property-law-assignment-help">
                                          Property Law
                                        </Link>
                                      </li>
                                      <li className="  hover:text-orange-600 transition-all text-left pt-2 ">
                                        <Link href="/constitutional-law-assignment-help">
                                          Constitutional Law
                                        </Link>
                                      </li>
                                      <li className="  hover:text-orange-600 transition-all text-left pt-2 ">
                                        <Link href="/administrative-law-assignment-help">
                                          Administrative Law
                                        </Link>
                                      </li>
                                      <li className="  hover:text-orange-600 transition-all text-left pt-2 ">
                                        <Link href="/criminal-law-assignment-help">
                                          Criminal Law
                                        </Link>
                                      </li>
                                      <li className="  hover:text-orange-600 transition-all text-left pt-2 ">
                                        <Link href="/human-right-law-assignment-help">
                                          Human Right Law
                                        </Link>
                                      </li>
                                      <li className="  hover:text-orange-600 transition-all text-left pt-2 ">
                                        <Link href="/civil-law-assignment-help">
                                          Civil Law
                                        </Link>
                                      </li>
                                      <li className="  hover:text-orange-600 transition-all text-left pt-2 ">
                                        <Link href="/tort-law-assignment-help">
                                          Tort Law
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </li>
                              <li className="  hover:text-orange-600 transition-all text-left pt-2 ">
                                <Link href="/management-assignment-help">
                                  Management
                                </Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="/managerial-economics-assignment-help">
                                  Managerial Economics
                                </Link>
                              </li>
                              <li className="  hover:text-orange-600 transition-all pt-2 text-left">
                                <Link href="/managerial-accounting-assignment-help">
                                  Managerial Accounting
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li
                        className="  transition-all flex justify-center py-2 hover:text-orange-600"
                        onMouseEnter={(e) => {
                          handleDropdownMouseEnter(
                            setIsCaseStudySubDropdownVisible
                          );

                          e.stopPropagation();
                        }}
                        onMouseLeave={() => {
                          handleDropdownMouseLeave(
                            setIsCaseStudySubDropdownVisible
                          );
                        }}
                      >
                        <Link href="#" className="flex items-center">
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
                          <div className="sub-dropdown2 top-4 mt-[63px]">
                            <ul className=" bg-gray-800 rounded-tr-lg rounded-br-lg text-white font-normal min-w-[240px] items-center py-2 pl-2">
                              <li className="  hover:text-orange-600 transition-all text-left py-2 ">
                                <Link href="/best-case-study-writing-service">
                                  Case Study Writing
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li
                        className="  transition-all flex justify-center hover:text-orange-600 py-2"
                        onMouseEnter={(e) => {
                          handleDropdownMouseEnter(
                            setisCourseworkSubDropdownVisible
                          );
                          e.stopPropagation();
                        }}
                        onMouseLeave={() => {
                          handleDropdownMouseLeave(
                            setisCourseworkSubDropdownVisible
                          );
                        }}
                      >
                        <Link
                          href="/best-coursework-writing-service"
                          className="flex items-center"
                        >
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
                          <div className="sub-dropdown2 top-6 mt-[92px]">
                            <ul className=" bg-gray-800 rounded-tr-lg rounded-br-lg text-white font-normal  min-w-[240px] py-2 pl-2">
                              <li className="  hover:text-orange-600 transition-all text-left py-2  ">
                                <Link href="/best-coursework-writing-service">
                                  Coursework Writing
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li
                        className="  transition-all flex justify-center py-2 hover:text-orange-600"
                        onMouseEnter={(e) => {
                          handleDropdownMouseEnter(
                            setisDissertationSubDropdownVisible
                          );

                          e.stopPropagation();
                        }}
                        onMouseLeave={() => {
                          handleDropdownMouseLeave(
                            setisDissertationSubDropdownVisible
                          );
                        }}
                      >
                        <Link href="#" className="flex items-center">
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
                          <div className="sub-dropdown2 top-7 mt-32">
                            <ul className=" bg-gray-800 rounded-tr-lg rounded-br-lg text-white font-normal min-w-[240px] pb-2 pt-2 pl-2">
                              <li className="  hover:text-orange-600 transition-all text-left py-2  ">
                                <Link href="/best-dissertation-writing-service">
                                  Best Dissertation Writing
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li
                        className="  transition-all flex justify-center py-2 hover:text-orange-600"
                        onMouseEnter={(e) => {
                          handleDropdownMouseEnter(
                            setisReportSubDropdownVisible
                          );

                          e.stopPropagation();
                        }}
                        onMouseLeave={() => {
                          handleDropdownMouseLeave(
                            setisReportSubDropdownVisible
                          );
                        }}
                      >
                        <Link href="#" className="flex items-center">
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
                          <div className="sub-dropdown2 top-10 mt-40">
                            <ul className=" bg-gray-800 rounded-tr-lg rounded-br-lg text-white font-normal  min-w-[240px] pb-2 pt-2 pl-2">
                              <li className="  hover:text-orange-600 transition-all text-left py-2 ">
                                <Link href="/best-report-writing-service">
                                  Best Report Writing
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li className="  transition-all hover:text-orange-600 py-2">
                        <Link href="/best-proofreading-service">
                          Proofreading
                        </Link>
                      </li>
                      <li className="  transition-all hover:text-orange-600 py-2">
                        <Link href="/academic-referencing-styles">
                          Referencing Styles
                        </Link>
                      </li>
                      <li className="  transition-all hover:text-orange-600 py-2">
                        <Link href="/phd-thesis-writing">
                          PHD Thesis Writing
                        </Link>
                      </li>
                      <li className="  transition-all hover:text-orange-600 py-2">
                        <Link href="/term-paper-writing">
                          Team Paper Writing
                        </Link>
                      </li>
                      {/* Add more items here */}
                    </ul>
                  </div>
                </button>
              </li>

              <li className="relative">
                <button
                  className={`font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-600 transition-all rounded-lg px-5 `}
                  onClick={() => setLiActive("Blog")}
                >
                  <Link href="blog">Blogs</Link>
                </button>
              </li>
              <li className="relative">
                <button
                  className="font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-600 transition-all rounded-lg px-5"
                  onClick={() => setLiActive("About us")}
                >
                  <Link href="reviews">Reviews</Link>
                </button>
              </li>
              <li className="relative">
                <button
                  className="font-poppins text-white font-semibold cursor-pointer text-[17px] hover:text-orange-600 transition-all rounded-lg px-5"
                  onClick={() => setLiActive("Contact us")}
                >
                  <Link href="contact">Contact us</Link>
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
                    className={`font-poppins font-medium cursor-pointer text-[12px]   hover:text-orange-600 transition-all p-2 ${
                      liActive === "Home" ? "text-white" : "text-dimWhite"
                    } mb-4`}
                    onClick={() => {
                      setLiActive("Home");
                      setSidebarToggle(false); // Close the sidebar when a link is clicked
                    }}
                  >
                    <Link href="#home">Home</Link>
                  </li>

                  <li
                    className={`font-poppins font-medium cursor-pointer text-[12px] hover:text-orange-600 transition-all p-2 ${
                      liActive === "Services" ? "text-white" : "text-dimWhite"
                    } mb-4`}
                    onClick={() => {
                      setLiActive("Services");
                      setIsServicesDropdownVisible(!isServicesDropdownVisible);
                    }}
                  >
                    <Link href="#Services" className="flex items-center">
                      Services
                      <div className="ml-2 mt-1">
                        <Image
                          src={isServicesDropdownVisible ? arrowUp : arrowdown}
                          alt="Arrow Icon"
                          className={`w-[11px] h-[11px] object-contain ${
                            isServicesDropdownVisible
                              ? "arrow-up"
                              : "arrow-down"
                          }`}
                        />
                      </div>
                    </Link>
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
                            <Link
                              href={`${service.url}`}
                              className="flex items-center"
                            >
                              <p className="hover:text-orange-600">
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
                            </Link>

                            {liActive === service.name &&
                              subDropdownVisibility[service.name] &&
                              Object.keys(service.subMenuItems).length > 0 && (
                                <ul className="space-y-2 mt-4 ml-4 sidebar-subdropdown ">
                                  {Object.entries(service.subMenuItems).map(
                                    ([subServiceName, subServiceValue]) => (
                                      <li
                                        key={subServiceName}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setNestedDropdownVisibility(
                                            (prevState) => ({
                                              ...prevState,
                                              [subServiceName]:
                                                !prevState[subServiceName],
                                            })
                                          );
                                        }}
                                      >
                                        <div
                                          className={`flex items-center hover:text-orange-600`}
                                        >
                                          <Link href={subServiceValue}>
                                            {subServiceName}
                                          </Link>
                                          {typeof subServiceValue ===
                                            "object" &&
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
                                        </div>
                                        {typeof subServiceValue === "object" &&
                                          subServiceValue !== null && (
                                            <ul
                                              className={`pl-4 space-y-2 mt-2 sidebar-subdropdown ${
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
                                                    key={nestedSubServiceName}
                                                    onClick={(e) => {
                                                      e.stopPropagation();
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
                                                    <Link
                                                      href={
                                                        nestedSubServiceHref
                                                      }
                                                    >
                                                      {nestedSubServiceName}
                                                    </Link>
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
                    className={`font-poppins font-medium cursor-pointer text-[12px] hover:text-orange-600 transition-all p-2 ${
                      liActive === "Reviews" ? "text-white" : "text-dimWhite"
                    } mb-4`}
                    onClick={() => {
                      setLiActive("Reviews");
                    }}
                  >
                    <Link href="/review" className="flex items-center">
                      Reviews
                    </Link>
                  </li>

                  <li
                    className={`font-poppins font-medium cursor-pointer text-[12px] hover:text-orange-600 transition-all p-2 ${
                      liActive === "Blogs" ? "text-white" : "text-dimWhite"
                    } mb-4`}
                    onClick={() => {
                      setLiActive("Blogs");
                    }}
                  >
                    <Link href="#Blogs" className="flex items-center">
                      Blogs
                    </Link>
                  </li>

                  <li
                    className={`font-poppins font-medium cursor-pointer text-[12px]   hover:text-orange-600 transition-all p-2 ${
                      liActive === "About us" ? "text-white" : "text-dimWhite"
                    } mb-4`}
                    onClick={() => {
                      setLiActive("Contact us");
                    }}
                  >
                    <Link href="#contactus">Contact us</Link>
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
