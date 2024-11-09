import { CommonModule } from '@angular/common';
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


  graficoColunas: Chart = new Chart();
  graficoDonut: Chart = new Chart();


  //função executada ao abrir o componente
  ngOnInit() {
   
    //dados do gráfico
    const dados = [
      ['Exemplo 1', 100],
      ['Exemplo 2', 150],
      ['Exemplo 3', 50],
      ['Exemplo 4', 250],
    ];


    //rótulos dos gráficos (legenda)
    const nomes = ['Exemplo 1', 'Exemplo 2', 'Exemplo 3', 'Exemplo 4'];


    //criar os gráficos
    this.criarGraficoDeColunas(dados, nomes);
    this.criarGraficoDeDonut(dados);
  }


  //função para desenhar o gráfico de colunas
  criarGraficoDeColunas(dados: any[], nomes: any[]) {
    this.graficoColunas = new Chart({
      chart: { type: 'column' },
      title: { text: 'Comparativo de clientes.' },
      subtitle: { text: 'Resumo de clientes cadastrados por periodo.' },
      series: [{ data: dados, type: undefined as any }],
      xAxis: { categories: nomes },
      legend: { enabled: false },
      credits: { enabled: false },
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


 

