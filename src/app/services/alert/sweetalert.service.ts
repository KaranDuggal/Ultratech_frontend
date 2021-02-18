import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  constructor() { }
  apiResponseAlert() {
    Swal.fire({
      toast: true,
      position: 'top',
      icon: 'success',
      title: 'done',
      showConfirmButton: false,
      timer: 1500
    })
  }
  errorAlert() {
    Swal.fire({
      toast: true,
      position: 'top',
      icon: 'error',
      title: 'done',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
