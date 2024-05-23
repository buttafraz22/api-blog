const express = require('express');
const router = express.Router();

// Mock database
const users = [
  {
    id: 'fhjb399cniuu2jjf9',
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@example.com',
  },
  {
    id: 'noenu30vj37nmg720',
    first_name: 'Alice',
    last_name: 'Smith',
    email: 'alicesmith@example.com',
  },
];

// Getting the list of users from the mock database
router.get('/', (req, res) => {
    res.send(users);
})

const {v4, uuid} = require('uuid')
router.post('/', (req, res)=> {
    const user = req.body;

    users.push({ id: v4(), ...user });

    res.send(`${user.first_name} has been added to the Database`);
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
  
    const { first_name, last_name, email} = req.body;
    console.log(id)
  
    const user = users.find((user) => user.id === id)
  
    if(first_name) user.first_name = first_name;
    if(last_name) user.last_name = last_name;
    if(email) user.email = email;
  
    res.send(`User with the ${id} has been updated`)
    
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
  
    users.filter((user) => user.id !== id)
  
    res.send(`${id} deleted successfully from database`);
  });

module.exports = router