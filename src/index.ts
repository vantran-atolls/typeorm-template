import "reflect-metadata";

import { DataSource } from "typeorm";
import { User } from "./user";

(async () => {
  const dataSource = new DataSource({
    type: "better-sqlite3",
    database: "./data.db",
    synchronize: true,
    entities: [User],
  });

  await dataSource.initialize();

  console.log("All good");
})();
