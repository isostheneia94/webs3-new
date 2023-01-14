const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const port = 8081;
const teamHost = 8082;
const app = express();

app.use(bodyParser.json());

const departaments = [];

app.get('/departaments', (req, res) => {
    console.log('Returning players list');
    res.send(departaments);
});

app.post('/departaments', (req, res) => {
    request.post(
        {
            headers: {'content-type': 'application/json'},
            url: `http://localhost:${teamHost}/assignment_departament`,
            body: JSON.stringify({
                id: req.body.id,
                name: req.body.name,
                surname: req.body.surname,
                years: req.body.years,
                team_id: req.body.team_id,
            }),
        },
        (err, userResponse, body) => {
            if (!err) {
                const addedDepartment = {
                    id: req.body.id,
                    name: req.body.name,
                    surname: req.body.surname,
                    years: req.body.years,
                    team_id: req.body.team_id,
                };
                departaments.push(addedDepartment);
                res.status(202).send(addedDepartment);
            } else {
                res.status(400).send({problem: `teams Service responded with issue ${err}`});
            }
        }
    );
});

console.log(`players service listening on port ${port}`);
app.listen(port);
