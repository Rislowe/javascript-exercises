const removeFromArray = function(array) {

    let args = Array.prototype.slice.call(arguments);

    for (let i = 0; i < array.length; i++)
    {
        for(let j = 1; j < args.length; j++)
        {
            if(array[i] === args[j])
        {
            array.splice(i, 1);
            i--;
        }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
