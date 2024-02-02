import { Component, OnInit } from '@angular/core';
import { CardWide } from '../models/card-wide';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  resumeData: CardWide[] = [
    {
      dateRange: 'May 2023 - Present',
      company: 'Freelance',
      position: 'Front-End Engineer',
      bulletPoints: [
        "Collaborated extensively with cross-functional teams on diverse projects, contributing to the development of web applications for clients. Applied a range of technologies, including JavaScript, TypeScript, modern JS frameworks, Bootstrap, Node.js, and AWS, to deliver versatile and impactful solutions."
      ]
    },
    {
      dateRange: 'Sept 2022 - May 2023',
      company: 'Sabbatical',
      position: null,
      bulletPoints: [
        "Layoff",
        "Newborn - took personal paternity time off",
      ]
    },
    {
      dateRange: 'Feb 2022 - Aug 2022',
      company: 'loanDepot',
      position: 'Software Engineer',
      bulletPoints: [
        "Executed web requirements in compliance with CI/CD practices within the Azure pipeline, ensuring smooth deployment for a user base of 2 million monthly online visitors.  Actively contributed to the ideation and development processes of features, fostering a collaborative environment for innovative solutions.",
        "Enhanced and resolved UI challenges across loanDepot's suite of web applications by deploying Typescript component logic and responsive design strategies, including Bootstrap.js, Material, and custom utility classes.",
        "Utilized state, cookie, and local storage data to implement automated functionalities within the Jamstack ecosystem, employing Angular, Kentico CMS, and C# backend services. Successfully transformed manual tasks into streamlined features, resulting in heightened efficiency and an improved user experience.",
        "Engineered tools and reusable UI features using Angular, TypeScript, and SCSS within internal NPM libraries. Contributions encompassed updating stylesheets, developing custom components, implementing reactive forms, and establishing effective state management to uphold DRY (Don't Repeat Yourself) development practices.",
        "Fulfilled HELOC UI launch requirements in a tight schedule working with designers and team leads."
      ]
    },
    {
      dateRange: '2018 - 2022',
      company: 'SevenLogics',
      position: 'Front-End Engineer',
      bulletPoints: [
        "Led the front-end development initiative for a chronic disease management app, playing a pivotal role in its successful production launch. This effort led to the acquisition of tens of thousands of members for the healthcare platform, contributing significantly to the notable increase in revenue.",
        "Engineered intricate SaaS dashboards, data visualization tools, and work queue UI modules, improving response times and analytical capabilities for users by 30%. Employed a tech stack of Angular, Bootstrap, SCSS, Node.js and Highcharts.",
        "Executed UI code development for shipment workflows and product scans across thousands of orders, significantly enhancing operational efficiency and order processing volume.",
        "Leveraging responsive web design principles, I developed a mobile web app empowering users to assess their condition and input responses, facilitating the generation of a personalized game plan tailored to their health.",
        "Praised for taking ownership of the front-end development and getting involved in critical requirements."
      ]
    },
    {
      dateRange: 'Projects',
      company: null,
      position: null,
      bulletPoints: [
        "Gojji - Healthcare web app showcasing dashboards, work queues, and data visualization for workflow mgmt",
        "Specialty - Pharmacy driven dashboard for medical flows regarding patient health and medication history",
        "Bloom - Plant monitoring app keeping track of multiple plant’s water moisture, temperature, and light levels",
        "Tee Time Getter - Chrome ext. to obtain golf tee times utilizing extension documentation - Vanilla JS. ",
        "Task Postings - Pilot web app for side gig posts for posters and workers - Angular, Material, MongoDB",
        "Mood board creator - Generate users and mood board albums for photos - React.js, Redux, Tailwind",
        "Gift Tracker - Users can add and search gifts. WIll show total amount - React.js, Redux, Bulma"
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
