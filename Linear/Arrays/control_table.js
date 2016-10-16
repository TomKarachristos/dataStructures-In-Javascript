// https://en.wikipedia.org/wiki/Dispatch_table
var thingsWeCanDo = {
    doThisThing      : function() { console.log("dothisthing");/* behavior */ },
    doThatThing      : function() { console.log("doThatThing");/* behavior */ },
    doThisOtherThing : function() { console.log("doThisOtherThing");/* behavior */ },
    default          : function() { console.log("default");/* behavior */ }
};

var doSomething = function(doWhat) {
    var thingToDo = thingsWeCanDo.hasOwnProperty(doWhat) ? doWhat : "default";
    thingsWeCanDo[thingToDo]();
}

