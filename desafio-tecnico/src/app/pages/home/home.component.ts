import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../services/finance.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  objectKeys = Object.keys;
  public dadosFinance: any;


  constructor(
    private financeService: FinanceService,
    public toastService:  ToastService
  ) {}


  ngOnInit(): void {
    this.carregarDadosFinanceiros();
  }


  carregarDadosFinanceiros(): void {
    this.financeService.getDados().subscribe(dados => {
      this.dadosFinance = dados;
    })
  }


  atualizarDadosFinanceiros(): void {
    this.carregarDadosFinanceiros();
    this.toastService.mostrarToast('Dados Atualizados com Sucesso', 'success');
  }


  getCorVariacao(variacao: number): string {
    if (variacao > 0) return 'green'; 
    else if (variacao < 0) return 'red'; 
    return 'black';
  }

}
