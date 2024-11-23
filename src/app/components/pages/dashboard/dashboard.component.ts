import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ChartModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {


  graficoDonut: Chart = new Chart();
  dados: any[][] = [];


  //método construtor
  constructor(
    private httpClient: HttpClient
  ) {
  }


  //função executada ao abrir o componente
  ngOnInit() {


    this.httpClient.get('http://localhost:8081/api/dashboard')
      .subscribe({
        next: (data) => {
         
          //dados do gráfico
          this.dados = (data as any[])
            .map(item => [item.tipo, item.quantidade]);


          //criar os gráficos
          this.criarGraficoDeDonut(this.dados);          
        }
      });
  }


  //função para desenhar o gráfico de donut
  criarGraficoDeDonut(dados: any[]) {
    this.graficoDonut = new Chart({
      chart: { type: 'pie' },
      title: { text: 'Total de clientes por tipo' },
      subtitle: { text: 'Comparativo de clientes por tipo.' },
      plotOptions: {
        pie: {
          innerSize: '50%',
          allowPointSelect: true,
          cursor: 'pointer',
        },
      },
      series: [{ data: dados, type: undefined as any }],
      legend: { enabled: false },
      credits: { enabled: false },
    });
  }
}





