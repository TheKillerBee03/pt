let gram, secondValue;
        let compute=0;
        let ounces = 0.035274;
        function convertMe(){

            gram = parseInt(document.getElementById("Grams").value);
            

            compute = gram * ounces;
            document.getElementById("output").value = compute;
            
        }
        document.getElementById("bntcompute").addEventListener("click", convertMe);
        