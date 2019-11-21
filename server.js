var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Post'); // Create a table for 'Post' with default settings
mobileApp.tables.add('Users'); // Create a table for 'Users' (Plural, because user is reserved word in SQL)

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
