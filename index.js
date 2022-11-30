const receivesAFunction = func => func()

const returnsANamedFunction = () => returnsANamedFunction

const returnsAnAnonymousFunction = () => {
    return function(){}
}