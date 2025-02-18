import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinanceService } from '../../services/finance.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-conversor-de-moedas',
  standalone: false,
  templateUrl: './conversor-de-moedas.component.html',
  styleUrl: './conversor-de-moedas.component.css'
})
export class ConversorDeMoedasComponent implements OnInit {
  FormularioConversao!: FormGroup;
  resultadoConversao: string = "";


  constructor(
    private formBuilder: FormBuilder,
    private financeService: FinanceService,
    private toastService: ToastService
  ) {}


  ngOnInit(): void {
    this.FormularioConversao = this.formBuilder.group ({
      valor: ['', [Validators.required, Validators.min(0.01)]],
      moedaOrigem: ['', [Validators.required]],
      moedaDestino: ['', [Validators.required]]
    })
  }


  converter(): void {
    if (this.FormularioConversao.invalid) {
      this.toastService.mostrarToast('Dados Inválidos! Por favor verifique e tente novamente.', 'warning');
      return;
    }
  
    const { 
      valor, 
      moedaOrigem, 
      moedaDestino 
    } = this.FormularioConversao.value;
  
    this.financeService.getDados().subscribe(
      data => {
        const cotacao = data.results.currencies;
        let cotacaoOrigem = cotacao[moedaOrigem]?.buy;
        let cotacaoDestino = cotacao[moedaDestino]?.buy;

        if(moedaOrigem === "BRL") {
          cotacaoOrigem = 1;
        } else if (moedaDestino === "BRL") {
          cotacaoDestino = 1;
        }
  
        if (cotacaoOrigem && cotacaoDestino) {
          const valorConvertido = (valor / cotacaoOrigem) * cotacaoDestino;
          this.toastService.mostrarToast('Conversão realizada com sucesso!', 'success');
          this.resultadoConversao = `${valor.toLocaleString('pt-BR', { style: 'currency', currency: moedaOrigem })} → ${valorConvertido.toLocaleString('pt-BR', { style: 'currency', currency: moedaDestino })}`;
        } else {
          this.toastService.mostrarToast('Não foi possível obter a taxa de câmbio.', 'danger');
        }
      },
      () => {
        this.toastService.mostrarToast('Erro ao buscar as taxas de câmbio.', 'danger');
      }
    );
  }
  
  
  inverterMoedas(): void {
    const { 
      moedaOrigem, 
      moedaDestino 
    } = this.FormularioConversao.value;

    this.FormularioConversao.patchValue({
      moedaOrigem: moedaDestino,
      moedaDestino: moedaOrigem
    });
  }
}
