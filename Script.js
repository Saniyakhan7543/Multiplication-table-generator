

    function table(){
        var a,results;
        a=Number(document.getElementById("first").value);
        results = "";
        for(let i = 1; i <= 10; i++) {
            results =  results + i + " * " + a + " = " + i * a + "<br/>";
            
            }
            document.getElementById("result").innerHTML = results;
    }

 