**Output-Based Questions**

1. `console.log("Start");
    setTimeout(() => console.log("Timeout"), 0);
    Promise.resolve().then(() => console.log("Promise"));
    console.log("End");`
    
**Question:** What will be the output? Explain why.
    **Answer**:
        The output will be: "Start", "End", "Promise", "Timeout".
        **Explanation**:
           - console.log("Start") and console.log("End") are synchronous and execute immediately.
           - setTimeout is asynchronous, scheduling console.log("Timeout") is a macrotask.
           - Promise.resolve().then() is a microtask, which executes before macrotasks, hence "Promise" appears before "Timeout".


    
2. `let original = { a: 1, b: { c: 2 } };
    let shallowCopy = { ...original };
    shallowCopy.b.c = 3;
    console.log(original.b.c);`
    
 **Question:** What will be the output? Explain why shallow copy behaves this way.
    **Answer**:
        The output will be 3.
        **Explanation**:
        - The spread operator { ...original } creates a shallow copy of the object.
        
    
3.  `for (var i = 1; i <= 3; i++) { 
    setTimeout(() => console.log(i), 1000);
    }
    for (let j = 1; j <= 3; j++) { 
        setTimeout(() => console.log(j), 1000);
    }`
    
 **Question:** Explain the output difference between the two loops and why this behavior occurs with `var` and `let`.
  **Answer**:
    Output:
        4
        4
        4
        1
        2
        3
    **Explanation**:
       - var is function-scoped, so the setTimeout callback uses the last updated value of i, which is 4 after the loop completes.
       - let is block-scoped, creating a new j for each iteration, so each setTimeout retains the correct j value.

    
4. `let obj1 = { a: 10 };
    let obj2 = obj1;
    obj2.a = 20;
    console.log(obj1.a);`
    
**Question:** What will be the output? Explain how JavaScript treats objects when assigned to another variable.
**Answer**:
        Output: 20
        **Explanation**:
            Objects in JavaScript are reference types, so obj2 points to the same object as obj1. Changing obj2.a also changes obj1.a.

