import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchwidgetComponent } from './searchwidget.component';

describe('SearchwidgetComponent', () => {
  let component: SearchwidgetComponent;
  let fixture: ComponentFixture<SearchwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
