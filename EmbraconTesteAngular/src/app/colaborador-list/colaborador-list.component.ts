import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ColaboradorService } from '../colaborador.service';
import { Colaborador } from '../colaborador';

@Component({
  selector: 'app-colaborador-list',
  templateUrl: './colaborador-list.component.html',
  styleUrls: ['./colaborador-list.component.css']
})
export class ColaboradorListComponent implements OnInit {

  colaborador: Observable<Colaborador[]>;

  constructor(private colaboradorService: ColaboradorService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.colaborador = this.colaboradorService.getColaboradorList();
  }

  colaboradorDelete(id: number) {
    this.colaboradorService.colaboradorDelete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  colaboradorDetail(id: number) {
    this.router.navigate(['details', id]);
  }
}
