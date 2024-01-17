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
        "Collaborated with cross functional teams on various projects and developed web apps for clients utilizing different technologies including Javascript, Typescript, JS frameworks (Angular, React), Bootstrap, Node.js, and AWS"
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
        "Executed web development plans through the CI/CD pipeline for production success for 2 million monthly web visitors.",
        "Improved loanDepot's catalog of web apps by implementing Angular components and responsive design, including Bootstrap, Material, custom utility classes and the grid system to meet project requirements.",
        "Created Angular and C#  features for Kentico CMS users based on cookie and local storage data.",
        "Refactored codebase for DRY (Don't Repeat Yourself) development and decoupled code into libraries.",
        "Fulfilled HELOC UI launch requirements in a tight schedule working with designers and team leads."
      ]
    },
    {
      dateRange: '2018 - 2022',
      company: 'SevenLogics',
      position: 'Front-End Engineer',
      bulletPoints: [
        "Key developer in building the front-end Angular web app for the production launch, resulting in thousands of members for its health care platform.",
        "Developed complex SaaS dashboards, data visualization tools, and work queue UI modules for both customer and business use.",
        "Implemented product scans and shipment workflow helping to increase revenue year after year.",
        "Customized intricate graphs and UI components for various data visualization tools for user analyzation.",
        "Praised for taking ownership of the front-end development and getting involved in critical requirements.",
        "Utilized Observables and RxJS for component architecture and state management with one-way data flow.",
        "Collaborated with backend engineers to consume RESTful APIs with Node.js",
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
