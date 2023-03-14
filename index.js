function receivesAFunction(spy) {
    return spy ()
}

returnsANamedFunction();
function returnsANamedFunction() {
    return function Glory () {
    }
}

function returnsAnAnonymousFunction() {
    return()=> {

    }
}