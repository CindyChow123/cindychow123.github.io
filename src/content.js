export const navLinks = [
    { label: 'Publications', href: '#publications' },
    { label: 'Industry', href: '#industry' },
    { label: 'Projects', href: '#projects' },
];

export const hero = {
    eyebrow: 'Software Engineer - LLM Researcher',
    title: 'Xinyi (Cindy) Zhou',
    summary: `A software engineer based in the Bay Area. \nBetween 2023-2024, I pursued the MSCS (General) degree at the [University of Southern California](https://www.usc.edu/) and worked as a student researcher for [USC ACE Lab](https://aceatusc.github.io/), supervised by [Souti Rini Chattopadhyay](https://viterbi.usc.edu/directory/faculty/Chattopadhyay/Souti).\nBefore USC, I earned my Bachelor of Engineering in CSE at [Southern University of Science and Technology (SUSTECH)](https://www.sustech.edu.cn/en/) with Dr. Jiang Liu, where I contributed to his iMED lab.`,
    actions: [
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/xinyi-zhou-cindy/',
            icon: 'linkedin',
        },
        {
            label: 'Google Scholar',
            href: 'https://scholar.google.com/citations?user=wDNz6NYAAAAJ&hl=en',
            icon: 'scholar',
        },
        {
            label: 'Email',
            href: 'mailto:xinyi.zhou223@gmail.com',
            icon: 'email',
        },
    ],
};

export const industry = [
    {
        period: 'Feb 2024 – Present',
        title: 'Software Engineer · Channel AI',
        description:
            'Designing backend infrastructure for conversational AI characters, owning prompt pipelines and scalable services.',
        company: {
            name: 'Channel AI',
            href: 'https://channel.bot/',
            icon: 'channel.ico',
        },
        location: 'San Francisco, CA',
    },
    {
        period: 'May 2024 – Aug 2024',
        title: 'Software Engineer Intern · Veeva Systems',
        description:
            'Maintained the Vault Platform Reporting stack (Spring Boot + React), closed 11 critical defects, shipped a “Last Updated” indicator for 1,000+ customers, and expanded JUnit/Jest coverage.',
        company: {
            name: 'Veeva Systems',
            href: 'https://www.veeva.com/',
            icon: 'veeva.png',
        },
        location: 'Pleasanton, CA',
    },
    {
        period: 'May 2023 – Aug 2023',
        title: 'Machine Learning (NLP) Engineer Intern · UBT Robotics',
        description:
            'Fine-tuned Vicuna 7B/13B/33B chatbots on 50K+ scripted dialogues, delivering a 29.7% user-preference lift over baseline models.',
        company: {
            name: 'UBTECH Robotics',
            href: 'https://www.ubtrobot.com/en/',
            icon: 'ubtech.ico',
        },
        location: 'Shenzhen, China',
    },
    {
        period: 'Aug 2022 – Dec 2022',
        title: 'Research Assistant · SUSTech School of Design',
        description:
            'Built Unity mixed-reality prototypes, led IxDL user surveys, and co-designed HCI experiments for the SUSTECH School of Design.',
        company: {
            name: 'SUSTech School of Design',
            href: 'https://designschool.sustech.edu.cn/',
            icon: 'schooldesign.ico',
        },
        location: 'Shenzhen, China',
    },
];


export const publications = [
    {
        title: 'Trust dynamics in AI-assisted development: Definitions, factors, and implications',
        venue: 'ICSE 2025 (Presentation)',
        role: 'Co-Author',
        authors: ['Sadra Sabouri', 'Philipp Eibl', 'Xinyi Zhou', 'Morteza Ziyadi', 'Nenad Medvidovic', 'Lars Lindemann', 'Souti Chattopadhyay'],
        href: 'https://www.amazon.science/publications/trust-dynamics-in-ai-assisted-development-definitions-factors-and-implications',
    },
    {
        title: 'A novel multi-focus fusion network for retinal microsurgery',
        venue: 'ISBI 2022 (Presentation)',
        role: 'First Author',
        authors: ['Xinyi Zhou', 'Louying Hao', 'Qiushi Nie', 'Yingquan Zhou', 'Lihui Wang', 'Yan Hu', 'Jiang Liu'],
        href: 'https://ieeexplore.ieee.org/abstract/document/9761531',
    },
];

export const projects = [
    {
        tag: 'Accessibility',
        title: 'Color Vision Simulator',
        description:
            'Built a simulator that lets people experience color blindness, helps those with color vision deficiency distinguish hues, and invites empathy through tangible comparisons.',
        linkText: 'View in Github',
        href: 'https://github.com/CindyChow123/Multimedia_project_2021_spring',
        preview: '/videos/colorblind.gif',
    }
];

export const blogPosts = [
    {
        title: 'Design Notes: Calm Interfaces in Healthcare AI',
        summary:
            'An outline for balancing automation with trust when machine learning supports clinical workflows.',
        linkText: 'Read article',
        href: '/blog/calm-interfaces-healthcare-ai.html',
        date: 'Jan 12, 2025',
        readingTime: '6 min read',
    },
];

export const site = {
    brand: 'Enchanté',
    footerNote: 'All rights reserved. 💙',
};
