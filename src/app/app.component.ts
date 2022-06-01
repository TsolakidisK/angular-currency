import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CurrencyMaskConfig } from 'ngx-currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup = this.fb.group({
    'amount': ['']
  })

  currencyOptions: Partial<CurrencyMaskConfig> = {
    align: 'left',
    decimal: '.',
    thousands: "'",
    prefix: '',
    min: -9.99,
    max: 9.99,
    allowNegative: true
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.form.value.amount);
  }
}