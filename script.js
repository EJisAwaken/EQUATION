// let titre = document.querySelector("#titre"),
    // formule = document.querySelector("#formule"),
let a = document.querySelector("#a"),
    a1 = document.querySelector("#a1"),
    b1 = document.querySelector("#b1"),
    c1 = document.querySelector("#c1"),
    b = document.querySelector("#b"),
    c = document.querySelector("#c"),
    ej = document.querySelector("#EJ"),
    deltaaa = document.querySelector("#delta"),
    x1 = document.querySelector("#valeur-x1"),
    x2 = document.querySelector("#valeur-x2"),
    btn = document.querySelector("#btn1");

function deltas(a, b, c){
    // let equat = (b)*(b) - (4)*(a)*(c);
    return (b)*(b) - (4)*(a)*(c);
}

a.addEventListener("input", ()=>{
    a1.innerText = a.value;
});b.addEventListener("input", ()=>{
    b1.innerText = b.value;
});c.addEventListener("input", ()=>{
    c1.innerText = c.value;
});


btn.addEventListener("click",
    () => {
        let conclusion = deltas(a.value, b.value, c.value);
        ej.style.display = "block"

        if (conclusion === 0) {
            // console.log("Delta a deux racines distincts");
            let del = Math.sqrt(conclusion);
            console.log("Il a comme delta : " + parseFloat(del))
            let solution1 = ((-b.value) - del) / (2) * (a.value);
            let solution2 = ((-b.value) - del) / (2) * (a.value);
            console.log("X1 = " + solution1 + " " + "et" + " " + "X2 = " + solution2);
            deltaaa.innerText='Cette equation a une solution unique' + "||||| " + " Il a comme delta : " + parseFloat(del) + "   |||  " + " " + "x = " + solution1;



        } else if (conclusion < 0) {
            console.log("Delta n'a pas de solution");
            deltaaa.innerText='La solution est vide , ts misy';
        } else if (conclusion > 0) {
            console.log("Delta a deux solutions distinctes")
            let del = Math.sqrt(conclusion);
            console.log("Il a comme delta : " + parseFloat(del))
            let solution1 = ((-b.value) + del) / (2) * (a.value);
            let solution2 = ((-b.value) - del) / (2) * (a.value);
            console.log("x1 = " + solution1 + " " + "et" + " " + "x2 = " + solution2);
            deltaaa.innerText='Cette equation a deux solutions distinctes' + "||||| " + " Il a comme delta : " + parseFloat(del) + "   |||  " + " " + "x1 = " + solution1 + " " + "et" + "    " +  " ||||| " + "x2 = " + solution2;
            x1.innerText = solution1;
            x2.innerText = solution2;
        }
    })





