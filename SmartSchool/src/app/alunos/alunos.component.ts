import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

    public alunoForm!: FormGroup;
    public titulo = 'Alunos';
    public alunoSelecionado: Aluno | null | undefined;
    public textoSimples: string | undefined;

    public alunos = [
        { id: 1, nome: 'Amanda', sobrenome: 'Kent', telefone: 321321, },
        { id: 2, nome: 'Fernando', sobrenome: 'Augusto', telefone: 159159, },
        { id: 3, nome: 'Gabriela', sobrenome: 'Tedezco', telefone: 156156, },
        { id: 4, nome: 'Marquinhos', sobrenome: 'Relampago', telefone: 741741, },
        { id: 5, nome: 'Nayra', sobrenome: 'Nira', telefone: 954954, },
        { id: 6, nome: 'Older', sobrenome: 'Young', telefone: 658658, },
        { id: 7, nome: 'Wilson', sobrenome: 'Afonso', telefone: 656565, }
    ]

    constructor(private fb: FormBuilder) { 
        this.criarForm();
    }

    ngOnInit() {
    }

    criarForm() {
        this.alunoForm = this.fb.group({
            nome: ['', Validators.required],
            sobrenome: ['', Validators.required],
            telefone: ['', Validators.required]
        });
    }

    alunoSubmit() {
        console.log(this.alunoForm?.value);
    }

    alunoSelect(aluno: Aluno) {
        this.alunoSelecionado = aluno;
        this.alunoForm.patchValue(aluno);
    }

    voltar() {
        this.alunoSelecionado = null;
    }

}
