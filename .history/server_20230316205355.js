const express = require('express');

const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

const connectionStringUrI = `mongodb:`