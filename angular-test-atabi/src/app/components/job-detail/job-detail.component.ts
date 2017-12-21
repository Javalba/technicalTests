import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  private idJob: String;
  private jobInfo: any;

  constructor(private route: ActivatedRoute, private jobAPI: JobService ) { }

  ngOnInit() {
    this.idJob = this.route.snapshot.paramMap.get('idJob'); //catch route param
    console.log("this.idJob");
    console.log(this.idJob);

    this.jobAPI.getJob(this.idJob).subscribe((res) => {
      console.log("RESPONSE JOBINFO");
      this.jobInfo = res;
      console.log(this.jobInfo);
    });

  }


}
