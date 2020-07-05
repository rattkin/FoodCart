import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationPickComponent } from './location-pick.component';
import { Store, StoreModule } from '@ngrx/store';

describe('LocationPickComponent', () => {
  let component: LocationPickComponent;
  let fixture: ComponentFixture<LocationPickComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ LocationPickComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationPickComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
