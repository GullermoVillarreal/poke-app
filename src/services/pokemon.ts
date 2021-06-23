import { resolve } from "dns"

export async function getAllPokemon(url:any){
    return new Promise((resolve, reject)=>{
        fetch(url)
            .then((res:any)=> res.json())
            .then(data =>{
                resolve(data)
            })
    })
}

export async function getPokemon(url:any){
    return new Promise((resolve, reject)=>{
        fetch(url)
            .then(res=> res.json())
            .then((data:any)=>{
                resolve(data);
            });
    });
}