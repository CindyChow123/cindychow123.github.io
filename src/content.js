export const navLinks = [
    { label: 'Publications', href: '#publications' },
    { label: 'Industry', href: '#industry' },
    { label: 'Projects', href: '#projects' },
    { label: 'Photography', href: '#photography' },
    { label: 'Curriculum Vitae', href: '/Xinyi_Zhou_Resume.pdf', target: '_blank', rel: 'noopener' },
];

export const hero = {
    eyebrow: 'Software Engineer - LLM Researcher',
    title: 'Xinyi (Cindy) Zhou',
    summary: `A software engineer based in the Bay Area. \nBetween 2023-2024, I pursued the MSCS (General) degree at the [University of Southern California](https://www.usc.edu/) and worked as a student researcher for [USC ACE Lab](https://aceatusc.github.io/), supervised by [Souti Rini Chattopadhyay](https://viterbi.usc.edu/directory/faculty/Chattopadhyay/Souti).\nBefore USC, I earned my Bachelor of Engineering in CSE at [Southern University of Science and Technology (SUSTECH)](https://www.sustech.edu.cn/en/) with [Dr. Jiang Liu](https://faculty.sustech.edu.cn/?tagid=liuj&iscss=1&snapid=1&orderby=date&go=2), where I contributed to his [iMED lab](https://www.imed-lab.com/).`,
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
        bullets: [
            'Spearheaded an LLM-powered personalization feature in TypeScript, extending the PostgreSQL schema to dynamically inject targeted user context into model prompts — delivering +45% revenue and +4% daily messaging for mature cohorts within 4 days.',
            'Built an autonomous Slack bot with Claude that surfaces daily Sentry and Better Stack errors, assigns owners, and auto-generates remediation PRs — cutting manual log investigation ~80% per issue.',
            'Engineered an automated Trust & Safety pipeline integrating external ML classifiers with a rules-based evaluation engine that auto-handles definitive cases and routes edge cases to human review — reducing manual review by 78%.',
            'Maintained scalable AWS ECS microservices for mobile and web clients (XMPP for real-time messaging, Redis sessions, Amazon Aurora PostgreSQL) and shipped zero-downtime Prisma schema migrations via parallel-writes and batched backfills.',
        ],
        skills: ['TypeScript', 'Claude', 'PostgreSQL', 'AWS ECS', 'Prisma'],
        company: {
            name: 'Channel AI',
            href: 'https://channelai.ai/',
            icon: 'channel.ico',
        },
        location: 'Menlo Park, CA',
    },
    {
        period: 'May 2024 – Aug 2024',
        title: 'Software Engineer Intern · Veeva Systems',
        bullets: [
            'Maintained Spring Boot microservices and React UIs in a high-scale cloud reporting platform, resolving 11 defects and expanding JUnit and Jest unit + integration coverage through Jenkins CI/CD pipelines.',
            'Built a real-time data freshness indicator by integrating the React front-end with downstream microservice APIs, giving users accurate visibility into asynchronous data processing states.',
            'Resolved race conditions and key collisions in a distributed multi-tier caching architecture, ensuring data consistency across service instances for 1,000+ customers.',
        ],
        skills: ['Spring Boot', 'React', 'JUnit', 'Jest', 'Jenkins'],
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
        bullets: [
            'Fine-tuned Vicuna 7B/13B/33B chatbots with LoRA and DeepSpeed ZeRO on a V100 cluster for reception and tour-guiding dialogue, lifting user preference 29.7% and Elo rating by 22 over baselines.',
            'Built a Python data pipeline using prompt engineering and the ChatGPT API that 20× accelerated fine-tuning data collection across 3 NLP projects.',
            'Deployed an evaluation chatbot on cloud via FastAPI and Gradio for human preference testing.',
        ],
        skills: ['Vicuna', 'LoRA', 'DeepSpeed', 'FastAPI'],
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
        bullets: [
            'Prototyped Unity mixed-reality experiences on Oculus and HoloLens with a team of 8 UX designers.',
            'Wrote Python scripts to collect interaction data for UX optimization.',
            'Led qualitative thematic analysis of IxDL design-language interviews.',
        ],
        skills: ['Unity', 'Python', 'qualitative thematic'],
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
        title: 'Cognitive Biases in LLM-Assisted Software Development',
        venue: 'ICSE 2026 (Accepted!)',
        venueLink: 'https://conf.researchr.org/home/icse-2026',
        role: 'First Co-Author',
        authors: ['Xinyi Zhou', 'Zeinabsadat Saghi', 'Sadra Sabouri', 'Rahul Pandita', 'Mollie McGuire', 'Souti Chattopadhyay'],
        href: 'https://arxiv.org/abs/2601.08045',
        badge: {
            label: 'Head Student Volunteer',
            href: 'https://conf.researchr.org/track/icse-2026/icse-2026-student-volunteers#:~:text=Xinyi%20Zhou,United%20States',
        },
        details: {
            image: {
                src: '/icse2026/first-frame.jpg',
                href: '/icse2026/slides.pdf',
                alt: 'ICSE 2026 Cognitive Bias slide deck — first slide',
            },
            resources: [
                { label: 'Slides', href: '/icse2026/slides.pdf' },
            ],
        },
    },
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
        details: {
            bullets: [
                'PyTorch CNN for defocus blur in ophthalmic surgical microscopy via image fusion; +36.10% SSIM and +28.19% PSNR over SOTA.',
                'Curated a 3,718-image multi-focus fundus dataset with all-in-focus ground truth derived from a traditional fusion algorithm.',
                'Principal investigator on funded undergraduate research (NCSITP grant 202114325010, team of 4).',
            ],
            resources: [
                { label: 'Slides', href: '/isbi/ISBI_ppt.pdf' },
                { label: 'Poster', href: '/isbi/ISBI_poster.pdf' },
            ],
            video: '/isbi/ISBI_video.mp4',
        },
    },
];

export const projects = [
    {
        tag: 'Accessibility',
        title: 'Color Vision Simulator',
        description:
            'Built a simulator that lets people experience color blindness, helps those with color vision deficiency distinguish hues, and invites empathy through tangible comparisons.',
        links: [
            { label: 'View in Github', href: 'https://github.com/CindyChow123/Multimedia_project_2021_spring' },
        ],
        preview: '/videos/colorblind.gif',
    },
    {
        tag: 'Gaming',
        title: 'USC CSCI526 - Color Spash',
        description: 'A 2D platformer featuring color-switching mechanics that alter the player\'s interaction with obstacles of corresponding colors.',
        links: [
            { label: 'Course project repo', href: 'https://github.com/CSCI-526/spring-2024-project-tuesday-color-splash' },
            { label: 'Unity demo', href: 'https://hsoron.github.io/Gold-Demo/' },
        ],
        preview: '/videos/colorsplash.mp4',
    },
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
