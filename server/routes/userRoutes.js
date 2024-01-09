const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.singup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.post("/forgotPass", authController.forgotPass);
router.patch("/resetPass/:token", authController.resetPass);

router.use(authController.protect);

router.get("/me", userController.getMe, userController.getUser);
router.patch("/updateMyPass", authController.updatePass);
router.delete("/deleteMyAccount", userController.deleteMe);
router.patch("/updateMyData", userController.updateMe);

router.use(authController.restrictTo("admin"));

router.route("/").get(userController.getAllUsers);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
