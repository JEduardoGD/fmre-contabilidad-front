import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { BancoDto } from 'src/app/dto/banco.dto';

@Component({
  selector: 'app-captura-movimiento',
  templateUrl: './captura-movimiento.component.html',
  styleUrls: ['./captura-movimiento.component.scss']
})
export class CapturaMovimientoComponent implements OnInit {

  bancos: BancoDto[] = [];
  selectedBanco: BancoDto = {
    _id: 0,
    descripcion: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBancos().subscribe((data: BancoDto[]) => {
      console.log(data);
      this.bancos = data;
    });
  }

}
