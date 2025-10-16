function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution"); }
);

// Arrow function
ask(
    "Do you agree?",
    () => { alert("You agreed,"); },
    () => { alert("You canceled the execution."); }
);



let ask = (question) => confirm(question) ? alert("You agreed") : alert("You canceled the execution")
