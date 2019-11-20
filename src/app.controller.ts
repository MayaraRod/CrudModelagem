import { ProdutosDaoService } from './produtos/produtos-dao.service';
import { DatabaseService } from './produtos/database.service';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Produtos } from './produtos/produtos';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly produtosDao: ProdutosDaoService,
  ) {

    const produtos: Produtos = new Produtos();

    // this.produtosDao.getAll().then(retorno => {
    //   console.log('TODOS OS PRODUTOS');
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
}
