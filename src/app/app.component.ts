import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name = 'James';
  age=18;
  img = 'https://i.ytimg.com/vi/jyUDjCzbDZc/maxresdefault.jpg';
  btnDisabled = true;
  person = {
    name: 'James',
    age:18,
    avatar:'https://i.ytimg.com/vi/jyUDjCzbDZc/maxresdefault.jpg'
  }

  names: string[] = ['James','Rodrigo','Eduardo'];
  newName = "";

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }
}