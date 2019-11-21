import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbancaComponent } from './abanca.component';

describe('AbancaComponent', () => {
  let component: AbancaComponent;
  let fixture: ComponentFixture<AbancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
