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
    id: 20,
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

app.post('/', (req, res) => {
  console.log("POSTS",req.body)
  if (req.body.getpost) {
     knex.select('*').from('posts')
  .where('email','=', req.body.email)
  .returning('*')
  .then(posts => {
    res.status(200).json(posts)
  })
  .catch(err =>  res.status(400).json('Unable to get posts'))
  }
  else {
      const {email, date, post, topic} = req.body
  knex('posts').insert({
    email: email,
    date: date,
    post: post,
    topic: topic,
  })
  .returning('*')
  .then(post => res.status(200).json('Success'))
  }
})

app.post('/',(req, res) => {
  console.log('req',req.body)
  const {email, date, post, topic} = req.body
  knex('posts').insert({
    email: email,
    date: date,
    post: post,
    topic: topic,
  })
  .returning('*')
  .then(post => res.status(200).json('Success'))
})

app.post('/login',(req, res) => {
  console.log(req,req.body)
        knex.select('*').from('users')
        .where('password', '=', req.body.password)
        .returning('*')
        .then(user => {
          if(user.length){
            res.json(user[0])
          } else {
            res.status(400).json('User Not found')
          }
          
        })
        .catch(err =>  res.status(400).json('Unable to get user'))
})

app.get('/profile/:id',(req, res) => {
  const{id} = req.params
    knex('*').from('users').where({id:id})
    .then(user => {
      if (user.length) {
        res.json(user)
      }
      else {
        res.status(400).json('not found')
      }
    }).catch(err => res.this.status(400).json('error getting users'))
})

app.post('/register',(req, res) => {
    const {username, email, password} = req.body
    console.log('REQUEST', req.body)
    knex.transaction(trx => {
      trx.insert({
        email: email
      })
      .into('posts')
      .returning('email')
      .then(loginEmail => {
          return trx('users')
           .returning('*')
           .insert({
              username: username,
              email: loginEmail[0],
              password: password
    })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json('Unable to Register'))
})
       .then(trx.commit)
       .catch(trx.rollback)
      })
    .catch(err => res.status(400).json('Unable to register'))
    })
 

app.listen('3001')