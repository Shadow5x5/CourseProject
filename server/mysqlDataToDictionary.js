const mysql = require('mysql2');

function getDataAsDictionary(callback) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'RgoG8uWM&',
        database: 'data_base'
    });

    connection.connect((err) => {
        if (err) {
            console.error('Ошибка подключения к базе данных:', err);
            return;
        }
        console.log('Подключено к базе данных');
    });

    connection.query(
        'SELECT id, name, country, city, wine_producer, type, grape_variety FROM winedb',
        (error, results) => {
            if (error) {
                console.error('Ошибка выполнения запроса:', error);
                return;
            }

            const dataDictionary = {};
            for (const row of results) {
                const {
                    id,
                    name,
                    country,
                    city,
                    wine_producer,
                    type,
                    grape_variety
                } = row;
                dataDictionary[id] = {
                    name,
                    country,
                    city,
                    wine_producer,
                    type,
                    grape_variety
                };
            }

            connection.end();
            // let stringDataDictionary = {};
            // for (const id in dataDictionary) {
            //     const wineData = dataDictionary[id];
            //     const wineString = Object.values(wineData).join(", ");
            //     stringDataDictionary[id] = wineString;
            // }
            callback(dataDictionary);
        }
    );
}

function getWinesByIds(ids, callback) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'RgoG8uWM&',
        database: 'data_base'
    });

    connection.connect((err) => {
        if (err) {
            console.error('Ошибка подключения к базе данных:', err);
            return;
        }
        console.log('Подключено к базе данных');
    });
    if (ids.length !== 0) {
        const query = `SELECT id, name, country, city, wine_producer, type, grape_variety, rating, img_path, description, img_big_path FROM winedb WHERE id IN (${ids.join(
            ', '
        )})`;

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Ошибка выполнения запроса:', error);
                return;
            }

            const dataDictionary = {};
            for (const row of results) {
                const {
                    id,
                    name,
                    country,
                    city,
                    wine_producer,
                    type,
                    grape_variety,
                    rating,
                    img_path,
                    description,
                    img_big_path
                } = row;
                dataDictionary[id] = {
                    name,
                    country,
                    city,
                    wine_producer,
                    type,
                    grape_variety,
                    rating,
                    img_path,
                    description,
                    img_big_path
                };
            }

            connection.end();
            callback(dataDictionary);
        });
    }
}

module.exports = { getDataAsDictionary, getWinesByIds };
