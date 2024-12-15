// immediately invoked function expression(IIFE)
//global scope r pollution diye problem hoi onk bar tai iife use kora hoi immediatly kono function execute korar jonno
// instead of func() we write ()()

// exmaple1 (also called 'named iife'):-
(function dis()
{
    console.log("DB1 connected")
    
})();

// example2 (also called 'simple iife'):-
(()=>
    {
        console.log("DB2 connected")
    }
)(); //to end the scope iife must have a ; at the last

// example3:-
((name)=>
    {
        console.log(`DB-${name} connected`)
    }
)("Baksish")