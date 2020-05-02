import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuComponent } from './top-menu.component';
import { Store, StoreModule } from '@ngrx/store';

describe('TopMenuComponent', () => {
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ TopMenuComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
