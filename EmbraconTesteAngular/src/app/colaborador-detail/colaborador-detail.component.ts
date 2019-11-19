import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Colaborador } from '../colaborador';
import { ColaboradorService } from '../colaborador.service';
import { ColaboradorListComponent } from '../colaborador-list/colaborador-list.component';


@Component({
  selector: 'app-colaborador-detail',
  templateUrl: './colaborador-detail.component.html',
  styleUrls: ['./colaborador-detail.component.css']
})
export class ColaboradorDetailComponent implements OnInit {

  id: number;
  colaborador: Colaborador;

  constructor(private route: ActivatedRoute, private router: Router,
              private colaboradorService: ColaboradorService) { }

  ngOnInit() {
    this.colaborador = new Colaborador();

    this.id = this.route.snapshot.params.id;

    this.colaboradorService.getColaborador(this.id)
      .subscribe(data => {
        console.log(data);
        this.colaborador = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['colaborador']);
  }

}
