const exp = require('express')

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'postgres',
    database : 'test'
  }
});

const bodyParser = require('body-parser')
const bodyParserJson = bodyParser.json()

const user = [
  {
    name: "khan",
    id: 0,
    email: "hassaankhan@hotmail.com",
    password: "bagla",
  },
  {
    name: "hasni",
    id: 0,
    email: "hassaankhan@gmail.com",
    password: "dablew",
  },
];
const app = exp()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


port = process.env.PORT || 3001,
cors = require('cors')
app.use(cors())

knex.select('*').from('users').then(data => {
  console.log('DATA',data)
})

app.get('/',(req, res) => {
    res.send({id:1,name: "Has khan"})
})

app.post('/login',(req, res) => {
    const user = users.find(user => {
        console.log(req.body)
        return user.password === req.body.password
    })
    res.send(user)
})

app.post('/register',(req, res) => {
    const {name, age} = req.body
    console.log('REQUEST', req.body)
    knex('users').insert({
      name: name,
      age: age
    }).then(console.log)
    res.send("Success")
})

app.listen('3001')