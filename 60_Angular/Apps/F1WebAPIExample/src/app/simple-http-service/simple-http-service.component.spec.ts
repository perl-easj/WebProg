import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHttpServiceComponent } from './simple-http-service.component';

describe('SimpleHttpServiceComponent', () => {
  let component: SimpleHttpServiceComponent;
  let fixture: ComponentFixture<SimpleHttpServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleHttpServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleHttpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
