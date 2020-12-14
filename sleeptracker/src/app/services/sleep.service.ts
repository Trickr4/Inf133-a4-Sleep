import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = false;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
  public static AllSleepinessData:StanfordSleepinessData[] = [];
  public static logAll:boolean;
  public static logOvernight:boolean;
  public static logSleepiness:boolean;

  constructor(private storage:Storage) {
  	if(SleepService.LoadDefaultData) {
      this.addDefaultData();
  		SleepService.LoadDefaultData = false;
    }
    this.storage.get("AllSleepData").then( (data) => {
      if(data){
        SleepService.AllSleepData = data;
        console.log(SleepService.AllSleepData);
      }
    } );
    
    this.storage.get("AllOvernightData").then( (data) => {
      if(data){
        SleepService.AllOvernightData = data;
        console.log(SleepService.AllOvernightData);
      }
    } );
    
    this.storage.get("AllSleepinessData").then( (data) => {
      console.log(data);
      if(data){
        SleepService.AllSleepinessData = data;
        console.log(SleepService.AllSleepinessData);
      }
    } );

    this.storage.get("logOvernight").then( (data) => {
      if(data){
        SleepService.logOvernight = data;
      }
    } );

    this.storage.get("logSleepiness").then( (data) => {
      if(data){
        SleepService.logSleepiness = data;
      }
    } );
    
    this.storage.get("logAll").then( (data) => {
      if(data){
        SleepService.logAll = data;
      }
    } );
    
  }

  public Overnight(val :boolean){
    SleepService.logOvernight = val;
    this.storage.set("logOvernight", SleepService.logOvernight);
  }

  public Sleepiness(val :boolean){
    SleepService.logSleepiness = val;
    this.storage.set("logSleepiness", SleepService.logSleepiness);
  }

  public All(val :boolean){
    SleepService.logAll = val;
    this.storage.set("logAll", SleepService.logAll);
  }

  private addDefaultData() {
    this.logOvernightData(new OvernightSleepData(new Date('November 17, 2019 01:03:00'), new Date('November 17, 2019 09:25:00')));
    this.logSleepinessData(new StanfordSleepinessData(4, new Date('November 17, 2019 14:38:00')));
    this.logOvernightData(new OvernightSleepData(new Date('November 18, 2019 23:11:00'), new Date('November 18, 2019 08:03:00')));
  }

  public logOvernightData(sleepData:OvernightSleepData) {
  	SleepService.AllSleepData.push(sleepData);
    SleepService.AllOvernightData.push(sleepData);
    this.storage.set("AllSleepData", SleepService.AllSleepData);
    this.storage.set("AllOvernightData", SleepService.AllOvernightData);
    
  }

  public logSleepinessData(sleepData:StanfordSleepinessData) {
  	SleepService.AllSleepData.push(sleepData);
    SleepService.AllSleepinessData.push(sleepData);
    this.storage.set("AllSleepData", SleepService.AllSleepData);
    this.storage.set("AllSleepinessData", SleepService.AllSleepinessData);
  }

  async clearData(){
		await this.storage.clear();
	}
}
