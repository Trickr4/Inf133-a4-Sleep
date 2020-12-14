import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	hideclear:boolean = false;
	hideYes:boolean = true;
	hideNo:boolean = true;
  constructor(public sleepService:SleepService) {

	}

	ngOnInit() {
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	get allOvernightData() {
		return SleepService.AllOvernightData;
	}

	get allSleepinessData() {
		return SleepService.AllSleepinessData;
	}

	dataLog(){
		this.sleepService.All(true);
	  }
	

	clearData(){
		this.sleepService.clearData();
		window.location.reload();
	}

	promptClear(){
		if(!this.hideclear)
		{
			this.hideclear = true;
			this.hideYes = false;
			this.hideNo = false;
		}
		else
		{
			this.hideclear = false;
			this.hideYes = true;
			this.hideNo = true;
		}
	}

}
