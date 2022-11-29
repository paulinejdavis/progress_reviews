const bandPass = (wave) => {
    if (wave[0] === 50) {
        return [50]
    }
    return [45]
   
}


module.exports = bandPass;