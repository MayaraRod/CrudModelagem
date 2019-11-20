import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosDaoService } from './produtos/produtos-dao.service';
import { DatabaseService } from './produtos/database.service';



@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ProdutosDaoService, DatabaseService],
})
export class AppModule {}
