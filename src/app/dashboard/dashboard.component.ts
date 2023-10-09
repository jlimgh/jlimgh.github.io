import { Component, OnInit } from '@angular/core';
import { PortfolioDetailComponent } from '../portfolio-detail/portfolio-detail.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  portfolioSource = [
    {
      name: "loanDepot",
      title: 'Software Engineer',
      img: "../../assets/loandepot-card-portfolio.png",
      altImg: "loadDepot Website",
      imgLogo: "../../assets/loandepot-logo.svg",
      altImgLogo: "loanDopot Logo",
      desc: `Supported development of loanDepot’s full catalog of pages and internal tools utilizing Angular, Jamstack, and C#`,
      projectId: 'loanDepot'
    },
    {
      name: "Gojji Health",
      title: "Front-end Engineer",
      img: "../../assets/gojji-card-portfolio.png",
      altImg: "Gojji Workqueue",
      imgLogo: "../../assets/gojji-logo.svg",
      altImgLogo: "Gojji Logo",
      desc: `Front-end development of a SaaS healthcare app that strives to manage chronic conditions easily.`,
      projectId: 'gojjiHealth',
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
    }
  ]

  projectData: any = {
    portfolio: {
      title: 'Portfolio',
      techStack: 'Angular, Material, Bootstrap',
      images: ['../../assets/portfolio1.png'],
      repoLink: 'https://github.com/jlimgh/jlimgh.github.io',
      info: [
        `Portfolio website created with Angular and Material`,
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
        `Successfully led front-end development of Gojji's pilot launch consisting of 200 initial enrollments that led to a user base in the thousands`,
        'Consistently met tight deadlines and solved critical requirements working with business analysts, designers, and project managers',
        'Built SaaS dashboard and workqueue UI modules for both customer and business use, focusing on resuability and scalability',
        'Used Reactive forms and state management through service Observables',
        'Handled chaining multiple asyc calls through RxJS Observables',
      ]
    },
    loanDepot: {
      title: 'loanDepot',
      techStack: 'Angular (updated), NX, Kentico, NGRX, Jamstack, Bootstrap, Material, C#, Azure pipelines',
      images: [
        '../../../assets/loandepot-card-portfolio.png',
        '../../../assets/loandepot2.png'
      ],
      info: [
        `Supported development of loanDepot’s full catalog of pages and internal tools utilizing Angular, Jamstack, and C#`,
        `Built tools and UI features for internal NPM Libraries
        regarding stylesheet, UI features, reactive forms, and reactive state management.`,
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
      techStack: 'Angular 4, Bootstrap, Node.js, MongoDB',
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
    }
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
