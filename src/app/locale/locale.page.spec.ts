import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LocalePage } from './locale.page';

describe('LocalePage', () => {
  let component: LocalePage;
  let fixture: ComponentFixture<LocalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocalePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LocalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
