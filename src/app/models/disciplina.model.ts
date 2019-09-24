import { Aluno } from './aluno.model';

export class Disciplina {
    nome: string;
    quantidadeDeVagas: number;
    quantidadeDeAlunosMatriculados: number;
    alunosMatriculados?: Aluno[];
}