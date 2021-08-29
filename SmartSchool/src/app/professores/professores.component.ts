import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

    public modalRef?: BsModalRef;
    public titulo = "Professores"

    public professorSelecionado: Professor | null | undefined;

    public professores = [
        { id: 1, nome: "Arlindo", disciplina: 'Matemática' },
        { id: 2, nome: "Abigaiu", disciplina: 'Física' },
        { id: 3, nome: "Clotilde", disciplina: 'Português' },
        { id: 4, nome: "Fabiano", disciplina: 'Inglês' },
        { id: 5, nome: "Mariafalda", disciplina: 'Espanhol' },
        { id: 6, nome: "Paulinea", disciplina: 'Filosofia' },
        { id: 7, nome: "Sancho Pança", disciplina: 'História' },
    ]
    
    constructor(private modalService: BsModalService) { }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    professorSelect(professor: Professor) {
        this.professorSelecionado = professor;
    }

    voltar() {
        this.professorSelecionado = null;
    }

    ngOnInit() {
    }
}
