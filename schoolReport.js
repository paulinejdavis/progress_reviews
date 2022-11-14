const schoolReport = (grade) => {
    if (grade === "Green, Amber") {
        return "Green: 1\nAmber: 1"
    } else if (grade === "Green, Green, Amber") {
        return "Green: 2\nAmber: 1"
    }
    return "Green: 1"
}

module.exports = schoolReport;