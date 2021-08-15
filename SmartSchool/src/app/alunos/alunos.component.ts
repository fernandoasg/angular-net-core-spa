import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

    public titulo = 'Alunos';

    public alunos = [
        { nome: 'Amanda' },
        { nome: 'Fernando' },
        { nome: 'Gabriela' },
        { nome: 'Marquinhos' },
        { nome: 'Nayra' },
        { nome: 'Older' },
        { nome: 'Wilson' }
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
