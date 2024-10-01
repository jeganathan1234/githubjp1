//selecting popupbox,popup,overlay,popupbtn
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var popupbtn = document.getElementById("popup-btn")

popupbtn.addEventListener("click", function () {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"

})
// slecting cancenbtn,addbtn
var cancelpopup = document.getElementById("cancel-popup")
var addbook = document.getElementById("add-book")

cancelpopup.addEventListener("click", function (event) {
    event.preventDefault()
}

)


addbook.addEventListener("click", function (event) {
    event.preventDefault()
})

cancelpopup.addEventListener("click", function () {
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})
//slecting,add book, book-tittle-input,book-author-input,book-description-input,container

var container = document.querySelector(".container")
var booktittleinput = getElementById("book-tittle-input")
var bookauthorinput = getElementById("book-author-input")
var bookdescriptioninput = getElementById("book-description-input")

var div = document.createElement("div")
div.setAttribute("class", "book-container")
div.innerHTML = `<h1> ${booktittleinput.value} </h1>`
container.append(div)


