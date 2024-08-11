import { Injectable } from '@angular/core';
import { TextModel } from '../models/textmodel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {
  private readonly apiUrl = 'https://localhost:7139/api/Synthesize/TextToSpeech';

  constructor(private http: HttpClient) {}

  synthesizeText(request: TextModel): Observable<Blob> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Blob>(this.apiUrl , request , { headers, responseType: 'blob' as 'json' });
  }
}
