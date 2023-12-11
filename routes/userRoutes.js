const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.singup);
router.post("/login", authController.login);

router.post("/forgotPass", authController.forgotPass);
router.patch("/resetPass/:token", authController.resetPass);

router.patch(
  "/updateMyPass",
  authController.protect,
  authController.updatePass,
);

router.patch("/updateMyData", authController.protect, userController.updateMe);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
