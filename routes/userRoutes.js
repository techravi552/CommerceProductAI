const express = require("express")
const app = express()
const User = require("../module/users")


app.post("/", async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).send(user)
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
})


app.get("/", async (req, res) => {
  const users = await User.find()
  res.send(users)
})

module.exports = app
