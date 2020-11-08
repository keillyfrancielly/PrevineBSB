import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlterarDadosPage } from './alterar-dados.page';

describe('AlterarDadosPage', () => {
  let component: AlterarDadosPage;
  let fixture: ComponentFixture<AlterarDadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarDadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlterarDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
