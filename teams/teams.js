const express = require('express');
const bodyParser = require('body-parser');
const port = 8083;
const app = express();

app.use(bodyParser.json());

const Teams = [
  {
    id: 0,
    location: "NAVI",
    departaments: [],
  },
  {
    id: 1,
    location: "HR",
    departaments: [],
  },
  {
    id: 2,
    location: "SECRET",
    departaments: [],
  },
];

app.get('/teams', (req, res) => {
  console.log('Returning teams list');
  res.send(teams);
});

app.post('/assignment_departament', (req, res) => {
  const { id, name, office_id } = req.body;

  const currentDep = { id, name};

  const foundTeams= teams.find((teams) => team.id === team_id);
  foundTeams.departaments.push(currentDep);

  res.status(202).header({ Location: `http://localhost:${port}/teams` }).send(currentDep);
});

console.log(`teams service listening on port ${port}`);
app.listen(port);
