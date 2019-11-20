import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';

@Injectable()
export class DatabaseService {

    public conectar(): any {
        return new Sequelize('crud_estoque', 'root', ' ', {
            dialect: 'mysql',
        });
    }
}
