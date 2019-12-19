const Users = require("./user-model.js");
const db = require("../data/dbConfig.js");

describe("users model", function() {
  beforeEach(async () => {
    await db("users").truncate();
  });
  describe("add method", function() {
    it("should add the user to the database", async function() {
      await Users.add({ name: "Sam" });
      await Users.add({ name: "Gaffer" });

      const users = await db("users");
      expect(users).toHaveLength(2);
    });
  });

  describe("remove method", function() {
    it("should remove the user from the database", async function() {
      await Users.add({ name: "Sam" });
      await Users.add({ name: "Gaffer" });
      await Users.remove(1);

      const users = await db("users");
      expect(users).toHaveLength(1);
    });
  });
});
