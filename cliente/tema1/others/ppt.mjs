function rng(x, y){
        return Math.floor(Math.random() * (y - x + 1)) + x;
}

function ppt(){

    const ppt = {
        0: "Piedra",
        1: "Papel",
        2: "Tijera"
    }

    

    function winner(player, ia) {
        if (player === ia) {
            return "Empate";
        }
        if (player === "Piedra" && ia === "Tijera") return "Ganado";
        if (player === "Papel" && ia === "Piedra") return "Ganado";
        if (player === "Tijera" && ia === "Papel") return "Ganado";
        return "Perdido";
    }
    
    let player = ppt[rng(0,2)];
    let ia = ppt[rng(0,2)];


    let resultado = winner(player, ia)

    console.log(resultado + ". Player ha escogido: " + player + " y enemy ha escogido: " + ia)
}

export { ppt, rng }
