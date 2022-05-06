import {Sequelize, DataTypes, Model, Optional, UUIDV4, Transaction } from "sequelize";

import sequelizeConnection from "../config/database.config"



interface IngredientAttributes {
  id: string;
  name: string;
  slug: string;
  description?: string;
  foodGroup?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

}


class Ingredient extends Model<IngredientAttributes> implements IngredientAttributes {
  public id!: string;
  public name!: string;
  public slug!: string;
  public description!: string;
  public foodGroup!: string

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Ingredient.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true

  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT
  },
  foodGroup: {
    type: DataTypes.STRING
  },


}, {
  timestamps: true,
  sequelize: sequelizeConnection,
  paranoid: true,
  tableName: "first",
});


export default Ingredient