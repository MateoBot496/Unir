import { rng } from "./ppt.mjs";
export default function mathran(){
    let sol = {}
    for ( let i = 0; i < 1000; i++){
        let x = rng(0,999);
        sol[x] ? sol[x] += 1 : sol[x] = 1
    }
    
    let maxv = Math.max(...Object.values(sol))
    let maxk = Object.keys(sol).find( x =>  (sol[x] == maxv))

    console.log("El numero que mas ha salido es: "+ maxk + ". Y ha salido " + maxv + " veces!")
}

