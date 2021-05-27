import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BienestarVegetalPage } from './bienestar-vegetal.page';

describe('BienestarVegetalPage', () => {
  let component: BienestarVegetalPage;
  let fixture: ComponentFixture<BienestarVegetalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienestarVegetalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BienestarVegetalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
