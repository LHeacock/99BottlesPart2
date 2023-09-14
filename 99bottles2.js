
const friends = ["Puddles", "Bean", "Limoncello", "Ham", "Barbara"]

const button = document.createElement('button')
button.innerText = 'Sing!';
button.addEventListener('click', catButton);
let buttonHolder = document.getElementById("buttonHolder");
buttonHolder.appendChild(button);

function catButton() {
    //loop over friends names
    let catDiv = document.createElement('div')
    catDiv.className = "friend";
    for (const friend of friends) {
        let catDiv = document.createElement('div');
        let catH3 = document.createElement('h3');
        catDiv.className = 'friend';
        catH3.textContent = friend;
        catDiv.appendChild(catH3);
        document.body.appendChild(catDiv);

        // implement bottleCount's code here ... but without bottleCount
        // bottleCount(herp, derp); <= NO
        bottleCount(friend, catDiv)

    }



};

function bottleCount(name, div) {
    let lyrics = "";



    var word = "bottles";
    var count = 99;
    while (count > 0) {
        lyrics = lyrics + (name + ": " + count + " " + word + " of beer on the wall ");
        lyrics = lyrics + (count + " " + word + " of beer, ");
        lyrics = lyrics + ("Take one down, pass it around,");
        count = count - 1;
        if (count > 1) {
            //replace with lyrics = lyruics + 
            lyrics = lyrics + (count + " " + word + " of beer on the wall.");
        } else if (count == 1) {
            lyrics = lyrics + (count + " " + "bottles of Backforty Beer on the wall")
        }
        else {
            lyrics = lyrics + ("No more " + word + " of beer on the wall.");
        }

        let ptag = document.createElement('p')
        ptag.innerText = lyrics;
        console.log(lyrics )
        div.appendChild(ptag);
        lyrics = ""
        





    }
}




