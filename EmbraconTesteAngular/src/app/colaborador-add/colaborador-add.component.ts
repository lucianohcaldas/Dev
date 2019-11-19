import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Colaborador } from '../colaborador';
import { ColaboradorService } from '../colaborador.service';


@Component({
  selector: 'app-colaborador-add',
  templateUrl: './colaborador-add.component.html',
  styleUrls: ['./colaborador-add.component.css']
})
export class ColaboradorAddComponent implements OnInit {

  colaborador: Colaborador = new Colaborador();
  submitted = false;

  constructor(private colaboradorService: ColaboradorService,
              private router: Router) { }

  ngOnInit() {
  }
  newColaboraodr(): void {
    this.submitted = false;
    this.colaborador = new Colaborador();
  }

  save() {
    this.colaboradorService.colaboradorAdd(this.colaborador)
      .subscribe(data => console.log(data), error => console.log(error));
    this.colaborador = new Colaborador();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/colaborador']);
  }
}
