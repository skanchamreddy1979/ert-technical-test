import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name: string;
  email: string;

  @Output()
  close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onClose(): void {
    this.close.emit();
  }

  onSubmit(): void {

  }

}
