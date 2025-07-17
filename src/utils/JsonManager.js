import fs from "node:fs/promises";

export const JsonHandler = {
  async read(dbPath) {
    try {
      const data = await fs.readFile(dbPath, { encoding: "utf8" });
      return JSON.parse(data || []);
    } catch (e) {
      console.log({ e });
    }
  },

  async write(data, dbPath) {
    try {
      const strData = JSON.stringify(data, null, 2);
      await fs.writeFile(dbPath, strData, { encoding: "utf8" });
    } catch (error) {
      console.log({ error });
    }
  },
};
