document.addEventListener('DOMContentLoaded', function(event){
    const sectionPrincipal = document.getElementById('principal')
    const divP = document.createElement('div')
    const parrafo1 = document.createElement('p')
    parrafo1.classList.add('parrafo')
    parrafo1.innerHTML="Soy un parrafo"
    divP.append(parrafo1)
    sectionPrincipal.append(divP)
})