



/************* Fonction swapBloc pour échanger deux blocs : ************/

function swapBlocks(cell1, cell2) {

    // Dans une variable temporaire, on place le premier bloc : x = a
    let x = document.getElementById(cell1).className;

    // On déclare que le premier bloc est égal au second : a = b
    document.getElementById(cell1).className = document.getElementById(cell2).className;

    // Et donc finalement x vaut b !
    document.getElementById(cell2).className = x;
}


/* Fonction clickBlock pour :
 -> Localiser la  cellule cliquée, 
-> Localiser la cellule vide, 
-> Et échanger les deux blocs : */

function clickBlock(row, column) {

    let cell = document.getElementById("cell" + row + column);
    let block = cell.className;

    if (block != "block9") { // Si le joueur clique sur une cellule qui contient un bloc du puzzle

        if (column < 3) { // Si la cellule cliquée est sur la colone 1 ou sur la colonne 2

            // Et si le bloc vide est à droite (column + 1)
            if (document.getElementById("cell" + row + (column + 1)).className == "block9") {

                // swap le bloc cliqué à droite sur column+1
                swapBlocks("cell" + row + column, "cell" + row + (column + 1));
                isSolved()
                return;
            }
        }

        // Si clic sur col 2 ou 3
        if (column > 1) {
            // Si empty bloc à gauche
            if (document.getElementById("cell" + row + (column - 1)).className == "block9") {
                // swap le bloc cliqué sur col-1
                swapBlocks("cell" + row + column, "cell" + row + (column - 1));
                isSolved()
                return;
            }
        }

        // SI click sur ligne 2 ou 3
        if (row > 1) {
            // Si empty bloc en haut
            if (document.getElementById("cell" + (row - 1) + column).className == "block9") {
                swapBlocks("cell" + row + column, "cell" + (row - 1) + column);
                isSolved()
                return;
            }
        }

        // Sur ligne 1 ou 2
        if (row < 3) {
            // Si empty bloc en bas
            if (document.getElementById("cell" + (row + 1) + column).className == "block9") {
                swapBlocks("cell" + row + column, "cell" + (row + 1) + column);
                isSolved()
                return;
            }

        }

    }

}


function shuffle() {
    // Parcours la grille, lignes puis colones
    for (let row = 1; row <= 3; row++) {
        for (let column = 1; column <= 3; column++) {

            let row2 = Math.floor(Math.random() * 3 + 1); // Choisis une ligne random de 1 à 3
            let column2 = Math.floor(Math.random() * 3 + 1); // Choisis une colone au hasard

            swapBlocks("cell" + row + column, "cell" + row2 + column2); // échange les blocs 

            let element = document.querySelector(".block9");
            element.classList.remove("solved"); // remet le bloc vide
        }
    }

}



/* let btn = document.querySelector('button');
btn.addEventListener('click', shuffle); */


// Victoire si chaque bloc est dans sa bonne cellule :
function isSolved() {
    if (cell11.className == 'block1' &&
        cell12.className == 'block2' &&
        cell13.className == 'block3' &&
        cell21.className == 'block4' &&
        cell22.className == 'block5' &&
        cell23.className == 'block6' &&
        cell31.className == 'block7' &&
        cell32.className == 'block8' &&
        cell33.className == 'block9') {

        // Apparition du bloc manquant dans la cellule vide :

        /* document.getElementById('cell33').style.background = null; */
        /* document.getElementById('cell33').classList.add('solvedVasarely'); */

        /* document.querySelector('.block9').setAttribute */
        alert('Félicitations !')
    }
}

function gameOn() {
    resolveIt()
    /* document.getElementById('cell33').classList.add('unsolved'); */
    // Le puzzle apparait dans l'ordre puis se mélange au bout de 500ms:
    setTimeout(() => {
        // Après 500ms, mélange toutes les 100ms
        let timerId = setInterval(() => shuffle(), 100);

        // Arrête après 1200ms
        setTimeout(() => { clearInterval(timerId); shuffle(); }, 1000);;
    }, "500")

    // A chaque clic du joueur la fonction clickBloc accompli sa mission :
    document.getElementById('cell11').addEventListener('click', function () { clickBlock(1, 1); });
    document.getElementById('cell12').addEventListener('click', function () { clickBlock(1, 2); });
    document.getElementById('cell13').addEventListener('click', function () { clickBlock(1, 3); });
    document.getElementById('cell21').addEventListener('click', function () { clickBlock(2, 1); });
    document.getElementById('cell22').addEventListener('click', function () { clickBlock(2, 2); });
    document.getElementById('cell23').addEventListener('click', function () { clickBlock(2, 3); });
    document.getElementById('cell31').addEventListener('click', function () { clickBlock(3, 1); });
    document.getElementById('cell32').addEventListener('click', function () { clickBlock(3, 2); });
    document.getElementById('cell33').addEventListener('click', function () { clickBlock(3, 3); });


}
gameOn();

document.getElementById('shuffleBtn').addEventListener('click', function () { resolveIt(); });



function resolveIt() {
    document.getElementById('cell11').removeAttribute('class');
    document.getElementById('cell12').removeAttribute('class');
    document.getElementById('cell13').removeAttribute('class');
    document.getElementById('cell21').removeAttribute('class');
    document.getElementById('cell22').removeAttribute('class');
    document.getElementById('cell23').removeAttribute('class');
    document.getElementById('cell31').removeAttribute('class');
    document.getElementById('cell32').removeAttribute('class');
    document.getElementById('cell33').removeAttribute('class');

    document.getElementById('cell11').classList.add('block1');
    document.getElementById('cell12').classList.add('block2');
    document.getElementById('cell13').classList.add('block3');
    document.getElementById('cell21').classList.add('block4');
    document.getElementById('cell22').classList.add('block5');
    document.getElementById('cell23').classList.add('block6');
    document.getElementById('cell31').classList.add('block7');
    document.getElementById('cell32').classList.add('block8');
    document.getElementById('cell33').classList.add('block9');

}

/* LAUNCH MONDRIAN PUZZLE */
document.getElementById('mondrian').addEventListener('click', function () {
    /* document.getElementById("mondrian").style.backgroundImage = "none"; */
    resolveIt();

    document.getElementById('cartel').innerHTML = `<h2>Piet Mondrian (1872-1944)</h2>
    <h3><em> Composition en Rouge, Jaune, Bleu et Noir</em></h3>
    <p>1921<br>
    huile sur toile <br>
    59.5 x 59.5 cm <br><br>
    Kunstmuseum, La Haye  <br>
    </p>`;

    document.querySelector(".block1").style.backgroundImage = "url(imagesPuzzle/Mondrian.png)";
    document.querySelector(".block2").style.backgroundImage = "url(imagesPuzzle/Mondrian.png)";
    document.querySelector(".block3").style.backgroundImage = "url(imagesPuzzle/Mondrian.png)";
    document.querySelector(".block4").style.backgroundImage = "url(imagesPuzzle/Mondrian.png)";
    document.querySelector(".block5").style.backgroundImage = "url(imagesPuzzle/Mondrian.png)";
    document.querySelector(".block6").style.backgroundImage = "url(imagesPuzzle/Mondrian.png)";
    document.querySelector(".block7").style.backgroundImage = "url(imagesPuzzle/Mondrian.png)";
    document.querySelector(".block8").style.backgroundImage = "url(imagesPuzzle/Mondrian.png)";
    document.querySelector(".block9").style.backgroundImage = "url(imagesPuzzle/Mondrian.png)";
    gameOn();
});

/* LAUNCH LOEWENSBERG PUZZLE */
document.getElementById('loewensberg').addEventListener('click', function () {
    resolveIt();

    document.getElementById('cartel').innerHTML = `<h2>Verena Loewensberg (1912-1986)</h2>
    <h3><em>Geometrische Komposition</em></h3>
    <p>1982 <br>
    - <br>
        60 x 60cm <br><br>
        -  <br>
    </p>`;

    document.querySelector(".block1").style.backgroundImage = "url(imagesPuzzle/loewensberg.png)";
    document.querySelector(".block2").style.backgroundImage = "url(imagesPuzzle/loewensberg.png)";
    document.querySelector(".block3").style.backgroundImage = "url(imagesPuzzle/loewensberg.png)";
    document.querySelector(".block4").style.backgroundImage = "url(imagesPuzzle/loewensberg.png)";
    document.querySelector(".block5").style.backgroundImage = "url(imagesPuzzle/loewensberg.png)";
    document.querySelector(".block6").style.backgroundImage = "url(imagesPuzzle/loewensberg.png)";
    document.querySelector(".block7").style.backgroundImage = "url(imagesPuzzle/loewensberg.png)";
    document.querySelector(".block8").style.backgroundImage = "url(imagesPuzzle/loewensberg.png)";
    document.querySelector(".block9").style.backgroundImage = "url(imagesPuzzle/loewensberg.png)";
    gameOn();
});

/* LAUNCH ALBERS PUZZLE */
document.getElementById('albers').addEventListener('click', function () {
    resolveIt();
    /* document.getElementById('cell33').classList.remove('solvedVasarely'); */

    document.getElementById('cartel').innerHTML = `<h2>Josef Albers (1888-1976)</h2>
    <h3><em>Study for Homage to the Square: "Persistent"</em></h3>
    <p>1954 - 1960 <br>
    Oil on masonite <br>
        60 x 60cm <br><br>
        Waddington Custot, London  <br>
        © Josef Albers
    </p>`;


    document.querySelector(".block1").style.backgroundImage = "url(imagesPuzzle/albers.png)";
    document.querySelector(".block2").style.backgroundImage = "url(imagesPuzzle/albers.png)";
    document.querySelector(".block3").style.backgroundImage = "url(imagesPuzzle/albers.png)";
    document.querySelector(".block4").style.backgroundImage = "url(imagesPuzzle/albers.png)";
    document.querySelector(".block5").style.backgroundImage = "url(imagesPuzzle/albers.png)";
    document.querySelector(".block6").style.backgroundImage = "url(imagesPuzzle/albers.png)";
    document.querySelector(".block7").style.backgroundImage = "url(imagesPuzzle/albers.png)";
    document.querySelector(".block8").style.backgroundImage = "url(imagesPuzzle/albers.png)";
    document.querySelector(".block9").style.backgroundImage = "url(imagesPuzzle/albers.png)";
    gameOn();
});

/* LAUNCH VASARELY PUZZLE */
document.getElementById('vasarely').addEventListener('click', function () {
    resolveIt();

    document.getElementById('cartel').innerHTML = `<h2>Victor Vasarely (1906-1997)</h2>
    <h3><em>Pavo II</em></h3>
    <p>1979 <br>
        Acrylic on plywood <br>
        60 x 60cm <br><br>
        Vasarely Múzeum, Budapest <br>
        © Victor Vasarely, VEGAP, Madrid, 2018
    </p>`;

    document.querySelector(".block1").style.backgroundImage = "url(imagesPuzzle/vasarely.png)";
    document.querySelector(".block2").style.backgroundImage = "url(imagesPuzzle/vasarely.png)";
    document.querySelector(".block3").style.backgroundImage = "url(imagesPuzzle/vasarely.png)";
    document.querySelector(".block4").style.backgroundImage = "url(imagesPuzzle/vasarely.png)";
    document.querySelector(".block5").style.backgroundImage = "url(imagesPuzzle/vasarely.png)";
    document.querySelector(".block6").style.backgroundImage = "url(imagesPuzzle/vasarely.png)";
    document.querySelector(".block7").style.backgroundImage = "url(imagesPuzzle/vasarely.png)";
    document.querySelector(".block8").style.backgroundImage = "url(imagesPuzzle/vasarely.png)";
    document.querySelector(".block9").style.backgroundImage = "url(imagesPuzzle/vasarely.png)";
    gameOn();
});


