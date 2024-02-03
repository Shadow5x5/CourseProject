const Fuse = require('fuse.js');
const {
    getDataAsDictionary,
    getWinesByIds
} = require('./mysqlDataToDictionary.js');

function searchWines(searchQuery, searchType) {
    return new Promise((resolve, reject) => {
        getDataAsDictionary((wines) => {
            const data = Object.values(wines);
            const nameOptions = { keys: ['name'], threshold: 0.4 };
            const countryOptions = { keys: ['country'], threshold: 0.4 };
            const cityOptions = { keys: ['city'], threshold: 0.4 };
            const producerOptions = { keys: ['wine_producer'], threshold: 0.4 };
            const typeOptions = { keys: ['type'], threshold: 0.4 };
            const varietyOptions = { keys: ['grape_variety'], threshold: 0.4 };

            const nameFuse = new Fuse(data, nameOptions);
            const countryFuse = new Fuse(data, countryOptions);
            const cityFuse = new Fuse(data, cityOptions);
            const producerFuse = new Fuse(data, producerOptions);
            const typeFuse = new Fuse(data, typeOptions);
            const varietyFuse = new Fuse(data, varietyOptions);

            console.log(searchType, searchQuery);
            switch (searchType) {
                case 'name':
                    resolve(nameFuse.search(searchQuery));
                    break;
                case 'country':
                    resolve(countryFuse.search(searchQuery));
                    break;
                case 'city':
                    resolve(cityFuse.search(searchQuery));
                    break;
                case 'wine_producer':
                    resolve(producerFuse.search(searchQuery));
                    break;
                case 'type':
                    resolve(typeFuse.search(searchQuery));
                    break;
                case 'grape_variety':
                    resolve(varietyFuse.search(searchQuery));
                    break;
                default:
                    reject(new Error('Invalid searchType'));
            }
        });
    });
}

function getWinesDetails(param, selectedType) {
    if (param.length !== 0 && selectedType !== 0) {
        return new Promise((resolve, reject) => {
            searchWines(param, selectedType)
                .then((results) => {
                    const ids = results.map((result) => result.refIndex + 1);
                    if (ids.length !== 0) {
                        getWinesByIds(ids, (wineDetails) => {
                            resolve({ results, wineDetails });
                        });
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

module.exports = { searchWines, getWinesDetails };
