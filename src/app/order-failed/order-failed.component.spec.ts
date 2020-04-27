import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFailedComponent } from './order-failed.component';
import { Store, StoreModule } from '@ngrx/store';

describe('OrderFailedComponent', () => {
  let component: OrderFailedComponent;
  let fixture: ComponentFixture<OrderFailedComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ OrderFailedComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFailedComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
