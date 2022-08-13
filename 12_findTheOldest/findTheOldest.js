const findTheOldest = function(people) {
    const oldest = people.reduce((a, b) => {

        const aYears = getAge(a.yearOfBirth, a.yearOfDeath);
        const byears = getAge(b.yearOfBirth, b.yearOfDeath);
        return aYears > byears ? a : b;
    })

    return oldest;
};

const getAge = function(birth, death)
{
    if (!death) death = new Date().getFullYear();

    return death-birth;
}

// Do not edit below this line
module.exports = findTheOldest;
