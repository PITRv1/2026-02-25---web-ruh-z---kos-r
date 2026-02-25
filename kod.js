function nagyitKep(melyikKep) {
    let imgDisplay = document.getElementById("nagykep")
    imgDisplay.src = melyikKep.src
}

function visszaKep() {
    let imgDisplay = document.getElementById("nagykep")
    imgDisplay.src = "ures.jpg"

}

function kivalaszt(melyikTermek) {
    console.log("a")

    let cartDisplay = document.getElementById("kosar")
    let newText = document.createElement("p")
    
    let db = prompt("Hány darabot szeretne?")
    newText.innerText = db + " db " + melyikTermek.innerText
    cartDisplay.appendChild(newText)

}