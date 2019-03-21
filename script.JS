document.addEventListener('DOMContentLoaded', function () {
    let btn = document.createElement('button');
    let btnText = document.createTextNode('Add Square')
    btn.appendChild(btnText)
    document.body.appendChild(btn)

    let container = document.createElement('div');
    container.style.display = "flex"
    container.style.flexWrap = "wrap"
    container.className = "container"
    document.body.appendChild(container);

    let idCount = 0

    btn.addEventListener('click', addBlackSquare)
    document.body.addEventListener('mouseover', showSquareId)
    document.body.addEventListener('mouseout', hideSquareId)
    document.body.addEventListener('click', changeSquareColor)
    document.body.addEventListener('dblclick', removeSiblingSquare)


    function addBlackSquare() {
        let blackSquare = document.createElement('div');
        blackSquare.style.display = "flex"
        blackSquare.style.height = "100px";
        blackSquare.style.width = "100px";
        blackSquare.style.backgroundColor = "black";
        blackSquare.style.margin = "5px";
        blackSquare.style.alignItems = "center";
        blackSquare.style.justifyContent = "center";
        blackSquare.className = "square";
        blackSquare.style.color = "rgba(255,255,255,0)";

        blackSquare.id = "" + idCount;
        let numOfSquares = document.createTextNode('' + idCount)
        blackSquare.appendChild(numOfSquares)
        container.appendChild(blackSquare);
        idCount++
    };

    function showSquareId(event) {
        if (event.target.className == "square") {
            event.target.style.color = "rgba(255,255,255,1)"
        }
    }

    function hideSquareId(event) {
        if (event.target.className == "square") {
            event.target.style.color = "rgba(255,255,255,0)"
        }
    }

    function changeSquareColor(event) {
        if (event.target.className == 'square') {
            event.target.style.backgroundColor = 'rgb('
                + Math.floor(Math.random() * 255) + ','
                + Math.floor(Math.random() * 255) + ','
                + Math.floor(Math.random() * 255) + ')'
        }
    }

    function removeSiblingSquare(event) {
        if (event.target.className == 'square' && event.target.id % 2 == 0) {
            if (event.target == container.lastChild) {
                alert("There isn't a square after the clicked square")
            } else {
                container.removeChild(event.target.nextSibling)
                idCount--
            }
        } else if (event.target.className == 'square' && event.target.id % 2 == 1) {
            if (event.target == container.firstChild) {
                alert("There isn't a square before the clicked square")
            } else {
                container.removeChild(event.target.previousSibling)
                idCount--
            }
        }
    }
})