
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataShare{
    private subject = new Subject<any>();

    sendData(data: any) {
        this.subject.next({ text: data });
    }

    
    getData(): Observable<any> {
        return this.subject.asObservable();
    }
  }