var path = require('path');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'client')));

process.title = 'jest-jasmine-reporters-example';

app.listen(app.get('port'), function() {
    console.log('Server is now available on: http://localhost:' + app.get('port') + '/');
});
