// import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";
import { client, rating } from "../public/assets";
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
    title: 'Top Rated Essay Editing Services by Top UK Nartive Essay Writers',
    description: "Get your Essay edited and proofread by UK's top Essay Editing Service. Our Top Rated Essay Writers provide 110% satisfaction guaranteed.",
    image: client,
    alt: 'essay editing image',
    last_modified: '17/8/2023'
  },
  {
    slug: 'buy-an-essay',
    title: 'Buying Essay Editing Service',
    description: 'Essay editing services',
    image: client,
    alt: 'other alt',
    last_modified: '17/8/2023'
  },
];

