import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tradingForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.tradingForm = this.formBuilder.group({
      name: ['', Validators.required],
      action: ['', Validators.required],
      type: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.tradingForm.valid) {
      console.log("Complete!");
    }
  }

  onAmountInput() {
    const amountInput = this.tradingForm.get('amount');
    if (amountInput?.value < 1) {
      amountInput?.setValue(1);
    }
  }
}
