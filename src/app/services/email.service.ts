import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
 emailID = new Subject();
  constructor() { }
}
