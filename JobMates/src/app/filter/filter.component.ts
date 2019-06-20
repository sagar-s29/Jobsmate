import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { JobService } from '../job.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit
{
  filterForm : FormGroup;
  constructor(private formBuilder: FormBuilder,private service: JobService) { }
  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      fulltime:[true],
      parttime: [true],
      internship:[true]
    });
  
    this.filterForm.valueChanges.subscribe(x => {
      this.service.getFilter(x);
      console.log(x);
    });
  }

}
