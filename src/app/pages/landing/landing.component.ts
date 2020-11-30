import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  time: string;
  hour: number;
  min: number;
  sec: number;
  amPm: string;
  greet: string;
  name= "David Rodriguez Garcia";
  title= "Software analyst and developer";
  landingpage: string;

  constructor() { }

  ngOnInit(): void {
    this.showTime()
    this.showGreet();
  }
  
 showTime() {
  const today =  new Date();
  this.hour = today.getHours(),
  this.min = today.getMinutes(),
  this.sec = today.getSeconds();
//Set AM or PM
  this.amPm= this.hour >= 12 ? 'PM' : 'AM';

//12Hr Format
  this.hour = this.hour % 12 || 12;
  setTimeout(()=>{
    this.showTime()
  }, 1000);
}

//Set backgrpunds
showGreet(){
  const time=new Date();
  const hournow=time.getHours();
  if(hournow < 12){
      //Sunrise
      this.landingpage="cofee";
      this.greet= "Good Morning";
  }else if(hournow<18){
      //Morning
      this.landingpage="morning";
      this.greet="Good Afternoon";
  }else if(hournow<20){
      //Evening
      this.landingpage="afternoon";
      this.greet="Good Afternoon";
  }else{
     this.landingpage="night";
      this.greet="Good Nignt";

  }

}


}
