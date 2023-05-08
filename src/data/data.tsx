import {
  AcademicCapIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './types';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Khumbo Nyirenda's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Khumbo Nyirenda.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a London based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Zopa</strong> helping build a modern, mobile-first sutomotive finance
        platform.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me learning more about{' '}
        <strong className="text-stone-100">Personal Finance</strong>, or working out on the{' '}
        <strong className="text-stone-100">squash</strong> and <strong className="text-stone-100">tennis</strong>{' '}
        courts.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/curriculumVitae.pdf',
      text: 'Curriculum Vitae',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'London, United Kingdom', Icon: MapIcon},
    {label: 'Nationality', text: 'South African', Icon: FlagIcon},
    {label: 'Interests', text: 'Personal Finance, Squash, Tennis', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Bath', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Zopa', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Afrikaans',
        level: 4,
      },
      {
        name: 'French',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'GraphQL',
        level: 8,
      },
      {
        name: 'Redux',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Kotlin',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: '',
    url: 'http://road-to-wealth.vercel.app/',
    image: profilepic,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2014 - May 2019',
    location: 'University of Bath',
    title: 'Masters in  Mechanical Engineering MEng (Hons) with professional placement',
    content: (
      <>
        <p>Learnt how to use physical science, mathematics and computing to assess engineering systems.</p>
        <ul className="list-disc list-inside ml-5">
          <li>Achieved 2:1 for MEng (Hons) Mechanical Engineering</li>
          <li>Staff Student Liaison Council Co-chair</li>
        </ul>
      </>
    ),
  },
  {
    date: 'January 2018 - June 2018',
    location: 'Grenoble Institute of Technology',
    title: 'Industrial Engineering Erasmus Exchange',
    content: (
      <p>
        Responsible Design Project: e-NABLE. Adapted an existing mechanical assistive upper limb to design a 3D printed
        robotic prosthesis.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2021 - Present',
    location: 'Zopa',
    title: 'Software Engineer',
    content: (
      <>
        <p>Working in an agile cross-functional team to continuously deliver new products and platform improvements</p>
        <ul className="list-disc list-inside ml-5">
          <li>Champion a test-driven, scalable, and maintainable development approach with intraday deployments.</li>
          <li>Frontend lead for 5 major applications with a monthly disbursal of £25 million, rising by 10% monthly</li>
          <li>Mentor junior developers including regular pairing sessions.</li>
          <li>Work closely with backend developers, product, and designers to collaborate in decision making.</li>
          <li>
            Architected and built several new products and redesigns including a flagship direct to customer, business
            to business and internal solutions using React, Gatsby, Next, GraphQL and Node.
          </li>
          <li>Partner with backend developers in Kotlin to maintain an event-driven microservices system.</li>
          <li>Implemented a script to secure dozens of apps against vulnerable base image versions.</li>
          <li>Created an accessibility testing framework for frontend and QA developers.</li>
          <li>Develop a shared components library, accessibility initiatives, and other cross-team standards.</li>
          <li>Experiment using Optimizely to compare designs and features.</li>
          <li>Integrate Splunk, Sentry, and Amplitude loggers.</li>
          <li>Test components and applications using Jest, Cypress, and Playwright.</li>
          <li>Migrated applications from Gatsby.js to Next.js framework.</li>
          <li>Active member of the diversity forum and created Zopa’s first Black Network.</li>
        </ul>
      </>
    ),
  },
  {
    date: 'July - November 2022',
    location: 'Tom Teaches Tech',
    title: 'Instructor',
    content: <p>Taught HTML, CSS, and JavaScript while mentoring groups of career switchers and new developers.</p>,
  },
  {
    date: 'September 2019 - November 2021',
    location: 'Autodesk',
    title: 'Technical Consultant',
    content: (
      <ul className="list-disc list-inside ml-5">
        <li>
          Built React and Redux frontend application and a Python backend to interact with a machine data stream,
          execute API functions in Fusion 360, and send toolpaths direct to themachine.
        </li>
        <li>
          Programmed a SlackBot application to automate the creation and modification of records, using Typescript,
          Node, Fusion Lifecyle’s REST API, Amazon EC2 instances, and Slack’s Web API: Bolt.
        </li>
        <li>
          Developed a Python and Typescript add-in for connecting directly to an additive machine using Fusion 360’s API
          and Octoprint’s REST API.
        </li>
        <li>Taught a coding course on Python, Typescript, C++, React, Redux, and REST APIs for 16 attendees.</li>
        <li>Troubleshot interface software and debugged application code.</li>
        <li>Organised team development work using Git version control and Jira to manage projects.</li>
        <li>Conducted a review of Manufacturing Execution Systems by assessing API integrations and connectors.</li>
        <li>Created digital assets including webinars, manufacturing tutorials, and YouTube live content.</li>
        <li>
          Pioneered a data modelling spreadsheet used to design strategies for the unification of Autodesk’s products
          and assessed the impact on returns and subscribers. Presented this impact for fourproducts.
        </li>
      </ul>
    ),
  },
  {
    date: 'July 2018 - August 2019',
    location: 'Autodesk/ Gen3D',
    title: 'Data Catalyst',
    content: <p> Produced actionable insightsto manufacturing readiness of over 250 customers in 22 countries</p>,
  },
  {
    date: 'January - June 2018',
    location: 'Responsible Design Project: e-NABLE',
    title: 'Product Designer',
    content: (
      <ul className="list-disc list-inside ml-5">
        <li> Adapted an existing mechanical assistive upper limb to design a 3D printed robotic prosthesis.</li>
        <li>
          Surpassed expectations with a functional prototype costing a total of €135 to manufacture, three times below
          the allocated budget and more than ten times less than the closest competitor.
        </li>
      </ul>
    ),
  },
  {
    date: 'June 2016 – June 2017, July – November 2018',
    location: 'CleanEarth Energy Ltd.',
    title: 'Project Management Assistant ',
    content: (
      <ul className="list-disc list-inside ml-5">
        • Worked to design, build, and operate large-scale solar PV and wind turbine renewable energy systems. • Adapted
        to various roles in the technical, electrical, planning, finance, and commercialdepartments. • Managed six solar
        installers and completing Front End Engineering Design studies.
      </ul>
    ),
  },
  {
    date: 'July 2017 – January 2018',
    location: 'University of Bath Biomechanics Department',
    title: 'Researcher and Designer',
    content: (
      <p>Developed a mixed flow pump additive prototype Cardiovascular LVAD (left ventricular assist device).</p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'khumbon@gmail.com',
      href: 'mailto:khumbon@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+44(0)7413 03101',
      href: 'tel:07413103101',
    },
    {
      type: ContactType.Location,
      text: 'London, United Kingdom',
      href: 'https://goo.gl/maps/4R9txPuptWntXbHC9',
    },
    {
      type: ContactType.Instagram,
      text: '@khumbo_n',
      href: 'https://www.instagram.com/khumbo_n/',
    },
    {
      type: ContactType.Github,
      text: 'khumbon',
      href: 'https://github.com/khumbon',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/khumbon'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/khumbo-nyirenda/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/khumbo_n/'},
];
