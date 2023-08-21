// import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";
import { client,reportimg,termpaperimg,casestudyimg } from "../public/assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "About us",
    title: "About Us",
  },
  {
    id: "Services",
    title: "Services",
  },
  {
    id: "Countries",
    title: "Countries",
  },
  {
    id: "Blog",
    title: "Blog",
  },
  {
    id: "Contact Us",
    title: "Contact Us",
  },
];

export const services = [
  {
    id: 1,
    name: "Essay",
    subMenuItems: {"Essay Editing":"#", "Buy an Essay":"#", "Nursing Essay":"#","Master's Essay":"#", "Law Essay":"#", "MBA Essay":"#", "University Essay":"#", "Write My Essay":"#","Make My Essay":"#","Do My Essay":"#","Narrative Essay":"#","Argumentative Essay":"#","Expository Essay":"#","Descriptive Essay":"#","Custom Essay":"#", "Admission Essay":"#","Urgent Essay":"#","Critical Essay":"#","Scholarship Essay":"#","Student Essay":"#","Persuasive Essay":"#","Process Essay":"#","Literature Essay":"#","Informal Essay":"#","Classification Essay":"#", "Cause and Effect Essay":"#","Compare and Contrast Essay":"#"},
  },
  {
    id: 2,
    name: "Assignment",
    isDropdownVisible: false,
    subMenuItems: {"Assignment Writing":"#","Cookery":"#", "Law": {
      // Nested navigation within "Law"
      "Criminal Law": "#",
      "Contract Law": "#",
      // ... other items
    },"Management":"#","Managerial Economics":"#","Managerial Accounting":"#"},
  },
  {
    id: 3,
    name: "Case Study",
    isDropdownVisible: false,
    subMenuItems: {"Best Case Study Writing Service":"#"},
  },
  {
    id: 4,
    name: "Coursework",
    isDropdownVisible: false,
    subMenuItems: {"Best Coursework Writing Service":"#"},
  },
  {
    id: 5,
    name: "Dissertation",
    isDropdownVisible: false,
    subMenuItems: {"Best Dissertation Writing Service":"#"},
  },
  {
    id: 6,
    name: "Report",
    isDropdownVisible: false,
    subMenuItems: {"Best Report Writing Service":"#"},
  },
  {
    id: 7,
    name: "Proofreading",
    isDropdownVisible: false,
    subMenuItems: {},
  },
  {
    id: 8,
    name: "Referencing Styles",
    isDropdownVisible: false,
    subMenuItems: {},
  },
  {
    id: 9,
    name: "PhD Thesis Writing",
    isDropdownVisible: false,
    subMenuItems: {},
  },
  {
    id: 10,
    name: "Term Paper Writing",
    isDropdownVisible: false,
    subMenuItems: {},
  },
];

export const blogData = [
  {
    id: 1,
    slug: "blog1",
    title: "Sample Blog Posts",
    description: "This is the first sample blog post.",
    image: client,
    date: "8/12/2023",
    isoDate: new Date("8/12/2023").toISOString(),
    read: "12",
    author: "John Doe",
  },
  {
    id: 2,
    slug: "blog2",
    title: "Blog 2",
    description: "This is the first sample blog post.",
    image: client,
    date: "8/12/2023",
    isoDate: new Date("12/15/2022").toISOString(),
    read: "12",
    author: "John Doe",
  },
  
];

export const contentData = [
  {
    slug: 'essay-editing-service',
    path: '/essay-editing-service',
    title: 'Top Rated Essay Editing Services by Top UK Nartive Essay Writers | Best Essay Writer',
    description: "Get your Essay edited and proofread by UK's top Essay Editing Service. Our Top Rated Essay Writers provide 110% satisfaction guaranteed.",
    image: client,
    alt: 'essay editing image',
    last_modified: '17/8/2023'
  },
  {
    slug: 'buy-an-essay',
    path: '/buy-an-essay',
    title: 'Buying Essay Editing Service | Best Essay Writer',
    description: 'Essays editing servicess',
    image: client,
    alt: 'other alt',
    last_modified: '17/8/2023'
  },
  {
    slug: 'nursing-essay-writing-service',
    path: '/nursing-essay-writing-service',
    title: 'Get Top Notch Nursing Essay Writing Service | Best Essay Writer',
    description: 'Avail of Our Top Notch Nursing Essay Writing Service. We offer UK-Based safe, and most-demanded service with 100% satisfaction 24/7 Live!',
    image: client,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'masters-essay-writing-service',
    path: '/masters-essay-writing-service',
    title: "Get Master's Essay Writing Service by Top Rated Best Essay Writers | Best Essay Writer",
    description:"Avail Help with Essay form World's Famous Master's Essay Writing Service UK. We provide high quality Academic Essay Writing Service 24*7.",
    image: client,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'best-law-essay-writing-service-uk',
    path: '/best-law-essay-writing-service-uk',
    title: "Best law essay writing service and Help UK | Best Essay Writer",
    description:"Welcome to our law essay writing help service! Our writers will finish your assignment without plagiarised content.",
    image: client,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'mba-essay-writing-service',
    path: '/mba-essay-writing-service',
    title: "Top Notch MBA Essay Writing Service from Best Essay Writer | Best Essay Writer",
    description:"Are you looking for MBA Essay Help? So You are in the right place? We offer Top Notch MBA Essay Writing Services with 100% satisfaction 24*7.",
    image: client,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'best-proofreading-service',
    path: '/best-proofreading-service',
    title: "Best Proofreading Service and Editing Service from Our Experts | Best Essay Writer",
    description:"If you need someone to proofread your dissertation or any other project, our firm can offer you best proofreading service.",
    image: client,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'academic-referencing-styles',
    path: '/academic-referencing-styles',
    title: "What are Academic Referencing Styles? | Best Essay Writer",
    description:"To give credit to other authors, academic referencing styles are utilized in essays, research papers, and dissertations.",
    image: client,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'phd-thesis-writing',
    path: '/phd-thesis-writing',
    title: "PhD Thesis Writing Services | Best Essay Writer",
    description:"Our custom phd thesis writing service offers 100% original, high-quality law thesis to help you get the best grade possible.",
    image: client,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'term-paper-writing',
    path: '/term-paper-writing',
    title: "Get The Best Term Paper Writing Services UK | Best Essay Writer",
    description:"We provide term paper writing services. Our professionals give you complete assistance 24/7 through Live Chat, Email and whatsapp",
    image: client,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'best-report-writing-service',
    path: '/best-report-writing-service',
    title: "Best Report Writing Service at Cheap Prices | Best Essay Writer",
    description:"We provide the top report writing service in town. We have skilled writers on staff who can produce high-quality reports.",
    image: reportimg,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'best-dissertation-writing-service',
    path: '/best-dissertation-writing-service',
    title: "Best Dissertation Writing Service with PhD Experts @30% OFF | Best Essay Writer",
    description:"best dissertation writing service at a reasonable price. Our Ph.D. writers will assist you in completing a dissertation on any subject.",
    image: termpaperimg,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'best-coursework-writing-service',
    path: '/best-coursework-writing-service',
    title: "Best Coursework Writing Service | Best Essay Writer",
    description:"Do you require the best coursework writing service? Don't worry; we provide the best coursework writing service to achieve good grades.",
    image: termpaperimg,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'best-case-study-writing-service',
    path: '/best-case-study-writing-service',
    title: "Best Case Study Writing Service by Top-Notch PhD Experts UK | Best Essay Writer",
    description:"We provide the best case study writing service and assist students in obtaining high grades by submitting high-quality case studies.",
    image: casestudyimg,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'best-assignment-writing-service',
    path: '/best-assignment-writing-service',
    title: "Get The Best Assignment Writing Service by Professional Writers | Best Essay Writer",
    description:"Take advantage of the best assignment writing service provided by experts. Receive our assignment assistance 24/7, with on-time delivery.",
    image: reportimg,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'cookery-assignment-help',
    path: '/cookery-assignment-help',
    title: "Cookery Assignment Help Service from Best Essay Writer | Best Essay Writer",
    description:"Avail the best Cookery Assignment Help Service from Our experts with 110% Guaranteed. We are available round the clock.",
    image: reportimg,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'managerial-economics-assignment-help',
    path: '/managerial-economics-assignment-help',
    title: "Get Worlds Class Managerial Economics Assignment Help with us | Best Essay Writer",
    description:"Worried about your Managerial Economics Assignment? Get Top Notch Managerial Economics Assignment Help with 24*7 Live Chat Support.",
    image: client,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'managerial-accounting-assignment-help',
    path: '/managerial-accounting-assignment-help',
    title: "Get Professional Managerial Accounting Assignment Help | Best Essay Writer",
    description:"Looking for help with your managerial accounting assignments? BestEssayWriter provides expert managerial accounting assignment help services with the help of experts.",
    image: client,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'administrative-law-assignment-help',
    path: '/administrative-law-assignment-help',
    title: "Administrative Law Assignment Help & Writing Service @30% OFF | Best Essay Writer",
    description:"If you worried about your Administrative Law Assignment? So don't worry. Best Administrative Law Assignment Help Service is available 24/7.",
    image: client,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'property-law-assignment-help',
    path: '/property-law-assignment-help',
    title: "Property Law Assignment Help and Writing | Best Essay Writer",
    description:"Worried about your Law Assignments? Now you can get the best Property Law Assignment Help and writing service UK-Based. 24*7 support.",
    image: client,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'constitutional-law-assignment-help',
    path: '/constitutional-law-assignment-help',
    title: "Get the Best Criminal Law Assignment Help from Our Experts. Secure A+ Grades Now! | Best Essay Writer",
    description:"Get the best Criminal Law Assignment Help from our experts. Our team of experienced writers provides top-notch services with original content and on-time delivery.",
    image: client,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
  {
    slug: 'criminal-law-assignment-help',
    path: '/criminal-law-assignment-help',
    title: "Best Criminal Law Assignment Help Services from Our Pro Writers! | Best Essay Writer",
    description:"Get Bestessaywriter.co.uk's criminal law assignment help & improve your grades! Professional writers assist with law topics with original content and no plagiarism.",
    image: client,
    alt: 'other alt',
    last_modified: '23/8/2023'
  },
];


