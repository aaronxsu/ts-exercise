"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalysis_1 = __importDefault(require("./analyzers/WinsAnalysis"));
var ConsoleReport_1 = __importDefault(require("./reports/ConsoleReport"));
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisAndConsoleReport = function (team) {
        return new Summary(new WinsAnalysis_1.default(team), new ConsoleReport_1.default());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
