import MatchReader from "./MatchReader";
import CsvFileReader from "./CsvFileReader";
import WinsAnalysis from "./analyzers/WinsAnalysis";
import ConsoleReport from "./reports/ConsoleReport";
import { Summary } from "./Summary";

// Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in the csvFileReader
// and then load the data
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);

Summary.winsAnalysisAndConsoleReport("Man United").buildAndPrintReport(
  matchReader.matches
);
