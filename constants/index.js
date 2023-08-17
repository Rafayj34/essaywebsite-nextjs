// import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";
import { client, rating } from "../assets";
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

export const blogs = [
  {
    id: 1,
    slug: "post1",
    title: "Sample Blog Posts",
    description: "This is the first sample blog post.",
    image: client,
    date: "8/12/2023",
    read: "12",
    author: "John Doe",
  },
  {
    id: 2,
    slug: "post2",
    title: "Blog  2",
    description: "This is the first sample blog post.",
    image: client,
    date: "8/12/2023",
    read: "12",
    author: "John Doe",
  },
  {
    id: 3,
    slug: "post3",
    title: "Working 3",
    description: "This is the first sample blog post.",
    image: client,
    date: "8/12/2023",
    read: "12",
    author: "John Doe",
  },
];
