import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: false,
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit {

  mensagem: string = "";
  status: string = "";

  constructor(
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.toastService.toastMessage$.subscribe((msg) =>{
      if(msg){
        this.mensagem = msg.message;
        this.status = msg.status;
      }
    })
  }
}
