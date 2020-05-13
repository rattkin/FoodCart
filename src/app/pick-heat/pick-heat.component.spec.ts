import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickHeatComponent } from './pick-heat.component';
import { Store, StoreModule } from '@ngrx/store';

describe('PickHeatComponent', () => {
  let component: PickHeatComponent;
  let fixture: ComponentFixture<PickHeatComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ PickHeatComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickHeatComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
