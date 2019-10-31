import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedMainComponent } from './unauthorized-main.component';

describe('UnauthorizedMainComponent', () => {
  let component: UnauthorizedMainComponent;
  let fixture: ComponentFixture<UnauthorizedMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthorizedMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizedMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
