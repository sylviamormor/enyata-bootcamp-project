const form = document.querySelector('form')
const formName = document.querySelector('#name')
const formEmail = document.querySelector('#email')
const error = document.querySelector('.error')

form.addEventListener('submit', function(e){
    e.preventDefault()


    if(formName.value === '' ||  formEmail.value === ''){
        error.style.display = 'block'

        setTimeout(() => {
            error.style.display = 'none'
        }, 5000)

        return
    }
    alert(`Hello ${formName.value}🎊, your form has been submitted successfully.\nYour email is ${formEmail.value}`)
    console.log(formName.value)
    console.log(formEmail.value)

    formName.value = ''
    formEmail.value = ''

})
