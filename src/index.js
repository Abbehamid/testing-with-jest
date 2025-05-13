import * as stack from './stack.js';

window.onload = function () {
    console.log("done");

    var pop = document.getElementById('pop');
    var push = document.getElementById('push');
    var peek = document.getElementById('peek');
    var display = document.getElementById('top_of_stack');
    var input = document.getElementById('stack_input');

    pop.addEventListener("click", function() {
        var text = "Tog bort " + stack.pop();
        alert(text);
    });

    push.addEventListener("click", function() {
        var x = input.value;
        stack.push(x);
        display.innerHTML = x;
    });

    peek.addEventListener("click", function () {
        let top = stack.peek();
        display.innerHTML = top !== undefined ? top : "n/a";
    });
};
