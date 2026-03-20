const JobsListingSection = document.querySelector('.job-listing');

JobsListingSection?.addEventListener('click', function(event){
    const element = event.target
    console.log(element)
    if (element.classList.contains('button-apply-job')){
        element.textContent = '¡Aplicado!'
        element.classList.add('is-applied')
        element.disabled = true
    }
})