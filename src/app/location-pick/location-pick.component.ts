import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectLocation } from '../state/selectors';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AllowedLocations } from '../config';
import { changeLocation } from '../actions/order.actions';

@Component({
  selector: 'app-location-pick',
  templateUrl: './location-pick.component.html',
  styleUrls: ['./location-pick.component.scss']
})
export class LocationPickComponent implements OnInit {
  public selectLocation = this.store.pipe(select(selectLocation));

  public locationForm: FormGroup = this.formBuilder.group({
    location: ['']
  });
  public AllowedLocations = AllowedLocations;
  public get location() { return this.locationForm.get('location'); }

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.selectLocation.subscribe(location =>
      this.locationForm.controls.location.setValue(location)
    );
  }
  locationChange() {
    this.store.dispatch(changeLocation({ location: this.location.value }));
  }


}
