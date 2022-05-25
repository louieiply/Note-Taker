const express = require("express");
const path = require("path");

const app = express();

const notesRouter = require("./notes");

app.use('/notes',notesRouter);

module.exports = app;
