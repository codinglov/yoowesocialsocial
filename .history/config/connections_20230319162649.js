const { connect, connection } = require ('mongoose');

const connectionString = process.env.MONGO_URI || 'mongodb:'