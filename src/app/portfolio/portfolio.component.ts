import { Component, OnInit } from '@angular/core';
import { PortfolioDetailComponent } from '../portfolio-detail/portfolio-detail.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioSource = [
    // {
    //   name: "Portfolio",
    //   title: 'Website',
    //   img: "../../assets/portfolio1.png",
    //   altImg: "Personal Website",
    //   imgLogo: null,
    //   altImgLogo: null,
    //   desc: `Personal website hosted on Github`,
    //   projectId: 'portfolio'
    // },
    {
      name: "loanDepot",
      title: 'Software Engineer',
      img: "../../assets/loandepot-card-portfolio.png",
      altImg: "loadDepot Website",
      imgLogo: "../../assets/loandepot-logo.svg",
      altImgLogo: "loanDopot Logo",
      desc: `Web development of loanDepot’s full catalog of pages and internal tools utilizing Angular, Jamstack, and C#`,
      projectId: 'loanDepot'
    },
    {
      name: "Gojji Health",
      title: "Front-end Engineer",
      img: "../../assets/gojji-card-portfolio.png",
      altImg: "Gojji Workqueue",
      imgLogo: "../../assets/gojji-logo.svg",
      altImgLogo: "Gojji Logo",
      desc: `Front-end development of a SaaS healthcare platform that manages patient progress - includes agent workflows, workqueues, and dashboards`,
      projectId: 'gojjiHealth',
    },
    {
      name: "Referral app",
      title: "Software Engineer",
      img: "../../assets/referrals1.png",
      altImg: "Referrals app dashboard",
      imgLogo: null,
      altImgLogo: null,
      desc: `React referral system app to add and update users on their referral statuses`,
      projectId: 'referrals',
    },
    {
      name: "Task Postings",
      title: 'Project',
      img: "../../assets/task-posting1.png",
      altImg: "Task Posting",
      imgLogo: null,
      altImgLogo: null,
      desc: `Posting app specifically for tasks and gigs inspired by Craigslist`,
      projectId: 'taskPostings'
    },
    {
      name: "Registration",
      title: 'Project',
      img: "../../assets/registration1.png",
      altImg: "Registration Form",
      imgLogo: null,
      altImgLogo: null,
      desc: `Registration reactive form with custom validation`,
      projectId: 'registrationForm'
    },
    {
      name: "Specialty",
      title: 'Front-end Engineer',
      img: "../../assets/specialty2.png",
      altImg: "Specialty Pharmacy Workflow",
      imgLogo: null,
      altImgLogo: "Specialty Logo",
      desc: `Specialty Pharmacy SaaS pilot for the use of pharmacists and clinicians to help patients`,
      projectId: 'specialty'
    },
    {
      name: "Gift List",
      title: 'Project',
      img: "../../assets/giftlist1.png",
      altImg: "Gift List",
      imgLogo: null,
      altImgLogo: null,
      desc: `React/Redux app for adding and searching gifts and calculating the total`,
      projectId: 'giftlist'
    },
    {
      name: "Moodboard",
      title: 'Project',
      img: "../../assets/moodboard1.png",
      altImg: "Moodboard Albums",
      imgLogo: null,
      altImgLogo: null,
      desc: `React/Redux app for adding users, moodboard albums, and photos`,
      projectId: 'moodboard'
    },
    {
      name: "Bloom",
      title: "Project",
      img: "../../assets/bloom1-min.png",
      altImg: "Bloom project",
      imgLogo: null,
      altImgLogo: null,
      desc: `Monitor multiple  plant’s health by receiving live updates of the plant’s water moisture, temperature, and light levels`,
      projectId: 'bloom'
    }
  ]

  projectData: any = {
    portfolio: {
      title: 'Portfolio',
      techStack: 'Angular, Material, Bootstrap',
      images: ['../../assets/portfolio1.png'],
      repoLink: 'https://github.com/jlimgh/jlimgh.github.io',
      info: [
        `Portfolio website`,
      ]
    },
    gojjiHealth: {
      title: 'Gojji Health',
      techStack: 'Angular, Typescript, RxJS, Bootstrap, Node.js , MongoDB, Highcharts, S3',
      images: [
        '../../../assets/gojji1.png',
        '../../../assets/gojji3.png',
        '../../../assets/gojji5png',
        '../../../assets/gojji6.png',
        '../../../assets/gojji7.png',
        '../../../assets/gojji8.png'
      ],
      info: [
        `Directed front-end development crucial to its successful launch. Resulted in acquiring tens of thousands of members for the healthcare platform, substantially boosting revenue.`,
          'Developed complex SaaS dashboards, data visualization tools, and UI modules, enhancing user response times and analytical capabilities by 30%. Utilized Angular, Bootstrap, SCSS, Node.js, and Highcharts.',
          'Handled Reactive forms, state management, and async RESTful api through service RxJs and Observables',
      ]
    },
    referrals: {
      title: 'Referral app',
      techStack: 'React, Node.js, MongoDB, Tailwind, Flowbite',
      images: [
        '../../../assets/referrals1.png',
        '../../../assets/referrals2.png',
        '../../../assets/referrals3.png',
      ],
      info: [
        `Referral system to add and update users on their referral statuses`,
        `Utilized React and RTK Query method to contruct dashboard and work queue components`,
      ]
    },
    loanDepot: {
      title: 'loanDepot',
      techStack: 'Angular, TypeScript, NX, Kentico, NGRX, Jamstack, Bootstrap, Material, C#, Azure pipelines',
      images: [
        '../../../assets/loandepot-card-portfolio.png',
        '../../../assets/loandepot2.png'
      ],
      info: [
        'Supported development of loanDepot’s full catalog of web applications and internal tools',
        `Built tools and UI features for internal NPM Libraries regarding stylesheet, UI features, reactive forms, and reactive state management.`,
          `Automated functionalities in Angular, leveraging state, cookie, and local storage data. Transformed manual tasks into streamlined features, enhancing efficiency and user experience.`
      ]
    }, 
    taskPostings: {
      title: 'Task Postings',
      techStack: 'Angular 14, Bootstrap, Material, Node.js, MongoDB',
      repoLink: 'https://github.com/jlimgh/task-postings',
      info: [
        'Project app that creates postings for tasks and gigs for users',
        'Implemented forms, routing for different dashboards, and lazy loading modules',
        'Created RESTful API used with Node.js and MongoDB backend'
      ],
      images: [
        '../../../assets/task-posting1.png',
        '../../../assets/task-posting2.png'
      ]
    },
    registrationForm: {
      title: 'Registration Form Example',
      techStack: 'Angular 14, Reactive Form, Bootstrap, C#, .NET 7',
      repoLink: 'https://github.com/jlimgh/emdsregister',
      info: [
        'Registration reactive form with custom validation example',
        'Container component holds the logic, while the child component is a reusable form component',
        'Client is hooked up to a local C# backend that responds with a mocked result'
      ],
      images: [
        '../../../assets/registration1.png'
      ]
    },
    specialty: {
      title: 'Specialty Pharmacy',
      techStack: 'Angular, Bootstrap, Node.js, MongoDB',
      info: [
        'SaaS for the use of pharmacists and clinicians to help patients',
        'Implemented dashboard requirements for patient features and user workflows',
        'Utilized reactive forms, RxJS, routing, and container and presentational components',
        'One way data flow through the use of a data store class and observables inside a service'
      ],
      images: [
        '../../../assets/specialty1.png',
        '../../../assets/specialty2.png',
        '../../../assets/specialty3.png',
        '../../../assets/specialty4.png'
      ]
    },
    giftlist: {
      title: 'Gift List Calculator',
      techStack: 'React, Redux, Bulma',
      info: [
        'Users can add gifts from sender and it will show the total amount',
        'Search feature and duplicate gift notification'
      ],
      images: [
        '../../../assets/giftlist1.png'
      ]
    },
    moodboard: {
      title: 'Moodboard Album',
      techStack: 'React, Redux, Tailwind',
      info: [
        'Users can have multiple albums, and each album can have multiple moodboard photos',
      ],
      images: [
        '../../../assets/moodboard1.png'
      ]
    },
    bloom: {
      title: 'loanDepot',
      techStack: 'AngularJS, Node.js, MySQL, Bootstrap',
      images: [
        '../../../assets/bloom1-min.png',
        '../../../assets/bloom2-min.png',
        '../../../assets/bloom3-min.png',
      ],
      info: [
        `Implemented RESTful API calls to m2x server and and rendered live data from microcontroller hardware.`,
        `Created plant notification triggers from m2x server to notify users when plant status levels are in danger`,
        `Incorporated Bootstrap and CSS to build overall user functionality design and responsiveness.`
      ]
    }, 
  }

  constructor(public dialog: MatDialog) { }

  openDialog(projectId: string) {
    const selectedProject = this.projectData[projectId];
    const dialogRef = this.dialog.open(PortfolioDetailComponent, {
      data: selectedProject
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
