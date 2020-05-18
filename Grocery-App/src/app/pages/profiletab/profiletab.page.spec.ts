import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfiletabPage } from './profiletab.page';

describe('ProfiletabPage', () => {
  let component: ProfiletabPage;
  let fixture: ComponentFixture<ProfiletabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiletabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfiletabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
