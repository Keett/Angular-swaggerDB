import { Injectable } from '@angular/core';
import { Product } from '../product/product';
declare let alertify: any;

@Injectable({
  providedIn: 'root'    //root dosyası global bir service olduğu anlamına gelmektedir.
})
export class AlertifyService {

  constructor() { }
  success(message: string | undefined) {
    alertify.success(message + " Eklendi");
  }
  error(message: string | undefined) {
    alertify.error(message + " Eklenemedi. Bir sorun var.");
  }
  warning(message: string | undefined) {
    alertify.warning(message + " Uyarı");
  }

}
