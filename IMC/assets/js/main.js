function escopo(){
    const form = document.querySelector('.forms');
    const resultado = document.querySelector('.resultado');
    function recebeEventoForm(evento){
    evento.preventDefault();
    let pesoForm = form.querySelector('.peso');
    let alturaForm = form.querySelector('.altura');
    pesoForm = Number(pesoForm.value);
    alturaForm = Number(alturaForm.value);
    if(!pesoForm){
        resultado.innerHTML = 'Peso inválido!';
    }else if(!alturaForm){
        resultado.innerHTML = 'Altura inválida!';
    }else{
    let imc = pesoForm / (alturaForm * alturaForm);
    imc = imc.toFixed(2);
    if(imc < 18.5){
        resultado.innerHTML = `Seu IMC é ${imc} (Abaixo do peso)`;
    }else if(imc >= 18.5 && imc <= 24.9){
        resultado.innerHTML = `Seu IMC é ${imc} (Peso normal)`;
    }else if(imc >= 25 && imc <= 29.9){
        resultado.innerHTML = `Seu IMC é ${imc} (Sobrepeso)`;
    }else if(imc >= 30 && imc <= 34.9){
        resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 1)`;
    }else if(imc >= 35 && imc <= 39.9){
        resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 2)`;
    }else if(imc > 40){
        resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 3)`;
    }
}
    
 


}

form.addEventListener('submit', recebeEventoForm);

}

escopo();