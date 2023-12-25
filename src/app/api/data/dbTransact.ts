const { dbClient } = require("./dbClient");

/**
 * Perform transaction - crude 0r read or update or delete
 * @param {String} sql: query string
 * @param {Array} esc:  parameters to be escaped in query string
 * @returns : object array
 */
function dbTransact(sql: any, esc: any) {
    const readPromise = new Promise((resolve, reject) => {
        dbClient().query(sql, esc, function (err: any, result: any, fields: any) {
            if (err) reject(err);
            resolve(result);
        });
    });

    return readPromise;
}

export{
    dbTransact
}