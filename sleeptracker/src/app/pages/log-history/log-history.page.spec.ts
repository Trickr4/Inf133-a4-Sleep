import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogHistoryPage } from './log-history.page';

describe('LogHistoryPage', () => {
  let component: LogHistoryPage;
  let fixture: ComponentFixture<LogHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
