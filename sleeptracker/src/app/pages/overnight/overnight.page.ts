import { Component, OnInit } from '@angular/core';
import { SleepService } from 'src/app/services/sleep.service';
import { SleepData } from '../../data/sleep-data';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';

@Component({
  selector: 'app-overnight',
  templateUrl: './overnight.page.html',
  styleUrls: ['./overnight.page.scss'],
})
export class OvernightPage implements OnInit {

  startTime:Date;
  endTime:Date;
  errmsg:string;
  donemsg:string;
  constructor(public sleepService:SleepService) { }

  ngOnInit() {
  }

  logInfo(){
    if( (this.startTime && this.endTime)){
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var sD = new Date(this.startTime);//'November 17, 2019 01:03:00'
      var start = new Date(months[sD.getMonth()]+" "+(sD.getDate()-1)+", "+sD.getFullYear()+" "+sD.getHours()+":"+sD.getMinutes()+":"+sD.getSeconds());
      var eD = new Date(this.endTime);
      var end = new Date(months[eD.getMonth()]+" "+(eD.getDate())+", "+eD.getFullYear()+" "+eD.getHours()+":"+eD.getMinutes()+":"+eD.getSeconds());
      this.sleepService.logOvernightData(new OvernightSleepData(start,end));
      this.errmsg = "";
      this.donemsg = "Data logged!";
    }
    else
    {
      this.donemsg = "";
      this.errmsg = "Select both start time and end time";
      
    }
  }

  dataLog(){
    this.sleepService.Overnight(true);
  }

}
