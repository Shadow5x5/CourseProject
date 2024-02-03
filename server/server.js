const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const { getWinesDetails } = require('./searchWines.js');

app.use(cors());
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/wine-catalog', (req, res) => {
    const param = req.body.param;
    const selectedType = req.body.selectedType;
    if (param.length !== 0 && selectedType.length !== 0) {
        getWinesDetails(param, selectedType)
            .then((data) => {
                const { results, wineDetails } = data;
                res.send(
                    Object.keys(wineDetails).map((key) => ({
                        key,
                        value: wineDetails[key]
                    })).sort((a, b) => b.value.rating - a.value.rating)
                );
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send('Internal Server Error');
            });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
