import { Component, OnInit } from '@angular/core';
import { StanfordSleepinessData } from 'src/app/data/stanford-sleepiness-data';
import { SleepService } from '../../services/sleep.service';

@Component({
  selector: 'app-log-history',
  templateUrl: './log-history.page.html',
  styleUrls: ['./log-history.page.scss'],
})
export class LogHistoryPage implements OnInit {

  constructor(public sleepService:SleepService) { }

  ngOnInit() {
  }

  get allSleepData() {
		return SleepService.AllSleepData;
	}

	get allOvernightData() {
		return SleepService.AllOvernightData;
	}

	get allSleepinessData() {
		return SleepService.AllSleepinessData;
  }
  

  get scaleValue(){
    return StanfordSleepinessData.ScaleValues;
  }
  
  get logOvernight() {
    
    return SleepService.logOvernight;
  }

  get logSleepiness() {
    
		return SleepService.logSleepiness;
  }

  get logAll() {
    
		return SleepService.logAll;
  }
  
  ionViewWillLeave() {
    this.sleepService.Overnight(false);
    this.sleepService.Sleepiness(false);
    this.sleepService.All(false);
  } 
  

}
