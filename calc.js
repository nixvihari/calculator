
//global variable
let exp=""
let proceed=TRUE;


// button fiunctions

function dis0()
{
    exp = exp + (String)(0);
    document.getElementById("out").innerHTML = exp
}

function dis1()
{
    exp = exp + (String)(1);
    document.getElementById("out").innerHTML = exp
}

function dis2()
{
    exp = exp + (String)(2);
    document.getElementById("out").innerHTML = exp
}

function dis3()
{
    exp = exp + (String)(3);
    document.getElementById("out").innerHTML = exp
}

function dis4()
{
    exp = exp + (String)(4);
    document.getElementById("out").innerHTML = exp
}

function dis5()
{
    exp = exp + (String)(5);
    document.getElementById("out").innerHTML = exp
}

function dis6()
{
    exp = exp + (String)(6);
    document.getElementById("out").innerHTML = exp
}

function dis7()
{
    exp = exp + (String)(7);
    document.getElementById("out").innerHTML = exp
}

function dis8()
{
    exp = exp + (String)(8);
    document.getElementById("out").innerHTML = exp
}

function dis9()
{
    exp = exp + (String)(9);
    document.getElementById("out").innerHTML = exp
}

function disx()
{
    exp = exp + "*";
    document.getElementById("out").innerHTML = exp
}

function disby()
{
    exp = exp + "/";
    document.getElementById("out").innerHTML = exp
}

function disminus()
{
    exp = exp + "-";
    document.getElementById("out").innerHTML = exp
}

function displus()
{
    exp = exp + "+";
    document.getElementById("out").innerHTML = exp
}

function period()
{
    exp = exp + ".";
    document.getElementById("out").innerHTML = exp
}



//clear function
function clearbox()
{
    exp = ""
    document.getElementById("out").innerHTML = exp
}

// 2 evaluate funcs - one for Percent and other to evaluate the expression
// 3rd function experimental - real time expression processing, to prevent invalid user input

function iscorrect()
{
    //stuff to check for 
    //decimal point     operator_sequence   
}
function evaluate()
{
    
}