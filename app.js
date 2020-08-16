function generateCat(){
    var img = document.createElement("img")
    var div = document.getElementById('flex-cat-gen')
    img.src = "http://thecatapi.com/api/images/get?fromat=src&type=gif&size=extrasmall"
    img.setAttribute('width' , '250px')
    div.appendChild(img)
}