const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const users = [
  {
    email: "ama@mail.com",
    password: "password",
  },
]

const checkEmail = (email) => {
  return users.find((user) => user.email === email)
}
const checkPassword = (user, password) => {
  return user.password === password
}
app.post("/login", (req, res) => {
  console.log("reaches the server")
  try {
    console.log(req.body)

    const { email, password } = req.body
    const user = checkEmail(email)
    if (!user) {
      res.status(400).json({ message: "Invalid email" })
    } else {
      checkPassword(user, password)
        ? res.status(200).json({ user: user, loggedIn: true })
        : res.status(400).json({ message: "Invalid Password" })
    }
  } catch (error) {
    res.json({ error })
  }
})

app.listen(5000, () => console.log("server is up and running"))
