"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = __importDefault(require("./MatchReader"));
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var WinsAnalysis_1 = __importDefault(require("./analyzers/WinsAnalysis"));
var ConsoleReport_1 = __importDefault(require("./reports/ConsoleReport"));
var Summary_1 = require("./Summary");
// Create an object that satisfies the DataReader interface
var csvFileReader = new CsvFileReader_1.default("football.csv");
// Create an instance of MatchReader and pass in the csvFileReader
// and then load the data
var matchReader = new MatchReader_1.default(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.default("Man United"), new ConsoleReport_1.default());
summary.buildAndPrintReport(matchReader.matches);
Summary_1.Summary.winsAnalysisAndConsoleReport("Man United").buildAndPrintReport(matchReader.matches);
