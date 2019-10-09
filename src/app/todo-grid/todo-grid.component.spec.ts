import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TOdoGridComponent } from './todo-grid.component';

describe('TOdoGridComponent', () => {
  let component: TOdoGridComponent;
  let fixture: ComponentFixture<TOdoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TOdoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TOdoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
