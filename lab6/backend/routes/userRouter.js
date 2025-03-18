import express, { Router } from "express";
import User from "../models/User.js";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});
userRouter.post("/", async (req, res) => {
  const user = await User.create(req.body);

  user.save();
  res.json(user);
});
userRouter.put("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404).send("User not found");
  }
  user.name = req.body.name || user.name;
  user.password = req.body.password || user.password;
  user.save();
  res.json(user);
});
userRouter.delete("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404).send("User not found");
  }
  await user.deleteOne();
  res.send("User removed");
});

export default userRouter;
