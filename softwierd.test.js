const softwierd = require('./softwierd.js');

describe('softwierd method', () => {
    it ('return "a" when given "a"', () => {
        expect(softwierd("a")).toEqual("a");
    }); 

    it ('return "are" when given "are"', () => {
        expect(softwierd("are")).toEqual("are");
    }); 
    it ('return "~aer~" when given "aer"', () => {
        expect(softwierd("aer")).toEqual("~aer~");
    }); 
    xit ('return "are the" when given "are the"', () => {
        expect(softwierd("are the")).toEqual("are the");
    }); 

    it ('return "aer the" when given "aer the"', () => {
        expect(softwierd("aer the")).toEqual("~aer~ the");
    }); 
    
});

