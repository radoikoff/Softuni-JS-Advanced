function townsToJSON(input) {
    input.shift();
    const result = input.map((row) => {
        let [town, latitude, longitude] = row.split('|').filter(e => e.length > 0);
        return {
            Town: town.trim(),
            Latitude: Math.round(latitude * 100) / 100,
            Longitude: Math.round(longitude * 100) / 100
        };
    });



    console.log(JSON.stringify(result));
};

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);