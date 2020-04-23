import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickSideDishComponent } from './pick-side-dish.component';
import { Store, StoreModule } from '@ngrx/store';

describe('PickSideDishComponent', () => {
  let component: PickSideDishComponent;
  let fixture: ComponentFixture<PickSideDishComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ PickSideDishComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickSideDishComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
