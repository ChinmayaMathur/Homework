const express = require("express")
const path = require("path")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const methodOverride = require("method-override")
const teamRouter = require("./routes/teamPicker");
const { patch } = require("./routes/teamPicker")

const app = express();

app.set("view engine", "ejs")

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride((req, res) => {
      if(req.body && req.body._method) {
          const method = req.body._method;
          delete req.body._method; 
          return method;
      }
}));


app.use((req, res, next) => {
      res.locals.name = req.cookies.name || "";
      next();
  })
  

app.get("/", (req, res) => {
      res.render("home")
})


app.use("/cohorts", teamRouter);

  
const PORT = process.env.PORT || 8000
const ADDRESS = "localhost"
const environment = app.get('env');

app.listen(PORT, ADDRESS, () => {
    console.log(`Server is listening on http://${ADDRESS}:${PORT} in ${environment}`)
})

