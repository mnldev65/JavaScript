function generateNumber() {
    const num01 = Math.ceil(document.querySelector('.input-value').value)
    const num02 = Math.floor(document.querySelector('.input-value-dois').value)
    
    const result = Math.floor(Math.random() * (num02 - num01 + 1)) + num01
    
    alert(result)
}