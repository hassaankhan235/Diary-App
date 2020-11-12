const exp = require('express')

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'Ghubbara@98',
    database : 'postgres'
  }
});

const bodyParser = require('body-parser');
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


//  To GET & POST USER DIARY POSTS
app.post('/', (req, res) => {
  console.log("REQUEST", req.body)
  // To Get the user diary posts
  if (req.body.getpost) {
     knex.select('*').from('posts')
  .where('email','=', req.body.email)
  .returning('*')
  .then(posts => {
    res.status(200).json(posts)
  })
  .catch(err =>  res.status(400).json('Unable to get posts'))
  }

  // To get the Count of User Posts 
  else if(req.body.getPostCount) {
    console.log('POSTCOUNTEMAIL', req.body.email)
    knex('posts').count('*').where('email', '=', req.body.email )
    .returning('*')
    .then(count => res.status(200).json(count)) 
  }

  // To Post user Diary posts
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

// To Post user Diary posts
app.post('/',(req, res) => {
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

// TO login in to the App
app.post('/login',(req, res) => {
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

// For Dynamic web addresses generated during the software operation
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


// TO register a new user
app.post('/register',(req, res) => {
    const {username, email, password} = req.body
    knex('users').insert({
        username: username,
        email: email,
        password: password
}).returning('*')
.then(user => res.status(200).json(user))
})

app.listen('3001')