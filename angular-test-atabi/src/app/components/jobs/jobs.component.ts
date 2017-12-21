import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobsList: any;
  page: any;

  constructor(private jobsService: JobService) {}

  ngOnInit() {
    this.jobsService.getAllJobs().subscribe((res) => {
      this.page = res.current_page;
      this.jobsList = res.data;

      console.log("JOBS!");
      console.log(this.jobsList);
    });
  }
}


