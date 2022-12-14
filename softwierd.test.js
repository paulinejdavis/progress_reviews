const softwierd = require('./softwierd.js');

describe('softwierd method', () => {
    it ('return "a" when given "a"', () => {
        expect(softwierd("a")).toEqual("a");

    }); 

    it ('return "are" when given "are"', () => {
        expect(softwierd("are")).toEqual("are");

    }); 
});

