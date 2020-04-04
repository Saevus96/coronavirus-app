export class Case {
    reportDate: Date;
    newDailyCases: number;
    newDailyDeaths: number;
    totalCases: number;
    totalRecoveries: number;
    totalDeaths: number;

    constructor(
        reportDate: Date,
        newDailyCases: number,
        newDailyDeaths: number,
        totalCases: number,
        totalRecoveries: number,
        totalDeaths: number
    ) {
        this.reportDate = reportDate;
        this.newDailyCases = newDailyCases;
        this.newDailyDeaths = newDailyDeaths;
        this.totalCases = totalCases;
        this.totalRecoveries = totalRecoveries;
        this.totalDeaths = totalDeaths;
    }
}
