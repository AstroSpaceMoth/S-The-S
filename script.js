const phrase1 = document.getElementById('phrase1')
const phrase2 = document.getElementById('phrase2')
const phrase3 = document.getElementById('phrase3')
const phrase4 = document.getElementById('phrase4')
const phrase5 = document.getElementById('phrase5')
const phrase6 = document.getElementById('phrase6')
const phrase7 = document.getElementById('phrase7')
const phrase8 = document.getElementById('phrase8')
const phrase9 = document.getElementById('phrase9')
const phrase10 = document.getElementById('phrase10')
const phrase11 = document.getElementById('phrase11')
const phrase12 = document.getElementById('phrase12')

const form = document.getElementById('data-fields')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>  {
    let messages = []
    if (phrase1.value === '' || phrase1.value == null) {
        messages.push('Phrase term is required.')
    }
    
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

    
})