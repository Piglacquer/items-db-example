# items-db-example
node, express, pg, knex

deployed URL:
https://items-db-example.herokuapp.com/

routes: 
- readAll: ('/')
- post: ('/')
  - expecting: {"name": "yes", "description": "uh-huh"}
- delete: ('/:id')
