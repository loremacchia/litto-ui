import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
    
  // API url
  baseUrl = "http://192.168.1.136:8000/"
  // baseUrl = "http://b7ed-151-41-61-172.ngrok.io"
  
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload(file: File):Observable<string> {
      const formData = new FormData(); 
      formData.append("image", file, file.name);
      console.log(formData)
      return this.http.post(this.baseUrl+"/upload-img", formData).pipe(map(res => res as string))
  }

  uploadPdf(file: File):Observable<string> {
    const formData = new FormData(); 
    formData.append("pdf", file, file.name);
    console.log(file)
    return this.http.post(this.baseUrl+"/upload-pdf", formData).pipe(map(res => res as string))

  }
}