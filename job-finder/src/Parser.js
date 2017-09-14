export function globalParse(job){

    return {
        contractType: getContractType(),
        salaryRange: getSalarayRange(),
        jobCategory: getJobCategory(),
        profileRange: getProfileRange(),
        xpRange: getXpRange(),
        jobType: getJobType(),
        periodRange: getPeriodRange(),
        telework: getTelework(),
    };

}

getContractType = () => {};

getSalarayRange = () => {};

getJobCategory = () => {};

getProfileRange = () => {};

getXpRange = () => {};

getJobType = () => {};

getPeriodRange = () => {};

getTelework = () => {};