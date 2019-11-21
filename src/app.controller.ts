import { ProdutosDaoService } from './produtos/produtos-dao.service';
import { DatabaseService } from './produtos/database.service';
import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Produtos } from './produtos/produtos';
import bodyParser = require('body-parser');

@Controller('produtos')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly produtosDao: ProdutosDaoService,
  ) {

    const produtos: Produtos = new Produtos();

    // this.produtosDao.getAll().then(retorno => {
    //   console.log(retorno);
    // });
    // const produtos: Produtos = new Produtos();
    // produtos.setDescricao('Xiaomi mi 8 lite')
    // produtos.setEstoque(1200);
    // this.produtosDao.set(produtos);


    // produtos.setDescricao('Xiaomi mi 8 lite')
    // produtos.setEstoque(1300);
    // this.produtosDao.update(produtos, 'Xiaomi mi 8 lite');

    // this.produtosDao.delete('cama');
  }

  @Get()
  getAllProdutos(): Promise<any> {
    return new Promise(resolve => {
      this.produtosDao.getAll().then(retorno => {
        resolve(retorno);
      });
    });
  }

  @Post()
  setProdutos(@Body() produto): string {
    const produtos: Produtos = new Produtos();
    produtos.setDescricao(produto.descricao)
    produtos.setNome(produto.nome);
    produtos.setQuantidadeEstoque(produto.quantidadeEstoque);
    this.produtosDao.set(produtos);
    return 'Produto foi adicionado com sucesso';
  }

  @Delete(':id')
  apagar(@Param('id') id: string) {

    this.produtosDao.delete(id)
    return `Produto de id #${id} foi removido`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() produto) {
    const produtos: Produtos = new Produtos();
    produtos.setDescricao(produto.descricao);
    produtos.setNome(produto.nome);
    produtos.setQuantidadeEstoque(produto.quantidadeEstoque);
    this.produtosDao.update(produtos, id);
    return `Produto de id #${id} foi editado`;
  }

}
