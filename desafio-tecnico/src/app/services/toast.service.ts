import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  status?: string;
  private toastMessageSubject = new BehaviorSubject<{ message: string, status: string } | null>(null);
  toastMessage$ = this.toastMessageSubject.asObservable();

  constructor() { }

  mostrarToast(message: string, status: string): void {
    const toastEl = document.getElementById('toast');
    const toast = new (window as any).bootstrap.Toast(toastEl);
    this.toastMessageSubject.next({message, status});
    toast.show();
  }
}
