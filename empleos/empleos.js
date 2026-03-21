const JobsListingSection = document.querySelector('.job-listing');

JobsListingSection?.addEventListener('click', function(event){
    const element = event.target
    if (element.classList.contains('button-apply-job')){
        element.textContent = '¡Aplicado!'
        element.classList.add('is-applied')
        element.disabled = true
    }
})

const filterTechnology = document.querySelector('#filter-technology')
const jobs = document.querySelectorAll('.article-job') // retorno las cartas de los trabajos

filterTechnology?.addEventListener('change', function(){
    const selectedValue = filterTechnology.value

    jobs.forEach(job => {
        const tech = job.dataset.tech

        if (selectedValue == '' || selectedValue == tech){
            job.style.display = 'flex'
        } else {
            job.style.display = 'none'
        }
    })
})



const filterLocation = document.querySelector('#filter-location')

filterLocation?.addEventListener('change', function(){
    const selectedValue = filterLocation.value // retorna el valor del formulario select !!Retorna el VALUE, no lo que esta escrito

    jobs.forEach(job =>{
        const modalidad = job.dataset.modalidad // retorna el dataset 'modalidad'

        if (selectedValue == '' || selectedValue == modalidad){ // si el valor seleccionado esta vacio (no se aplico ningun filtro) o coincide con algun dataset
            job.style.display = 'flex' // se muestra el que coincide con el filtro
        } else {
            job.style.display = 'none' // si no coincide no se muestra
        }
    })
})



const filterExpirience = document.querySelector('#filter-experience-level')

filterExpirience?.addEventListener('change', function(){
    const selectedValue = filterExpirience.value

    jobs.forEach(job => {
        const experiencia = job.dataset.experiencia

        if (selectedValue == '' || selectedValue == experiencia){
            job.style.display = 'flex'
        } else {
            job.style.display = 'none'
        }
    })
})