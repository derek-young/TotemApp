const http = require('http');
const csv = require('csvtojson');

const csvFilePath ='./schedule_coachella_1.csv';
const data = [];

csv().fromFile(csvFilePath)
.on('json', jsonObj => data.push(jsonObj))
.on('done', error => console.log('end', error));

console.log(data);

const server = http.createServer(writeJSON);

server.listen(8088);

function writeJSON(req, resp) {
  resp.writeHead(200, { 'content-type': 'application/json' });
  resp.end(JSON.stringify(data));
}
