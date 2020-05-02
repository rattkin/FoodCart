import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListComponent } from './order-button.component';
import { Store, StoreModule } from '@ngrx/store';

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ OrderListComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
