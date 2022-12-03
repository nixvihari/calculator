
//global variable
let exp=""
let proceed=false


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
    iscorrect()
    if(proceed)
    {
        exp = exp + ' ' + "*" + ' ';
        document.getElementById("out").innerHTML = exp
    }
}

function disby()
{
    iscorrect()
    if(proceed)
    {
        exp = exp + ' ' + "/" + ' ';
        document.getElementById("out").innerHTML = exp
    }
}

function disminus()
{
    iscorrect()
    if(proceed)
    {
        exp = exp + ' ' + "-" + ' ';
        document.getElementById("out").innerHTML = exp
    }
}

function displus()
{
    iscorrect()
    if(proceed)
    {
        exp = exp + ' ' + "+" + ' ';
        document.getElementById("out").innerHTML = exp
    }
}

function period()
{
    iscorrect();
    if(proceed)
    {
        exp = exp + ".";
        document.getElementById("out").innerHTML = exp
    }

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
    proceed = true 
    let len = exp.length
    val = exp[len-1]
    val = parseInt(val)

    if(isNaN((val) && exp[len-1]!=' '))
    {
        proceed = false
    }
    
}

function calc()
{
    let ans = evaluate(exp);
    document.getElementById("res").innerHTML = ans
}

function evaluate(expression)

    {

        let tokens = expression.split('');

        let values = [];

        let ops = [];

        for (let i = 0; i < tokens.length; i++)

        {

            if (tokens[i] == ' ')

            {

                continue;

            }

            if (tokens[i] >= '0' && tokens[i] <= '9')

            {

                let sbuf = "";

                while (i < tokens.length &&

                        tokens[i] >= '0' &&

                            tokens[i] <= '9')

                {

                    sbuf = sbuf + tokens[i++];

                }

                values.push(parseInt(sbuf, 10));

                  i--;

            }

            else if (tokens[i] == '(')

            {

                ops.push(tokens[i]);

            }

            else if (tokens[i] == ')')

            {

                while (ops[ops.length - 1] != '(')

                {

                  values.push(applyOp(ops.pop(),

                                   values.pop(),

                                  values.pop()));

                }

                ops.pop();

            }

            else if (tokens[i] == '+' ||

                     tokens[i] == '-' ||

                     tokens[i] == '*' ||

                     tokens[i] == '/')

            {

                while (ops.length > 0 &&

                         hasPrecedence(tokens[i],

                                     ops[ops.length - 1]))

                {

                  values.push(applyOp(ops.pop(),

                                   values.pop(),

                                 values.pop()));

                }

                ops.push(tokens[i]);

            }

        }

        while (ops.length > 0)

        {

            values.push(applyOp(ops.pop(),

                             values.pop(),

                            values.pop()));

        }

        return values.pop();

    }

    function hasPrecedence(op1, op2)

    {

        if (op2 == '(' || op2 == ')')

        {

            return false;

        }

        if ((op1 == '*' || op1 == '/') &&

               (op2 == '+' || op2 == '-'))

        {

            return false;

        }

        else

        {

            return true;

        }

    }

    function applyOp(op, b, a)

    {

        switch (op)

        {

        case '+':

            return a + b;

        case '-':

            return a - b;

        case '*':

            return a * b;

        case '/':

            if (b == 0)

            {

                document.write("Cannot divide by zero");

            }

            return parseInt(a / b, 10);

        }

        return 0;

    }