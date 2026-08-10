import {
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  BriefcaseMedicalIcon,
  CoinsIcon,
  GraduationCapIcon,
  LaptopMinimalCheckIcon,
  PaletteIcon,
  SproutIcon,
} from "lucide-react";

export type Variant = "red" | "green" | "blue" | "yellow" | "purple" | "orange";

export const headerLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about/overview",
    sublinks: [
      { label: "Overview", href: "/about/overview" },
      { label: "Our Story", href: "/about/our-story" },
      { label: "Mission, Vision & Values", href: "/about/mvv" },
    ],
  },
  { label: "Programs", href: "/programs" },
  { label: "Services", href: "/services" },
  { label: "Causes", href: "/causes" },
  {
    label: "Team",
    href: "/team/org-struct",
    sublinks: [
      { label: "Organization Structure", href: "/team/org-struct" },
      { label: "Board of Directors", href: "/team/bod" },
      { label: "Executive Managers", href: "/team/exec-manage" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  {
    section: "Quick Links",
    links: [
      { label: "About Us", href: "/about/overview" },
      { label: "Our Story", href: "/about/our-story" },
      { label: "Causes", href: "/causes" },
      { label: "Donate", href: "/donate" },
    ],
  },
  {
    section: "Others",
    links: [
      { label: "Services", href: "/services" },
      { label: "Programs", href: "/programs" },
      { label: "Mission & Vision", href: "/about/mvv" },
      { label: "Teams", href: "/#team" },
    ],
  },
];

export const heroSlides = [
  {
    image: "/assets/img/hero_img_1.jpg",
    title: "Opportunity for All, Barrier to None!",
    subtitle:
      "We invest in people, expand access to opportunity, and build resilient communities — ensuring progress is shared, sustainable, and transformative.",
    videoUrl: "https://www.youtube.com/embed/xcwUALN1q5Q",
  },
  {
    image: "/assets/img/hero_img_2.jpg",
    title: "Creating Opportunity. Strengthening Communities.",
    subtitle:
      "Through strategic partnerships and targeted programs, we remove systemic barriers and enable individuals to thrive with dignity and independence.",
    videoUrl: "https://www.youtube.com/embed/xcwUALN1q5Q",
  },
  {
    image: "/assets/img/hero_img_4.jpg",
    title: "Sustainable Solutions. Measurable Change.",
    subtitle:
      "Every initiative is designed to deliver long-term economic inclusion, empower underserved populations, and generate measurable social impact.",
    videoUrl: "https://www.youtube.com/embed/xcwUALN1q5Q",
  },
];

export const services = [
  {
    title: "Educational Support",
    description:
      "Improve access to quality education by ensuring learning environments, teaching methods, and materials accommodate all learners, especially women and PWDs.",
    image: "/assets/img/service_edu.jpg",
    icon: GraduationCapIcon,
  },
  {
    title: "Healthcare",
    description:
      "Promote healthcare systems that are accessible, affordable, and tailored to the specific needs of PWDs and women, especially in underserved areas.",
    image: "/assets/img/service_health.jpg",
    icon: BriefcaseMedicalIcon,
  },
  {
    title: "Technology",
    description:
      "Bridge the digital divide by promoting accessible technologies and inclusive innovation for communication, education, and empowerment.",
    image: "/assets/img/service_tech.jpg",
    icon: LaptopMinimalCheckIcon,
  },
  {
    title: "Creative Industry",
    description:
      "Provide platforms for artistic and cultural expression, amplifying the talents of PWDs and women, and dismantling stereotypes through creative engagement.",
    image: "/assets/img/service_creative.jpg",
    icon: PaletteIcon,
  },
  {
    title: "Economic Empowerment",
    description:
      "Facilitate access to income-generating activities, small business support, vocational training, and financial literacy to help PWDs and women become economically self-reliant.",
    image: "/assets/img/service_eco_emp.jpg",
    icon: CoinsIcon,
  },
  {
    title: "Skills Development",
    description:
      "Deliver tailored skills training and capacity-building programs that enhance employability and self-sufficiency for PWDs and women.",
    image: "/assets/img/service_skill_dev.jpg",
    icon: SproutIcon,
  },
];

export const testimonialData = [
  {
    authorImg: "/assets/img/avatar_1.png",
    authorName: "Maria Rodriguez",
    authorTitle: "Beneficiary",
    authorQuote:
      "Before this organization, I felt lost and hopeless. The support I received—from food assistance to job training—has completely changed my life. I'm now on a path to self-sufficiency, and I'll be forever grateful.",
    color: "bg-red-500",
  },
  {
    authorImg: "/assets/img/avatar_2.png",
    authorName: "David Chen",
    authorTitle: "Volunteer",
    authorQuote:
      "Volunteering here is one of the most rewarding experiences of my life. Seeing the direct impact of our work on people's faces is incredibly motivating. It's more than just giving time; it's about being part of a community that truly cares.",
    color: "bg-orange-400",
  },
  {
    authorImg: "/assets/img/avatar_3.png",
    authorName: "Sarah Miller",
    authorTitle: "Donor",
    authorQuote:
      "I've been a regular donor for years because I know my contributions are used effectively. This organization is transparent, and I can see the real-world results of my support. It's inspiring to be a part of their mission.",
    color: "bg-blue-600",
  },
  {
    authorImg: "/assets/img/avatar_4.png",
    authorName: "Kevin Brown",
    authorTitle: "Community Partner",
    authorQuote:
      "Our partnership with this charity has been instrumental in reaching a broader audience and making a bigger difference. Their dedication to the community is unmatched, and together, we are creating a stronger, more supportive society.",
    color: "bg-purple-500",
  },
];

export const teamHighlight: {
  name: string;
  position: string;
  image: string;
  social?: {
    linkedIn?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  variant: Variant;
  redirectTo?: string;
  redirect?: string;
}[] = [
  {
    name: "Ashenafi Degu",
    position: "Executive Director and Founder",
    image: "/assets/img/team_img_ashu.jpg",
    social: {
      linkedIn: "#",
      twitter: "#",
      facebook: "#",
    },
    variant: "green",
    redirectTo: "See all Executive Managers",
    redirect: "/team/exec-manage",
  },
  {
    name: "Dr. Yilkal Hassabie",
    position: "Chairperson",
    image: "/assets/img/team_img_default.jpg",
    social: {
      linkedIn: "#",
      twitter: "#",
      facebook: "#",
    },
    variant: "yellow",
  },
];

export const executiveTeam: {
  name: string;
  position: string;
  image: string;
  social?: {
    linkedIn?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  variant: Variant;
  redirectTo?: string;
  redirect?: string;
}[] = [
  {
    name: "Ashenafi Degu",
    position: "Executive Director and Founder",
    image: "/assets/img/team_img_ashu.jpg",
    social: {
      linkedIn: "#",
      twitter: "#",
      facebook: "#",
    },
    variant: "red",
    redirectTo: "See all Executive Managers",
    redirect: "/team/exec-manage",
  },
  {
    name: "Dinkayehu Asefa",
    position: "Program and Strategy Director",
    image: "/assets/img/team_img_dink.jpg",
    social: {
      linkedIn: "https://www.linkedin.com/in/dink1221",
      twitter: "#",
      facebook: "#",
    },
    variant: "green",
    redirectTo: "See all Administative Staff",
    redirect: "/team/admin-staff",
  },
  {
    name: "Sara Gebreyohannes",
    position: "Operational Director",
    image: "/assets/img/team_img_sara.jpg",
    social: {
      linkedIn: "#",
      twitter: "#",
      facebook: "#",
    },
    variant: "yellow",
    redirectTo: "See all Executive Managers",
    redirect: "/team/exec-manage",
  },
  {
    name: "Blen Getachew",
    position: "Human Resource Manager",
    image: "/assets/img/team_img_blen.jpg",
    social: {
      linkedIn: "https://www.linkedin.com/in/blen-getachew-847a8151",
      twitter: "#",
      facebook: "#",
    },
    variant: "orange",
  },
  {
    name: "Dr. Mesfin Eshetu",
    position: "Deputy Program Director",
    image: "/assets/img/team_img_mesfin.jpg",
    social: {
      linkedIn: "#",
      twitter: "#",
      facebook: "#",
    },
    variant: "blue",
  },
  {
    name: "Azeb Haileselassie",
    position: "MEAL Manager",
    image: "/assets/img/team_img_azi.jpg",
    social: {
      linkedIn: "#",
      twitter: "#",
      facebook: "#",
    },
    variant: "purple",
  },
  {
    name: "Rediet Tekle",
    position: "Executive Assistance",
    image: "/assets/img/team_img_redu.jpg",
    social: {
      linkedIn: "https://www.linkedin.com/in/rediet-tekle-27a59022a",
      twitter: "#",
      facebook: "#",
    },
    variant: "red",
  },
];

export const boardMemberTeam: {
  name: string;
  position: string;
  image: string;
  social?: {
    linkedIn?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  variant: Variant;
  redirectTo?: string;
  redirect?: string;
}[] = [
  {
    name: "Dr. Yilkal Hassabie",
    position: "Chairperson",
    image: "/assets/img/team_img_default.jpg",
    social: {
      linkedIn: "#",
      twitter: "#",
      facebook: "#",
    },
    variant: "yellow",
  },
  {
    name: "Genet",
    position: "Vice Chairperson",
    image: "/assets/img/team_img_default.jpg",
    social: {
      linkedIn: "#",
      twitter: "#",
      facebook: "#",
    },
    variant: "yellow",
  },
  {
    name: "Yirsaw Zewdie",
    position: "Board Member",
    image: "/assets/img/team_img_default.jpg",
    social: {
      linkedIn: "#",
      twitter: "#",
      facebook: "#",
    },
    variant: "yellow",
  },
  {
    name: "Engdawork Zeleke",
    position: "Board Member",
    image: "/assets/img/team_img_default.jpg",
    social: {
      linkedIn: "#",
      twitter: "#",
      facebook: "#",
    },
    variant: "yellow",
  },
  {
    name: "Tigist Bruck",
    position: "Board Member",
    image: "/assets/img/team_img_default.jpg",
    social: {
      linkedIn: "#",
      twitter: "#",
      facebook: "#",
    },
    variant: "yellow",
  },
];

export const socialLinks = [
  {
    link: "https://www.facebook.com/inclusivegrowthorganization",
    icon: FaFacebookF,
    title: "facebook",
  },
  {
    link: "https://www.linkedin.com/company/inclusivegrowth1",
    icon: FaLinkedinIn,
    title: "linkedin",
  },
  {
    link: "https://t.me/welcome_to_ig",
    icon: FaTelegramPlane,
    title: "telegram",
  },
  {
    link: "https://vm.tiktok.com/ZMHvTye8yrmua-WfvZz",
    icon: FaTiktok,
    title: "tiktok",
  },
];

export const contactInfo = {
  emails: ["inclusivgrowth@gmail.com", "dinkayehu.asefa@inclusivegrowth.org.et"],
  phones: ["+251 911 278 048", "+251 913 119 669"],
  locations: [
    "4 Killo, Around Minister of Education",
    "Addis Ababa, Ethiopia.",
  ],
  map: "https://maps.app.goo.gl/hv241fBTivspemHo6",
};

export const galleryImages = [
  {
    thumb: "/assets/img/gallery_img_1.jpg",
    large: "/assets/img/gallery_img_1.jpg",
    alt: "Group photos of children's with charity volunteer.",
    subHtml: "",
  },
  {
    thumb: "/assets/img/gallery_img_2.jpg",
    large: "/assets/img/gallery_img_2.jpg",
    alt: "Two disabled black friends filling eachother's weekness.",
    subHtml: "",
  },
  {
    thumb: "/assets/img/gallery_img_3.jpg",
    large: "/assets/img/gallery_img_3.jpg",
    alt: "Happy child with assistive walker.",
    subHtml: "",
  },
  {
    thumb: "/assets/img/gallery_img_4.jpg",
    large: "/assets/img/gallery_img_4.jpg",
    alt: "Group photos of children's with charity volunteer.",
    subHtml: "",
  },
  {
    thumb: "/assets/img/gallery_img_5.jpg",
    large: "/assets/img/gallery_img_5.jpg",
    alt: "Two disabled black friends filling eachother's weekness.",
    subHtml: "",
  },
  {
    thumb: "/assets/img/gallery_img_4.jpg",
    large: "/assets/img/gallery_img_4.jpg",
    alt: "Group photos of children's with charity volunteer.",
    subHtml: "",
  },
  {
    thumb: "/assets/img/gallery_img_5.jpg",
    large: "/assets/img/gallery_img_5.jpg",
    alt: "Two disabled black friends filling eachother's weekness.",
    subHtml: "",
  },
  {
    thumb: "/assets/img/gallery_img_4.jpg",
    large: "/assets/img/gallery_img_4.jpg",
    alt: "Group photos of children's with charity volunteer.",
    subHtml: "",
  },
];

export const accountDetails = {
  accountName: "Inclusive Growth Organization",
  accountNumber: "1234567890",
  bankName: "Bank of Abyssinia",
  branch: "Main Branch, Addis Ababa",
  swiftCode: "SWIFTABYSXXX",
};
