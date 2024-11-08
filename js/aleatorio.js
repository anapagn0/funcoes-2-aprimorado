const nomes =["Alex de Morais", "Edgar", "Marselão", "Lula", " Mitinho", "Babidi(que Deus o tenha)"];


export function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)