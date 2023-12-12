function add()
{
    //ini... variables to zero
    var act = 0, b = 0;

    //store the values inputedby the user
    act = form.input.value;

    //store the operator
    b = act.charAt(act.length - 1);
    //check which operator was entered
    if(b == '+' || b == '-' || b == '/' || b == '*'){
        form.input.value = act.substring(0, act.length - 1);
        form.input.value += '+';
    }else{
        form.input.value += '+';
    }
}

function sub()
{
    var act = 0, b = 0;
    act = form.input.value;
    b = act.charAt(act.length - 1);
    if(b == '+' || b == '-' || b == '/' || b == '*'){
        form.input.value = act.substring(0, act.length - 1);
        form.input.value += '-';
    }else{
        form.input.value += '-';
    }
}

function divi()
{
    var act = 0, b = 0;
    act = form.input.value;
    b = act.charAt(act.length - 1);
    if(b == '+' || b == '-' || b == '/' || b == '*'){
        form.input.value = act.substring(0, act.length - 1);
        form.input.value += '/';
    }else{
        form.input.value += '/';
    }
}

function mult()
{
    var act = 0, b = 0;
    act = form.input.value;
    b = act.charAt(act.length - 1);
    if(b == '+' || b == '-' || b == '/' || b == '*'){
        form.input.value = act.substring(0, act.length - 1);
        form.input.value += '*';
    }else{
        form.input.value += '*';
    }
}