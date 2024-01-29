import express from "express"
import morgan from "morgan"
import bodyParser from "body-parser"
import userData from "../route/userData"
import insertUserData from "../route/insertUserData"

const app = express()

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({"extended":false}))
app.use(bodyParser.json())
app.use("/",userData)
app.use("/",insertUserData)

module.exports = app