import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDialogComponent } from './order-dialog.component';
import { Store, StoreModule } from '@ngrx/store';

describe('OrderDialogComponent', () => {
  let component: OrderDialogComponent;
  let fixture: ComponentFixture<OrderDialogComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ OrderDialogComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDialogComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
