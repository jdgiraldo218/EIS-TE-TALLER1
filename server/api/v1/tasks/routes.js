const express = require("express");
const router = express.Router();
const controller = require("./controller");

/*
 * /api/v1/tasks     POST   Create
 * /api/v1/tasks     GET    Read all
 * /api/v1/tasks/:id GET    Read
 * /api/v1/tasks/:id PUT    Update
 * /api/v1/tasks/:id DELETE Delete
 */

router.route("/").get(controller.all).post(controller.create);

router
  .route("/:id")
  .get(controller.read)
  .patch(controller.update)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
