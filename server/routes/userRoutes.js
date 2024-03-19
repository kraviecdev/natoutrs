const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.singup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.post("/forgot-pass", authController.forgotPass);
router.patch("/reset-pass/:token", authController.resetPass);

router.use(authController.protect);

router.get("/me", userController.getMe, userController.getUser);
router.patch("/update-my-pass", authController.updatePass);
router.delete("/delete-my-account", userController.deleteMe);
router.patch(
  "/update-my-data",
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe,
);

router.use(authController.restrictTo("admin"));

router.route("/").get(userController.getAllUsers);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
