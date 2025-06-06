import { DataSource } from "typeorm";

(async () => {
  const dataSource = new DataSource({
    type: "better-sqlite3",
    database: "./data.db",
  });

  await dataSource.initialize();

  console.log("All good");
})();
