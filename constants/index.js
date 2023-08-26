// import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";
import { logo2,reportimg,termpaperimg,casestudyimg, client } from "../public/assets";

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
    subMenuItems: {"Essay Editing":"/essay-editing-service", "Buy an Essay":"/buy-an-essay", "Nursing Essay":"/nursing-essay-writing-service","Master's Essay":"/masters-essay-writing-service", "Law Essay":"/best-law-essay-writing-service-uk", "MBA Essay":"/mba-essay-writing-service", "University Essay":"/", "Write My Essay":"/","Make My Essay":"/","Do My Essay":"/","Narrative Essay":"/","Argumentative Essay":"/","Expository Essay":"/","Descriptive Essay":"/","Custom Essay":"/", "Admission Essay":"/","Urgent Essay":"/","Critical Essay":"/","Scholarship Essay":"/","Student Essay":"/","Persuasive Essay":"/","Process Essay":"/","Literature Essay":"/","Informal Essay":"/","Classification Essay":"/", "Cause and Effect Essay":"/","Compare and Contrast Essay":"/"},
    url: "#"
  },
  {
    id: 2,
    name: "Assignment",
    isDropdownVisible: false,
    subMenuItems: {"Assignment Writing":"/best-assignment-writing-service","Cookery":"/cookery-assignment-help", "Law": {
      "Property Law": "/property-law-assignment-help",
      "Constitutional Law": "/constitutional-law-assignment-help",
      "Administrative Law": "/administrative-law-assignment-help",
      "Criminal Law": "/criminal-law-assignment-help",
      "Human Rights Law": "/human-right-law-assignment-help",
      "Civil Law": "/civil-law-assignment-help",
      "Tort Law": "/tort-law-assignment-help",
      // ... other items
    },"Management":"/management-assignment-help","Managerial Economics":"/managerial-economics-assignment-help","Managerial Accounting":"/managerial-accounting-assignment-help"},
    url: "#"
  },
  {
    id: 3,
    name: "Case Study",
    isDropdownVisible: false,
    subMenuItems: {"Best Case Study Writing Service":"/best-case-study-writing-service"},
    url: "#"
  },
  {
    id: 4,
    name: "Coursework",
    isDropdownVisible: false,
    subMenuItems: {"Best Coursework Writing Service":"/best-coursework-writing-service"},
    url: "#"
  },
  {
    id: 5,
    name: "Dissertation",
    isDropdownVisible: false,
    subMenuItems: {"Best Dissertation Writing Service":"/best-dissertation-writing-service"},
    url: "#"
  },
  {
    id: 6,
    name: "Report",
    isDropdownVisible: false,
    subMenuItems: {"Best Report Writing Service":"/best-report-writing-service"},
    url: "#"
  },
  {
    id: 7,
    name: "Proofreading",
    isDropdownVisible: false,
    subMenuItems: {},
    url: "/best-proofreading-service",
   
  },
  {
    id: 8,
    name: "Referencing Styles",
    isDropdownVisible: false,
    subMenuItems: {},
    url: "/academic-referencing-styles"
  },
  {
    id: 9,
    name: "PhD Thesis Writing",
    isDropdownVisible: false,
    subMenuItems: {},
    url: "/phd-thesis-writing"
  },
  {
    id: 10,
    name: "Term Paper Writing",
    isDropdownVisible: false,
    subMenuItems: {},
    url:"/term-paper-writing"
  },
];

export const blogData = [
  {
    id: 1,
    slug: "importance-of-proofreading-and-editing",
    title: "The Importance of Proofreading and Editing in Academic Writing",
    description: "The importance of proofreading and editing in academic writing. Eliminate errors, improve quality and readability, and obtain better grades.",
    image: client,
    date: "8/12/2023",
    isoDate: new Date("8/12/2023").toISOString(),
    read: "12",
    author: "Admin",
    openGraph: {
    title:"The Importance of Proofreading and Editing in Academic Writing",
    description: "The importance of proofreading and editing in academic writing. Eliminate errors, improve quality and readability, and obtain better grades.",
    images: [
      {
        url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/03/Importance-of-Editing-Proofreading-with-PhD-Expert-rebecca-James.jpg',
        width: 1200,
        height: 628,
        type: 'image/jpeg'
      }
    ],
    locale: 'en_US',
    type: 'article',
        publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
    site_name: "Best Essay Writer",
    url: 'https://scriptersltd.com/bestessaywriters/blog/importance-of-proofreading-and-editing/'
  },
  },
  {
    id: 2,
    slug: "best-assignment-writing-service",
    title: "The Importance of Proofreading and Editing in Academic Writing",
    description: "The importance of proofreading and editing in academic writing. Eliminate errors, improve quality and readability, and obtain better grades.",
    image: client,
    date: "8/12/2023",
    isoDate: new Date("8/12/2023").toISOString(),
    read: "12",
    author: "Admin",
    openGraph: {
    title:"The Importance of Proofreading and Editing in Academic Writing",
    description: "The importance of proofreading and editing in academic writing. Eliminate errors, improve quality and readability, and obtain better grades.",
    images: [
      {
        url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/03/Importance-of-Editing-Proofreading-with-PhD-Expert-rebecca-James.jpg',
        width: 1200,
        height: 628,
        type: 'image/jpeg'
      }
    ],
    locale: 'en_US',
    type: 'article',
        publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
    site_name: "Best Essay Writer",
    url: 'https://scriptersltd.com/bestessaywriters/blog/importance-of-proofreading-and-editing/'
  },
  },
  {
    id: 3,
    slug: "administrative-law-assignment-help",
    title: "The Importance of Proofreading and Editing in Academic Writing",
    description: "The importance of proofreading and editing in academic writing. Eliminate errors, improve quality and readability, and obtain better grades.",
    image: client,
    date: "8/12/2023",
    isoDate: new Date("8/12/2023").toISOString(),
    read: "12",
    author: "Admin",
    openGraph: {
    title:"The Importance of Proofreading and Editing in Academic Writing",
    description: "The importance of proofreading and editing in academic writing. Eliminate errors, improve quality and readability, and obtain better grades.",
    images: [
      {
        url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/03/Importance-of-Editing-Proofreading-with-PhD-Expert-rebecca-James.jpg',
        width: 1200,
        height: 628,
        type: 'image/jpeg'
      }
    ],
    locale: 'en_US',
    type: 'article',
        publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
    site_name: "Best Essay Writer",
    url: 'https://scriptersltd.com/bestessaywriters/blog/importance-of-proofreading-and-editing/'
  },
  },
  {
    id: 4,
    slug: "academic-referencing-styles",
    title: "The Importance of Proofreading and Editing in Academic Writing",
    description: "The importance of proofreading and editing in academic writing. Eliminate errors, improve quality and readability, and obtain better grades.",
    image: client,
    date: "8/12/2023",
    isoDate: new Date("8/12/2023").toISOString(),
    read: "12",
    author: "Admin",
    openGraph: {
    title:"The Importance of Proofreading and Editing in Academic Writing",
    description: "The importance of proofreading and editing in academic writing. Eliminate errors, improve quality and readability, and obtain better grades.",
    images: [
      {
        url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/03/Importance-of-Editing-Proofreading-with-PhD-Expert-rebecca-James.jpg',
        width: 1200,
        height: 628,
        type: 'image/jpeg'
      }
    ],
    locale: 'en_US',
    type: 'article',
        publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
    site_name: "Best Essay Writer",
    url: 'https://scriptersltd.com/bestessaywriters/blog/importance-of-proofreading-and-editing/'
  },
  },
  
];

export const contentData = [
  {
    slug: 'essay-editing-service',
    path: '/essay-editing-service',
    title: 'Top Rated Essay Editing Services by Top UK Nartive Essay Writers | Best Essay Writer',
    description: "Get your Essay edited and proofread by UK's top Essay Editing Service. Our Top Rated Essay Writers provide 110% satisfaction guaranteed.",
    image: logo2,
    alt: 'essay editing image',
    last_modified: '17/8/2023',
    openGraph: {
      title:"Top Rated Essay Editing Services by Top UK Nartive Essay Writers",
      description: "Get your Essay edited and proofread by UK's top Essay Editing Service. Our Top Rated Essay Writers provide 110% satisfaction guaranteed.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/essay-editing-service/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/Get-Essay-Editing-Service.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'buy-an-essay',
    path: '/buy-an-essay',
    title: 'Buying Essay Editing Service | Best Essay Writer',
    description: 'Essays editing servicess',
    image: logo2,
    alt: 'main image for content section',
    last_modified: '17/8/2023',
    openGraph: {
      title:"Buy an Essay Online from Top Rated Service | Best Essay Writer",
      description: "Looking to buy an essay? We offer the most reliable and safe essay and assignment services for all academic levels. With the best essay writers.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/buy-an-essay/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/Buy-an-Essay-Online-with-Top-Rated-Exprts.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'nursing-essay-writing-service',
    path: '/nursing-essay-writing-service',
    title: 'Get Top Notch Nursing Essay Writing Service | Best Essay Writer',
    description: 'Avail of Our Top Notch Nursing Essay Writing Service. We offer UK-Based safe, and most-demanded service with 100% satisfaction 24/7 Live!',
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Get Top Notch Nursing Essay Writing Service | Best Essay Writer",
      description: "Avail of Our Top Notch Nursing Essay Writing Service. We offer UK-Based safe, and most-demanded service with 100% satisfaction 24/7 Live!",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/nursing-essay-writing-service/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/Nursing-Essay-Writing-Service.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'masters-essay-writing-service',
    path: '/masters-essay-writing-service',
    title: "Get Master's Essay Writing Service by Top Rated Best Essay Writers | Best Essay Writer",
    description:"Avail Help with Essay form World's Famous Master's Essay Writing Service UK. We provide high quality Academic Essay Writing Service 24/7.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Get Master's Essay Writing Service by Top Rated Best Essay Writers",
      description: "Avail Help with Essay form World's Famous Master's Essay Writing Service UK. We provide high quality Academic Essay Writing Service 24/7.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/masters-essay-writing-service/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/Avail-30-OFF-best-essay-writer-1024x256.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'best-law-essay-writing-service-uk',
    path: '/best-law-essay-writing-service-uk',
    title: "Best law essay writing service and Help UK | Best Essay Writer",
    description:"Welcome to our law essay writing help service! Our writers will finish your assignment without plagiarised content.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Best law essay writing service and Help UK | Best Essay Writer",
      description: "Welcome to our law essay writing help service! Our writers will finish your assignment without plagiarised content.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/masters-essay-writing-service/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2022/09/Law-Essay-Help.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'mba-essay-writing-service',
    path: '/mba-essay-writing-service',
    title: "Top Notch MBA Essay Writing Service from Best Essay Writer | Best Essay Writer",
    description:"Are you looking for MBA Essay Help? So You are in the right place? We offer Top Notch MBA Essay Writing Services with 100% satisfaction 24/7.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Top Notch MBA Essay Writing Service from Best Essay Writer | Best Essay Writer",
      description: "Are you looking for MBA Essay Help? So You are in the right place? We offer Top Notch MBA Essay Writing Services with 100% satisfaction 24*7.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/mba-essay-writing-service/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2022/12/big-discount-offer-1024x256.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'best-proofreading-service',
    path: '/best-proofreading-service',
    title: "Best Proofreading Service and Editing Service from Our Experts | Best Essay Writer",
    description:"If you need someone to proofread your dissertation or any other project, our firm can offer you best proofreading service.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Best Proofreading Service and Editing Service from Our Experts | Best Essay Writer",
      description: "If you need someone to proofread your dissertation or any other project, our firm can offer you best proofreading service.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/best-proofreading-service/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2022/02/Best-Proofreading-Service.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'academic-referencing-styles',
    path: '/academic-referencing-styles',
    title: "What are Academic Referencing Styles? | Best Essay Writer",
    description:"To give credit to other authors, academic referencing styles are utilized in essays, research papers, and dissertations.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"What are Academic Referencing Styles? | Best Essay Writer",
      description: "To give credit to other authors, academic referencing styles are utilized in essays, research papers, and dissertations.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/academic-referencing-styles/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2022/03/Academic-Referencing-Styles.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'phd-thesis-writing',
    path: '/phd-thesis-writing',
    title: "PhD Thesis Writing Services | Best Essay Writer",
    description:"Our custom phd thesis writing service offers 100% original, high-quality law thesis to help you get the best grade possible.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"PhD Thesis Writing Services | Best Essay Writer",
      description: "Our custom phd thesis writing service offers 100% original, high-quality law thesis to help you get the best grade possible.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/phd-thesis-writing/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/03/Dr-Hazel-proifle-she-is-phd-in-philosophy-in-nursing.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'term-paper-writing',
    path: '/term-paper-writing',
    title: "Get The Best Term Paper Writing Services UK | Best Essay Writer",
    description:"We provide term paper writing services. Our professionals give you complete assistance 24/7 through Live Chat, Email and whatsapp",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Get The Best Term Paper Writing Services UK | Best Essay Writer",
      description: "We provide term paper writing services. Our professionals give you complete assistance 24/7 through Live Chat, Email and whatsapp",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/term-paper-writing/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2022/04/Term-Paper-Writing.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'best-report-writing-service',
    path: '/best-report-writing-service',
    title: "Best Report Writing Service at Cheap Prices | Best Essay Writer",
    description:"We provide the top report writing service in town. We have skilled writers on staff who can produce high-quality reports.",
    image: reportimg,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Best Report Writing Service at Cheap Prices | Best Essay Writer",
      description: "We provide the top report writing service in town. We have skilled writers on staff who can produce high-quality reports.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/best-report-writing-service/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2022/02/Best-Report-Writing-Service.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'best-dissertation-writing-service',
    path: '/best-dissertation-writing-service',
    title: "Best Dissertation Writing Service with PhD Experts @30% OFF | Best Essay Writer",
    description:"best dissertation writing service at a reasonable price. Our Ph.D. writers will assist you in completing a dissertation on any subject.",
    image: termpaperimg,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Best Dissertation Writing Service with PhD Experts @ 30% OFF | Best Essay Writer",
      description: "best dissertation writing service at a reasonable price. Our Ph.D. writers will assist you in completing a dissertation on any subject.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/best-dissertation-writing-service/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2022/02/Best-Dissertation-Writing-Service.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'best-coursework-writing-service',
    path: '/best-coursework-writing-service',
    title: "Best Coursework Writing Service | Best Essay Writer",
    description:"Do you require the best coursework writing service? Don't worry; we provide the best coursework writing service to achieve good grades.",
    image: termpaperimg,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Best Coursework Writing Service | Best Essay Writer",
      description: "Do you require the best coursework writing service? Don't worry; we provide the best coursework writing service to achieve good grades.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/best-coursework-writing-service/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2022/02/Best-Coursework-Writing-Service.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'best-case-study-writing-service',
    path: '/best-case-study-writing-service',
    title: "Best Case Study Writing Service by Top-Notch PhD Experts UK | Best Essay Writer",
    description:"We provide the best case study writing service and assist students in obtaining high grades by submitting high-quality case studies.",
    image: casestudyimg,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Best Case Study Writing Service by Top-Notch PhD Experts UK | Best Essay Writer",
      description: "We provide the best case study writing service and assist students in obtaining high grades by submitting high-quality case studies.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/best-case-study-writing-service/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2022/02/Best-Case-Study-Writing-Service.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'best-assignment-writing-service',
    path: '/best-assignment-writing-service',
    title: "Get The Best Assignment Writing Service by Professional Writers | Best Essay Writer",
    description:"Take advantage of the best assignment writing service provided by experts. Receive our assignment assistance 24/7, with on-time delivery.",
    image: reportimg,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Get The Best Assignment Writing Service by Professional Writers | Best Essay Writer",
      description: "Take advantage of the best assignment writing service provided by experts. Receive our assignment assistance 24/7, with on-time delivery.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/best-assignment-writing-service/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2022/02/Best-Assignment-Writing-Service.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'cookery-assignment-help',
    path: '/cookery-assignment-help',
    title: "Cookery Assignment Help Service from Best Essay Writer | Best Essay Writer",
    description:"Avail the best Cookery Assignment Help Service from Our experts with 110% Guaranteed. We are available round the clock.",
    image: reportimg,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Cookery Assignment Help Service from Best Essay Writer",
      description: "Avail the best Cookery Assignment Help Service from Our experts with 110% Guaranteed. We are available round the clock.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/cookery-assignment-help/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/Cookery-Assignment-Help.webp',
          width: 1200,
          height: 628,
          type: 'image/webp'
        }
      ],
    },
  },
  {
    slug: 'managerial-economics-assignment-help',
    path: '/managerial-economics-assignment-help',
    title: "Get Worlds Class Managerial Economics Assignment Help with us | Best Essay Writer",
    description:"Worried about your Managerial Economics Assignment? Get Top Notch Managerial Economics Assignment Help with 24/7 Live Chat Support.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Get Worlds Class Managerial Economics Assignment Help with us | Best Essay Writer",
      description: "Worried about your Managerial Economics Assignment? Get Top Notch Managerial Economics Assignment Help with 24*7 Live Chat Support.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/managerial-economics-assignment-help/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/big-discount-offer-1024x256.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'managerial-accounting-assignment-help',
    path: '/managerial-accounting-assignment-help',
    title: "Get Professional Managerial Accounting Assignment Help | Best Essay Writer",
    description:"Looking for help with your managerial accounting assignments? BestEssayWriter provides expert managerial accounting assignment help services with the help of experts.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Get Professional Managerial Accounting Assignment Help | Best Essay Writer",
      description: "Looking for help with your managerial accounting assignments? BestEssayWriter provides expert managerial accounting assignment help services with the help of experts.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/managerial-accounting-assignment-help/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/offer-banner-with-a-writing-art-Managerial-Accounting-Assignment-Help.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'administrative-law-assignment-help',
    path: '/administrative-law-assignment-help',
    title: "Administrative Law Assignment Help & Writing Service @30% OFF | Best Essay Writer",
    description:"If you worried about your Administrative Law Assignment? So don't worry. Best Administrative Law Assignment Help Service is available 24/7.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Administrative Law Assignment Help & Writing Service @30% OFF | Best Essay Writer",
      description: "If you worried about your Administrative Law Assignment? So don't worry. Best Administrative Law Assignment Help Service is available 24*7.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/administrative-law-assignment-help/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/Administrative-Law-Assignment-Help-and-writing-service.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'property-law-assignment-help',
    path: '/property-law-assignment-help',
    title: "Property Law Assignment Help and Writing | Best Essay Writer",
    description:"Worried about your Law Assignments? Now you can get the best Property Law Assignment Help and writing service UK-Based. 24/7 support.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Property Law Assignment Help and Writing | Best Essay Writer",
      description: "Worried about your Law Assignments? Now you can get the best Property Law Assignment Help and writing service UK-Based. 24*7 support.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/property-law-assignment-help/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/Property-Law-Assignment-Help.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'constitutional-law-assignment-help',
    path: '/constitutional-law-assignment-help',
    title: "Get the Best Criminal Law Assignment Help from Our Experts. Secure A+ Grades Now! | Best Essay Writer",
    description:"Get the best Criminal Law Assignment Help from our experts. Our team of experienced writers provides top-notch services with original content and on-time delivery.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Get the Best Criminal Law Assignment Help from Our Experts. Secure A+ Grades Now! | Best Essay Writer",
      description: "Get the best Criminal Law Assignment Help from our experts. Our team of experienced writers provides top-notch services with original content and on-time delivery.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/constitutional-law-assignment-help/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/Constitutional-Law-Assignment-Help.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'criminal-law-assignment-help',
    path: '/criminal-law-assignment-help',
    title: "Best Criminal Law Assignment Help Services from Our Pro Writers! | Best Essay Writer",
    description:"Get Bestessaywriter.co.uk's criminal law assignment help & improve your grades! Professional writers assist with law topics with original content and no plagiarism.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Best Criminal Law Assignment Help Services from Our Pro Writers! | Best Essay Writer",
      description: "Get Bestessaywriter.co.uk's criminal law assignment help & improve your grades! Professional writers assist with law topics with original content and no plagiarism.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/criminal-law-assignment-help/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/Criminal-Law-Assignment-Help.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'human-right-law-assignment-help',
    path: '/human-right-law-assignment-help',
    title: "Avail Best Human Right Law Assignment Help Service @30% OFF | Best Essay Writer",
    description:"Hire Our Best Human Right Law Assignment Help and Writing Service from BestEssayWriter with @30% OFF 24/7 Live Support.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Avail Best Human Right Law Assignment Help Service @30% OFF | Best Essay Writer",
      description: "Hire Our Best Human Right Law Assignment Help and Writing Service from BestEssayWriter with @30% OFF 24*7 Live Support.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/human-right-law-assignment-help/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2022/12/Dr.-Henry-1024x256.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'civil-law-assignment-help',
    path: '/civil-law-assignment-help',
    title: "Get Best Civil Law Assignment Help by Our Top Notch Law Experts | Best Essay Writer",
    description:"Get the best Civil Law Assignment Help and Writing Service from Our Top Notch Law Experts. 110% Guaranteed with 0 plagiarism 24/7 Live.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Get Best Civil Law Assignment Help by Our Top Notch Law Experts | Best Essay Writer",
      description: "Get the best Civil Law Assignment Help and Writing Service from Our Top Notch Law Experts. 110% Guaranteed with 0 plagiarism 24*7 Live.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/civil-law-assignment-help/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2022/12/Dr.-Henry-1024x256.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'tort-law-assignment-help',
    path: '/tort-law-assignment-help',
    title: "Get Best Tort Law Assignment Help & Writing Service UK-Based | Best Essay Writer",
    description:"Get the Best Tort Law Assignment Help & Writing Service In the UK from UK's Top Law Experts with round clock Live Chat Support.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Get Best Tort Law Assignment Help & Writing Service UK-Based | Best Essay Writer",
      description: "Get the Best Tort Law Assignment Help & Writing Service In the UK from UK's Top Law Experts with round clock Live Chat Support.",
      locale: 'en_US',
      type: 'article',
      publishedTime: '2023-08-08T00:00:00.000Z',
      authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/tort-law-assignment-help/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/Tort-Law-Assignment-Help.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'law-assignment-help',
    path: '/law-assignment-help',
    title: "Most Effective & Best Law Assignment Help by Our Native Experts | Best Essay Writer",
    description:"Looking for the best law assignment help and writing service? So you are in the right place. Our experts help you with all assignments.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Most Effective & Best Law Assignment Help by Our Native Experts | Best Essay Writer",
      description: "Looking for the best law assignment help and writing service? So you are in the right place. Our experts help you with all assignments.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/law-assignment-help/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/law-Assignment-Help.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'management-assignment-help',
    path: '/management-assignment-help',
    title: "Get the most promising management assignment help | Best Essay Writer",
    description:"Get the most promising management assignment help online",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Get the most promising management assignment help | Best Essay Writer",
      description: "Are you seriously struggling with your management assignments? Do you really feel overwhelmed with the workload and really don’t know exactly where to begin? Then, look no further than “BestEssayWriter” for the most reliable and promising management assignment help. However, our team of expert writers positively understands the possible challenges of studying management.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/management-assignment-help/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/law-Assignment-Help.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'university-essay-writing-help',
    path: '/university-essay-writing-help',
    title: "Avail High Quality University Essay Writing Help | Best Essay Writer",
    description:"Our Top Notch Essay Writers provide university essay writing help to students with 110% satisfaction. Our Experts are available 24*7 Live.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Avail High Quality University Essay Writing Help | Best Essay Writer",
      description: "Our Top Notch Essay Writers provide university essay writing help to students with 110% satisfaction. Our Experts are available 24*7 Live.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/wp-content/uploads/2023/02/Get-the-top-class-University-Essay-Writing-Help.jpg',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/law-Assignment-Help.jpg',
          width: 1950,
          height: 942,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'write-my-essay-for-me',
    path: '/write-my-essay-for-me',
    title: "Write My Essay for Me | Get the Best Essay Help with @30% OFF",
    description:"Looking for exclusive help with essay writing? Get an A+ in every subject with our &quot;write my essay for me&quot; service. Our certified writers provide affordably.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Write My Essay for Me | Get the Best Essay Help with @30% OFF",
      description: "Looking for exclusive help with essay writing? Get an A+ in every subject with our &quot;write my essay for me&quot; service. Our certified writers provide affordably.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/write-my-essay-for-me/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/Write-my-essay-for-me.jpg',
          width: 1300,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'make-my-essay',
    path: '/make-my-essay',
    title: "Can anyone Make My Essay for me UK | Best Essay Writer",
    description:"Get expert 'make my essay' help from Best Essay Writer UK - top-notch online writing service offering essay, dissertation, research paper, and assignment writing help.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Can anyone Make My Essay for me UK | Best Essay Writer",
      description: "Get expert 'make my essay' help from Best Essay Writer UK - top-notch online writing service offering essay, dissertation, research paper, and assignment writing help.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/make-my-essay/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/Make-my-essay.jpg',
          width: 1300,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'do-my-essay-for-me',
    path: '/do-my-essay-for-me',
    title: "Get Fast Essay Writing with Our Affordable Do My Essay for Me Service | Best Essay Writer",
    description:"Looking for affordable essay-writing services? Best Essay Writer UK offers &quot;do my essay for me&quot; services worldwide. Our experts are qualified and available 24*7 Live.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Get Fast Essay Writing with Our Affordable Do My Essay for Me Service | Best Essay Writer",
      description: "Looking for affordable essay-writing services? Best Essay Writer UK offers &quot;do my essay for me&quot; services worldwide. Our experts are qualified and available 24*7 Live.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/do-my-essay-for-me/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/Get-Fast-Essay-Writing-with-Our-Affordable-Do-My-Essay-for-Me-Service.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'narrative-essay-writing-help',
    path: '/narrative-essay-writing-help',
    title: "Top Narrative Essay Writing Help in the UK by UK Native Experts | Best Essay Writer",
    description:"Need Top Narrative Essay Writing Help in the UK? So you are at the right place. We have a team of Ph.D. experts who help the students 24/7.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Top Narrative Essay Writing Help in the UK by UK Native Experts | Best Essay Writer",
      description: "Need Top Narrative Essay Writing Help in the UK? So you are at the right place. We have a team of Ph.D. experts who help the students 24/7.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/narrative-essay-writing-help/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2022/08/Narrative-Essay-Writing-Help.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'argumentative-essay-writing-service',
    path: '/argumentative-essay-writing-service',
    title: "Get Argumentative Essay Writing Service UK to be Done your Task | Best Essay Writer",
    description:"Want to Get an Argumentative Essay Writing Service in the UK? We offer all your academic essay help. 24/7 Support 1000+ top-notch Experts.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Get Argumentative Essay Writing Service UK to be Done your Task | Best Essay Writer",
      description: "Want to Get an Argumentative Essay Writing Service in the UK? We offer all your academic essay help. 24/7 Support 1000+ top-notch Experts.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/argumentative-essay-writing-help/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2021/11/Argumentative-Essay-Writing-Service.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'descriptive-essay-writing-help',
    path: '/expository-essay-writing-service',
    title: "Trusted Expostory Essay Writing Service UK | Best Essay Writer",
    description:"Need help with expository essay writing? Our service can assist you! We offer expository essay writing services to help you write a well-structured and informative essay.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Trusted Expostory Essay Writing Service UK | Best Essay Writer",
      description: "Need help with expository essay writing? Our service can assist you! We offer expository essay writing services to help you write a well-structured and informative essay.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/expository-essay-writing-help/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2022/09/Expository-Essay-Writing-Service.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
  {
    slug: 'expository-essay-writing-service',
    path: '/expository-essay-writing-service',
    title: "Trusted Expostory Essay Writing Service UK | Best Essay Writer",
    description:"Need help with expository essay writing? Our service can assist you! We offer expository essay writing services to help you write a well-structured and informative essay.",
    image: logo2,
    alt: 'main image for content section',
    last_modified: '23/8/2023',
    openGraph: {
      title:"Trusted Expostory Essay Writing Service UK | Best Essay Writer",
      description: "Need help with expository essay writing? Our service can assist you! We offer expository essay writing services to help you write a well-structured and informative essay.",
      locale: 'en_US',
      type: 'article',
          publishedTime: '2023-08-08T00:00:00.000Z',
    authors: "https://www.facebook.com/bestessaywriter.co.uk",
      site_name: "Best Essay Writer",
      url: 'https://bestessaywriters.co.uk/expository-essay-writing-help/',
      images: [
        {
          url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2022/09/Expository-Essay-Writing-Service.jpg',
          width: 1200,
          height: 628,
          type: 'image/jpeg'
        }
      ],
    },
  },
];



