import { Coffee } from "src/coffees/entities/coffee.entity";
import { Flavor } from "src/coffees/entities/flavor.entity";
import { CoffeeRefactor1696511496732 } from "src/migrations/1696511496732-CoffeeRefactor";
import { SchemaSync1696512027017 } from "src/migrations/1696512027017-SchemaSync";
import { DataSource } from "typeorm";

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    entities: [Coffee, Flavor],
    migrations: [CoffeeRefactor1696511496732, SchemaSync1696512027017],
});