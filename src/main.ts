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
  <li *ngFor="let member of members">{{member + " "}}<button (click)="clear()" id="clear">delete</button></li>
  </ol>
    </div>
  <input #val type="text" id="input" (input)="onInput(val.value)" > 
  <button (click)="addMember()" id="add">add</button>
  <p style="color:red">{{error}}</p>
  `,
})
export class App {
  name = 'Angular';
  newMember: string = '';
  error : string ='';
  members: string[] = [];

  onInput(value: string) {
    this.newMember = value;
    console.log(value);
  }
  addMember = () => {
    if (!this.newMember) {
     this.error="data cant empty"
    }else{
    +this.members.push(this.newMember);
    this.error="";
    console.log(this.members);
    }
  };

  clear = () => {
    this.members.pop();
  };
}

bootstrapApplication(App);
