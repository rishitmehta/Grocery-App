import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriestabPage } from './categoriestab.page';

describe('CategoriestabPage', () => {
  let component: CategoriestabPage;
  let fixture: ComponentFixture<CategoriestabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriestabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriestabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
