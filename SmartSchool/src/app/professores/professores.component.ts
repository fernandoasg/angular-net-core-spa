import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

    public titulo = "Professores"

    public professorSelecionado: string | undefined;

    public professores = [
        { id: 1, nome: "Arlindo", disciplina: 'Matemática' },
        { id: 2, nome: "Abigaiu", disciplina: 'Física' },
        { id: 3, nome: "Clotilde", disciplina: 'Português' },
        { id: 4, nome: "Fabiano", disciplina: 'Inglês' },
        { id: 5, nome: "Mariafalda", disciplina: 'Espanhol' },
        { id: 6, nome: "Paulinea", disciplina: 'Filosofia' },
        { id: 7, nome: "Sancho Pança", disciplina: 'História' },
    ]

    professorSelect(professor: any) {
        this.professorSelecionado = professor.nome;
    }

    voltar() {
        this.professorSelecionado = '';
    }
    
    constructor() { }

    ngOnInit() {
    }

}
