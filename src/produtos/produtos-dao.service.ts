import { Produtos } from './produtos';
import { STRING, INTEGER } from 'sequelize';

import { DatabaseService } from './database.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutosDaoService {

    banco = this.database.conectar();
    produtos = this.banco.define('produtos', {
        nome: {
            type: STRING,
        },
        descricao: {
            type: STRING,
        },
        quantidadeEstoque: {
            type: INTEGER,
        },
    }, {});

    constructor(
        private readonly database: DatabaseService,
    ) {
        this.banco.authenticate()
            .then(() => {
                console.log('Conexão estabelecida.');
            })
            .catch(err => {
                console.error('Erro ao conectar com o banco de dados:', err);
            });
    }

    public getAll(): Promise<any> {
        return new Promise(resolve => {
            this.produtos.findAll().then(itens => {
                const todosOsProdutos = [];
                itens.forEach(element => {
                    todosOsProdutos.push(element.dataValues)
                });
                resolve(todosOsProdutos);
            });
        });
    }

    public update(produtos: Produtos, descri: string) {
        this.produtos.update(
            {
                nome: produtos.getNome(),
                descricao: produtos.getDescricao(),
                estoque: produtos.getQuantidadeEstoque(),
            },
            {
                where: {
                    descricao: descri,
                }
            }).then(() => {
                console.log('Atualização foi executada com sucesso');
            });
    }

    public set(produtos: Produtos) {
        this.produtos.create({
            nome: produtos.getNome(),
            descricao: produtos.getDescricao(),
            estoque: produtos.getQuantidadeEstoque(),
        });
    }

    public delete(desci: string) {
        this.produtos.destroy({
            where: {
                descricao: desci,
            }
        }).then(() => {
            console.log('item foi excluido com sucesso');
        });

    }

}
