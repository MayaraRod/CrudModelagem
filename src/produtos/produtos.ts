import { Table, Column, Model } from 'sequelize-typescript';

export class Produtos {

    private nome: string;
    private descricao: string;
    private quantidadeEstoque: number;

    getNome(): string {
        return this.nome;
    }
    setNome(nome: string) {
        this.nome = nome;
    }

    getDescricao(): string {
        return this.descricao;
    }
    setDescricao(descricao: string) {
        this.descricao = descricao;
    }

    getQuantidadeEstoque() {
        return this.quantidadeEstoque;
    }
    setQuantidadeEstoque(quantidadeEstoque: number) {
        this.quantidadeEstoque = quantidadeEstoque;
    }
}
