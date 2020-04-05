import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContainmentPage } from './containment.page';

describe('ContainmentPage', () => {
  let component: ContainmentPage;
  let fixture: ComponentFixture<ContainmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContainmentPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContainmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
