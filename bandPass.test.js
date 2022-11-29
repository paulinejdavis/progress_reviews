const bandPass = require('./bandPass')

describe('bandPass', () => {
    it('should return the frequency', () => {
        const wave = [45]
        expect(bandPass(wave)).toEqual([45])
        });

    it('should return the correct frequency', () => {
        const wave = [50]
        expect(bandPass(wave)).toEqual([50])
        });
});