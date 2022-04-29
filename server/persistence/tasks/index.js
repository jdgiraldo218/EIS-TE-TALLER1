const fs = require("fs");

const filepath = "./tasks.json";

const readData = () => {
  try {
    const data = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeData = (data) => {
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
};

const insert = (id, author, description) => {
  const task = {
    id,
    author,
    description,
    createdAt: new Date(),
    updateAt: "",
  };
  let tasks = readData();
  tasks.push(task);
  writeData(tasks);
  return true;
};

const update = (id, author, description) => {
  let tasks = readData();
  tasks = tasks
    .filter((m) => m.id == id)
    .map((m) => {
      m.author = author;
      m.description = description;
      m.updateAt = new Date();
      return m;
    });
  writeData(tasks);
  return true;
};

const remove = (id) => {
  let tasks = readData();
  tasks = tasks.filter((m) => m.id != id);
  writeData(tasks);
  return true;
};

const selectById = (id) => {
  let tasks = readData();
  const res = tasks.filter((m) => m.id == id);
  return res;
};

const selectAll = () => {
  let tasks = readData();
  return tasks;
};

module.exports = { insert, update, remove, selectById, selectAll };
