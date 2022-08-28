const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
//ANSWER 1-------------------------------------------
function upperCase(object) {
    const propertySize = {...objeto, nome: objeto.nome.toUpperCase(), profissao: objeto.profissao.toUpperCase(), username: objeto.username.toUpperCase(), senha: objeto.senha.toUpperCase()}
    return propertySize
}

console.log("Caixa Alta: ", upperCase(objeto));

//ANSWER 2-------------------------------------------
function runningText(object) {
    const propertySize = {...objeto, runningText: objeto.nome + objeto.profissao + objeto.username + objeto.senha }
    return propertySize.runningText
}

console.log("Texto Corrido: ", runningText(objeto));

//ANSWER 3-------------------------------------------

function funcao3(object,callback) {
    const result = callback(object)
    console.log(result);
    return result
  }
  funcao3(objeto,upperCase);
  funcao3(objeto,runningText);
  