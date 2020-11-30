import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EstadobusquedaService {
  // Subject es un tipo especial de observable que permite que los valores se compartan a muchos observadores.
  public _subject = new Subject<boolean>();
  public event = this._subject.asObservable();

  public publish(data: boolean) {
    this._subject.next(data);
  }

}


