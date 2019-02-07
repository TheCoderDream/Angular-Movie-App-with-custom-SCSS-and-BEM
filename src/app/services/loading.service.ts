import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadingState = new Subject<boolean>();
  constructor() { }
}
