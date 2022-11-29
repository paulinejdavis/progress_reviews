const bandPass = require('./bandPass')

describe('bandPass', () => {
    it('should return the frequency', () => {
        const wave = [40,45,50,100]
        expect(bandPass(wave)).toEqual([40,45,50,100])
        });
});