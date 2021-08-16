import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

    public titulo = 'Alunos';

    public alunos = [
        { id: 1, nome: 'Amanda', sobrenome: 'Kent', telefone: 321321, },
        { id: 2, nome: 'Fernando', sobrenome: 'Augusto', telefone: 159159, },
        { id: 3, nome: 'Gabriela', sobrenome: 'Tedezco', telefone: 156156, },
        { id: 4, nome: 'Marquinhos', sobrenome: 'Relampago', telefone: 741741, },
        { id: 5, nome: 'Nayra', sobrenome: 'Nira', telefone: 954954, },
        { id: 6, nome: 'Older', sobrenome: 'Young', telefone: 658658, },
        { id: 7, nome: 'Wilson', sobrenome: 'Afonso', telefone: 656565, }
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
