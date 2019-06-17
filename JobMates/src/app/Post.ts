export class Post{
    jobid:number;
    name:String;
    //description:String;
    company:String;
    //domain:String;
    skillsSet:String[];
    minSalary:number;
    maxSalary:number;
    recruiter:String;
   // postDate:Date;
    //expiryDate:Date;
    //application:String[];
    experience:number;
    //active:boolean;
    location:String;


    constructor(jobid:number,
                name:String,
                company:String,
                skillsSet:String[],
                minSalary:number,
                maxSalary:number,
                recruiter:String,
                //postDate:Date,
                application:String[],
                experience:number,
                location:String)
    {
                this.jobid=jobid;
                this.name=name;
                this.company=company;
                this.skillsSet=skillsSet;
                this.minSalary=minSalary;
                this.maxSalary=maxSalary;
                this.recruiter=recruiter;
                //this.postDate=postDate;
                //this.application=application;
                this.experience=experience;
                this.location=location;

         }
}