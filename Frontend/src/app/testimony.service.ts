import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonyService {

  constructor(public http:HttpClient) { }

getTestimonials()
{
  return this.http.get("http://localhost:3000/testimony");
}
}


