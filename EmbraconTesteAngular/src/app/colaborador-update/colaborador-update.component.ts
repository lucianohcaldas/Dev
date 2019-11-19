import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Colaborador } from '../colaborador';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaborador-update',
  templateUrl: './colaborador-update.component.html',
  styleUrls: ['./colaborador-update.component.css']
})
export class ColaboradorUpdateComponent implements OnInit {

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

  colaboradorUpdate() {
    this.colaboradorService.colaboradorUpdate(this.id, this.colaborador)
      .subscribe(data => console.log(data), error => console.log(error));
    this.colaborador = new Colaborador();
    this.gotoList();
  }

  onSubmit() {
    this.colaboradorUpdate();
  }

  gotoList() {
    this.router.navigate(['/colaborador']);
  }
}
