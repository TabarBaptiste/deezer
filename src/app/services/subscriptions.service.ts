import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deezer } from '../model/Deezer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  baseUrl = '../../assets/data/subscriptions.json';

  constructor(private http: HttpClient) { }

  getSubscriptions(): Observable<Deezer[]> {
    return this.http.get<Deezer[]>(this.baseUrl);
  }
  
}
