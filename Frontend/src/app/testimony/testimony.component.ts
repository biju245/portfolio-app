import { Component, OnInit } from '@angular/core';
import { TestimonyService } from '../testimony.service';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

  testimonials = [{
    guest :'',
    profession : '',    
    comment : ''
  }];  
  
  constructor(private myTestimony: TestimonyService) { }

  ngOnInit(): void {
    this.myTestimony.getTestimonials()
    .subscribe((data)=>{
      this.testimonials = JSON.parse(JSON.stringify(data));      
    })       
  }
  
}
