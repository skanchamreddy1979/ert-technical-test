import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
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
