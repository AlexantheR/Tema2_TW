function addTokens(input, tokens) {
    let i = 0;
    let copie = input;
    if (typeof (input) !== 'string' && !(input instanceof String))
        throw new Error('Invalid input');

    if (input.length <= 5)
        throw new Error('Input should have at least 6 characters');

    while(i<tokens.length)
    {
            if (typeof(tokens[i].tokenName) !== 'string' && !(tokens[i].tokenName instanceof String))
            {
                throw new Error('Invalid array format');
            }
        i++;
    }

    if (input.indexOf('...') == -1)
        return input;

        

    i = 0;

    while(i<tokens.length)
    {
        if (copie.indexOf('...') > -1)
        copie = copie.replace('...', '${'+tokens[i].tokenName+'}');
        i++;
    }

    return copie;
}

const app = {
    addTokens: addTokens
}

module.exports = app;

//console.log(addTokens("Subsemnatul ...", [{tokenName: 53}]));