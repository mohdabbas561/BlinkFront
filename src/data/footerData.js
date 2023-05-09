import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const footMenu = [
    {
        id: 1,
        title: "Help",
        menu: [
            {
                id: 1,
                link: "FAQs",
                path: "/"
            },
            {
                id: 2,
                link: "Track Order",
                path: "/"
            },
            {
                id: 3,
                link: "Cancel Order",
                path: "/"
            },
            {
                id: 4,
                link: "Return Order",
                path: "/"
            },
            {
                id: 5,
                link: "Warranty Info",
                path: "/"
            },
        ]
    },
    {
        id: 2,
        title: "Policies",
        menu: [
            {
                id: 1,
                link: "Refund Policy",
                path: "/Refundpolicy"
            },
            {
                id: 2,
                link: "Compliance",
                path: "/Compliance"
            },
            {
                id: 3,
                link: "Copyright",
                path: "/Copyright"
            },
            {
                id: 4,
                link: "Privacy Policy",
                path: "/PrivacyPolicy"
            },
            {
                id: 5,
                link: "Return",
                path: "/Return"
            },
            // {
            //     id: 6,
            //     link: "Shipping",
            //     path: "/Shipping"
            // },
            {
                id: 7,
                link: "Terms of Use",
                path: "/TermsOfUse"
            },
        ]
    },
    {
        id: 3,
        title: "Company",
        menu: [
            {
                id: 1,
                link: "About Us",
                path: "/AboutUs"
            },
            {
                id: 2,
                link: "Contact Us",
                path: "#"
            },
            {
                id: 3,
                link: "Blinken Cares",
                path: "/"
            },
            {
                id: 4,
                link: "Careers",
                path: "/"
            },
            {
                id: 5,
                link: "Affiliates",
                path: "/"
            },
            {
                id: 6,
                link: "Marketting",
                path: "/"
            },
            {
                id: 7,
                link: "Know More",
                path: "/"
            },
        ]
    }
];

export const footSocial = [
    {
        id: 1,
        icon: <FaFacebookF />,
        path: "https://www.facebook.com/GoBlinken",
    },
    
    {
        id: 3,
        icon: <FaInstagram />,
        path: "https://www.instagram.com/goblinkenofficial/",
    },
    {
        id: 4,
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/company/goblinken/",
    },
];
