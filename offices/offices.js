const express = require('express');
const bodyParser = require('body-parser');
const port = 8082;
const app = express();

app.use(bodyParser.json());

const offices = [
  {
    id: 0,
    location: "Dsiarjinskogo 6",
    departaments: [],
    awards: [],
  },
  {
    id: 1,
    location: "Voronjanskogo 11",
    departaments: [],
    awards: [],
  },
  {
    id: 2,
    location: "Kirova 3",
    departaments: [],
    awards: [],
  },
];

app.get('/offices', (req, res) => {
  console.log('Returning teams list');
  res.send(offices);
});

app.post('/assignment_departament', (req, res) => {
  const { id, name, surname, years, office_id } = req.body;

  const currentDep = { id, name, surname, years};

  const foundOffices= offices.find((office) => office.id === office_id);
  foundOffices.departaments.push(currentDep);

  res.status(202).header({ Location: `http://localhost:${port}/offices` }).send(currentDep);
});

 app.post('/assignment_award', (req, res) => {
   const { id, name, office_id } = req.body;

   const currentAward = { id, name};

   const foundOffices= offices.find((office) => office.id === office_id);
   foundOffices.awards.push(currentAward);

   res.status(202).header({ Location: `http://localhost:${port}/offices` }).send(currentAward);
});


console.log(`teams service listening on port ${port}`);
app.listen(port);
