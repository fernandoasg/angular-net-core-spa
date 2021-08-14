import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

    titulo = "Professores"

    public professores = [
        { nome: "Arlindo" },
        { nome: "Abigaiu" },
        { nome: "Clotilde" },
        { nome: "Fabiano" },
        { nome: "Mariafalda" },
        { nome: "Paulinea" },
        { nome: "Sancho Pança" },
    ]

    constructor() { }

    ngOnInit() {
    }

}
