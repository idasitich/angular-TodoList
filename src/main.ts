import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div id="Container">
  <ol id ="list">
  <li *ngFor="let member of members">{{member}}</li>
  </ol>
    </div>
  <input #val type="text" id="input" (input)="onInput(val.value)" > 
  <button (click)="addMember()" id="add">add</button>
  <button (click)="clear()" id="clear">delete</button>
  `,
})
export class App {
  name = 'Angular';
  newMember: string = '';
  members: string[] = [];

  onInput(value: string) {
    this.newMember = value;
    console.log(value);
  }
  addMember = () => {
    +this.members.push(this.newMember);
    console.log(this.members);
  };

  clear = () => {
    this.members.pop();
  };
}

bootstrapApplication(App);
