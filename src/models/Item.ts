import { Sequelize, Model, DataTypes } from 'sequelize';

import { sequelize } from '../instances/sequelize';

export class Item extends Model{
    public id!: number;
    public itemName!: string;
    public unit!: number;
    public price!: number;
    
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Item.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
        autoIncrement: true,
        primaryKey: true,
    },
    itemName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unit: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }

}, {
    sequelize,
    tableName: 'Items',
  });

