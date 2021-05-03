## SWBAT
- [ ] 
- [ ] Explain what rest is
- [ ] Understand How JSON server works
- [ ] Create a JSON server from scratch
- [ ] Use POSTMAN to make CRUD requests to a JSON server

## REST(Representational State Transfer)
Rest is the architecture used to perform CRUD on resources. It and HTTP are sometimes used interchangeably, but HTTP is a protocol that extends beyond the REST architecture. We will only be making RESTful requests. 
Rest requests have the following 
- HTTP verb
- header
- path
- sometimes a body (POST and PATCH)

## API (Application Programming interface)
An web API is an interface that allow us to access data. 

## Endpoints 
Endpoints are the end of our URL, they are the part of the path that lead us to our resource.
```
GET    /animals
GET    /animals/:id
POST   /animals
PATCH  /animals/:id
DELETE /animals/:id
```
## JSON server
We will be using JSON server to build a simple REST api.

- Install with `npm install -g json-server`
- create a db.json with some data
```
{
    "animals": [
      {
        "id": 1,
        "name": "Red Panda",
        "imageUrl": "https://i1.wp.com/www.redpandanetwork.org/wp-content/uploads/2018/10/Photo-1-for-Give-page.png?fit=584%2C584&ssl=1",
        "description": "not actually a panda",
        "donations": 10
      },
      {
        "id": 2,
        "name": "Pangolin",
        "imageUrl": "https://i.pinimg.com/originals/bf/ff/93/bfff9395c6ae0d24534f030580924c7e.jpg",
        "description": "The Pangolin, otherwise known as the scaly anteater, is the only mammal in the world to be covered from head to toe in keratin scales (the same as human finger nails).",
        "donations": 0
      },
      {
        "id": 3,
        "name": "Mantis Shrimp",
        "imageUrl": "https://media.wired.com/photos/5bc7d05bf867c63ebba1b104/1:1/w_1800,h_1800,c_limit/mantisshrimp-467993194.jpg",
        "description": "The mantis shrimp can punch with the speed of a .22 caliber bullet—strong enough to break the shells of its prey, as well as aquarium glass.",
        "donations": 0
      }
     ]
 }

```

- Start server: `json-server --watch db.json`