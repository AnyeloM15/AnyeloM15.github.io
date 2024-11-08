import selfImage from "./assets/images/my-image.jpg";
import eymsa from "./assets/images/Portafolio-Eymsa.png";

const logotext = "A";
const meta = {
    title: "Miguel Garcia",
    description: "I'm a web developer and I'm interested in data science",
};

const introdata = {
    title: "I’m Miguel Garcia ",
    animated: {
        first: "I'm an student",
        second: "I'm a web developer",
        third: "And I'm interested in data science",
    },
    description: "I'm currently studying Software Engineering at the Upsrj University, I'm passionate about web development and data science, I'm always looking for new challenges and learning new technologies.",
    your_img_url: selfImage,
};

const dataabout = {
    title: "About me",
    aboutme: "I'm an apassionate web developer, I'm currently studying Software Engineering at the Upsrj University, I'm always looking for new challenges and learning new technologies such as backend technologies, frontend technologies, and recently I'm very interested on data science.",
};
const worktimeline = [{
        jobtitle: "Designer web",
        where: "EYMSA.COM",
        date: "2024",
    },
    {
        jobtitle: "Designer web",
        where: "UPSRJ",
        date: "2024",
    },
    {
        jobtitle: "Designer web",
        where: "UPSRJ",
        date: "2024",
    },
];

const skills = [{
        name: "Html",
        value: 100,
    },
    {
        name: "Css",
        value: 85,
    },
    {
        name: "Javascript",
        value: 60,
    },
    {
        name: "React",
        value: 50,
    },
    {
        name: "Python",
        value: 25,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "I can design a beautiful and responsive website for you.",
    },
    {
        title: "Wordpress Design",
        description: "I can design a beautiful and responsive landing pages for you.",
    },
];

const dataportfolio = [{
        img: selfImage,
        description: "I'm a web developer and I'm interested in data science",

    },
    {
        img: eymsa,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "git.miguel2004@gmail.com",
    YOUR_FONE: "(442)706-8376",
    description: "I am available for freelance work. Connect with me via Email or Phone.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/AnyeloM15",
    facebook: "https://www.facebook.com/profile.php?id=61559736563218&mibextid=LQQJ4d",
    linkedin: "https://www.linkedin.com/in/miguel-2004-garcia",
    twitter: "https://twitter.com/Anyelo_CR",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};