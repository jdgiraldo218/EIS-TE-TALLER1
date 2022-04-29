const {
  insert,
  selectAll,
  selectById,
  update,
  remove,
} = require("../../../persistence/tasks");

exports.all = (req, res) => {
  const tasks = selectAll();
  res.json({
    data: {
      tasks,
    },
  });
};

exports.create = (req, res) => {
  const { body = {} } = req;
  const { id, author, description } = body;

  const resInsert = insert(id, author, description);
  res.json({
    success: resInsert,
  });
};

exports.read = (req, res) => {
  const { params = {} } = req;
  const { id = "" } = params;

  const tasks = selectById(id);

  res.json({
    data: {
      tasks,
    },
  });
};

exports.update = (req, res) => {
  const { body = {}, params = {} } = req;
  const { author = "", description = "" } = body;
  const { id = "" } = params;

  update(id, author, description);
  res.json({
    data: body,
    included: {
      params,
    },
  });
};

exports.delete = (req, res) => {
  const { params = {} } = req;
  const { id = "" } = params;
  remove(id);
  res.json({});
};
