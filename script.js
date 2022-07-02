let inputs = document.querySelectorAll("input")
let [input1, input2] = inputs    
let seta = document.querySelector(".seta")


function handleChange() {
    if (input1.value && input2.value.length >=6) {
        seta.classList.remove("seta")
        seta.classList.add("seta-on")
    } else {
        seta.classList.remove("seta-on")
        seta.classList.add("seta")
    }
}

input1.addEventListener('input', handleChange)
input2.addEventListener('input', handleChange)
