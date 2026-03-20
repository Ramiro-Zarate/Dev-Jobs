const main = document.querySelector('main')

main?.addEventListener('click', function(event){
    const element = event.target
    console.log('click')
    if (element.classList.contains('button-apply-job')){
        element.classList.add('is-applied')
        element.textContent = '¡Aplicado!'
        element.disabled = true
    }
})