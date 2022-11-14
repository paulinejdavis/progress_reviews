const schoolReport = require('./schoolReport.js');

describe('school report method', () => {
    it ('returns "Green: 1" when only one string', () => {
        expect(schoolReport("Green")).toEqual("Green: 1");
    });

    it ('returns "Green: 1\nAmber: 1\n" when only two strings', () => {
        expect(schoolReport("Green, Amber")).toEqual("Green: 1\nAmber: 1");
    });

    it ('returns "Green: 2\nAmber: 1" when three strings given', () => {
        expect(schoolReport("Green, Green, Amber")).toEqual("Green: 2\nAmber: 1");
    });

});