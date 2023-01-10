function calculaIMC(){
    const nome = document.getElementById("nome")
    const altura = document.getElementById("altura")
    const peso = document.getElementById("peso")
    const output = document.getElementById("output")

    const calculo = (peso.value/altura.value**2).toFixed(2)
    let result = ""
    
    if(nome.value=="" || altura.value=="" || peso.value==""){

        output.innerHTML="Preencha todos os campos!"
    }else{

        if(calculo < 18.5){
            result="abaixo do peso!"
        }else if(calculo < 25){
            result=" com peso ideal. Parabéns!"
        }else if(calculo < 30){
            result="um pouco acima do peso!"
        }else if(calculo < 35){
            result="com obesidade de grau I!"
        }else if(calculo < 40){
            result="com obesidade de grau II. Atenção!"
        }else if( calculo < 45){
            result="com obesdiade de grau III. Cuidado!"
        }
    }

    output.innerHTML = `${nome.value} seu IMC é ${calculo}. Você está ${result}`
}

const button = document.getElementById("btn")

button.addEventListener("click", calculaIMC)


