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
        "Collaborated with cross functional teams on various projects and developed web apps for clients utilizing different technologies including Javascript, Typescript, modern JS frameworks (Angular, React), Bootstrap, Node.js, and AWS"
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
        "Executed web requirements through the CI/CD pipeline for production success for 2 million monthly online visitors, contributing to the brainstorming and development of these features.",
        "Improved and solved UI issues throughout loanDepot's catalog of web apps by implementing component logic and responsive design, including Bootstrap, Material, custom utility classes.",
        "Created Angular directives and C# features for Kentico CMS users based on cookie and local storage data, automating manual work into functional features.",
        "Developed tools and reusable UI features (Angular/TypeScript) for internal NPM libraries, focusing on stylesheets, custom components, reactive forms, and reactive state management for DRY (Don't Repeat Yourself) development.",
        "Fulfilled HELOC UI launch requirements in a tight schedule working with designers and team leads."
      ]
    },
    {
      dateRange: '2018 - 2022',
      company: 'SevenLogics',
      position: 'Front-End Engineer',
      bulletPoints: [
        "Key developer in building the front-end Angular web app for the production launch, resulting in thousands of members for its health care platform.",
        "Created complex SaaS dashboards, data visualization tools, and work queue UI modules from design mockups for both customer and business use.",
        "Developed the UI code for shipment workflows and product scans for thousands of orders, increasing efficiency and volume.",
        "Customized intricate graphs and UI components for various data visualization tools for user analyzation.",
        "Praised for taking ownership of the front-end development and getting involved in critical requirements.",
        "Utilized Observables and RxJS for component architecture and state management with one-way data flow.",
        "Collaborated with backend engineers to consume RESTful APIs with Node.js",
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
