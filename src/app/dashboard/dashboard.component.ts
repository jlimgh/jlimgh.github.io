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
      name: "Portfolio",
      title: 'Website',
      img: "../../assets/portfolio1.png",
      altImg: "Portfolio Website",
      imgLogo: null,
      altImgLogo: null,
      desc: `This portfolio website was created with Angular and Material`,
      projectId: 'portfolio'
    },
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
      desc: `Front-end development of pilot and production apps for UI, agent dashboards, forms, and internal tools`,
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
      desc: `Specialty Pharmacy pilot for the use of pharmacists and clinicians. It keeps track of patient medications, orders, and insights.`,
      projectId: 'specialty'
    }
  ]

  projectData: any = {
    portfolio: {
      title: 'Portfolio',
      techStack: 'Angular, Material, Bootstrap',
      images: ["../../assets/portfolio1.png"],
      info: [
        `Portfolio website created with Angular and Material`,
      ]
    },
    gojjiHealth: {
      title: 'Gojji Health',
      techStack: 'Angular, Typescript, Bootstrap, Node.js , MongoDB, Highcharts, RESTful',
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
        'Built SaaS dashboard and workqueue modules for both customer and business use, focusing on resuability and scalability',
        'Key contributor for front-end performance tuning, maintenance, testing phases, and releases'
      ]
    },
    loanDepot: {
      title: 'loanDepot',
      techStack: 'Angular 12, NX, Typescript, NGRX, Jamstack, Bootstrap, Material, C#, Azure pipelines',
      images: [
        '../../../assets/loandepot-card-portfolio.png'
      ],
      info: [
        `Supported development of loanDepot’s full catalog of pages and internal tools utilizing Angular, Jamstack, and C#`,
        `Built tools and UI features for internal NPM Libraries
        regarding stylesheet, UI features, reactive forms, and reactive state management.`
      ]
    }, 
    taskPostings: {
      title: 'Task Postings',
      techStack: 'Angular 14, Reactive Form, Bootstrap, C#, .NET',
      info: [
        'Registration reactive form with custom validation example',
        'Container component holds the logic, while the child component is a reusable form component',
        'Client is hooked up to a local C# backend that responds with a mocked result'
      ],
      images: [
        '../../../assets/task-posting1.png'
      ]
    },
    registrationForm: {
      title: 'Registration Form Example',
      techStack: 'Angular 14, Reactive Form, Bootstrap, C#, .NET 7',
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
      title: 'Specialty',
      techStack: 'Angular 4, Typescript, Bootstrap, Node.js, MongoDB, Highcharts, RESTful',
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
