import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {


  constructor(private http: HttpClient) { 
    this.http = http;
  }

  get(url:string) {
    return this.http.get(url);
  }
  post(url:string, data:any) {
    return this.http.post(url, data);
  }
  put(url:string, data:any) {
    return this.http.put(url, data);
  }
  delete(url:string) {
    return this.http.delete(url);
  }
  
}
