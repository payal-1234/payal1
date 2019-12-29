function sum(count){

    n1=0;
    n2=1;
     
    for (i = 1; i <= count; i++)
    {
        console.log(n1)

       
     s = n1 + n2;
        n1 = n2;
        n2 = s;
    }

    return s;
}


module.exports={sum};