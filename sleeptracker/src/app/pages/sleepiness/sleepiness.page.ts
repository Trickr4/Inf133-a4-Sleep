import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { SleepService } from '../../services/sleep.service';
import { SleepData } from '../../data/sleep-data';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {
  framework = '';
  optionNum;
  errmsg:string;
  donemsg:string;
  constructor(private pickerctrl: PickerController, public sleepService:SleepService) { }

  ngOnInit() {
  }

  async showPicker(){
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Done'
        }
      ],
      columns: [
        {
        name: 'framework',
        options: [
          {text: StanfordSleepinessData.ScaleValues[1], value: 1},
          {text: StanfordSleepinessData.ScaleValues[2], value: 2},
          {text: StanfordSleepinessData.ScaleValues[3], value: 3},
          {text: StanfordSleepinessData.ScaleValues[4], value: 4},
          {text: StanfordSleepinessData.ScaleValues[5], value: 5},
          {text: StanfordSleepinessData.ScaleValues[6], value: 6},
          {text: StanfordSleepinessData.ScaleValues[7], value: 7},
        ]
        }

      ]
    };

    let picker  = await this.pickerctrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('framework');
      this.optionNum = col.selectedIndex;
      this.framework = col.options[col.selectedIndex].text;
    })
  }

  logInfo(){
    if(this.optionNum != null)
    {
      this.sleepService.logSleepinessData(new StanfordSleepinessData(this.optionNum, new Date()));
      this.errmsg = '';
      this.donemsg = "Data logged!";
    }
    else
    {
      this.donemsg = "";
      this.errmsg = "Select an option";
    }
  }

  dataLog(){
    this.sleepService.Sleepiness(true);
  }


}
