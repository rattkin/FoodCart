import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTimeComponent } from './order-time.component';
import { Store, StoreModule } from '@ngrx/store';

describe('OrderTimeComponent', () => {
  let component: OrderTimeComponent;
  let fixture: ComponentFixture<OrderTimeComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ OrderTimeComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTimeComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
