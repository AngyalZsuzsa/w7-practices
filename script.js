/*
Klasszikus function:

function functionName(parameter) {
    parameter === "argumentum as a string"
}
bárhol elérheto, meghívása:
functionName("argumentum as a string");



2.megoldás: ha változóba akarunk egy fü.t elmenteni:

const argument = "argumentum as a string";

const functionName = function (parameter) {
    parameter === "argumentum as a string":
}
a változó sajátosságai szerint érem el, csak akkor férünk hozzá, miután létrehoztuk és elneveztük
meghívása:
functionName(argument);



3.megoldás:


const functionName = () => {}
meghívása:
functionName();

*/


const input = (type, name, label) => {
    return `
        <div>
            <label>${label}</label>
            <input type="${type}" name="${name}">
        </div>
    `
}
const formElement = `
    <form id="form">
        ${ input("text", "firstname", "Keresztneved") }
        ${ input("file", "profilePicture", "Profilképed") }
        ${ input("email", "personalEmail", "Email-címed") }
        ${ input("radio", "newsletter", "Szeretnél-e hírlevelet kapni?") }
        ${ input("checkbox", "terms", "Elfogadod-e a felhasználási feltételeket?") }
        <button>ok</button>
        </form>
`;
        //itt már csak használjuk, tehát a text argumentum

const formSubmit = (event)  => {
    event.preventDefault();
    //az alapértelmezett muködése ne fusson le, ezzel érem el
    console.log(event);
    event.target.classList.add("submitted");
    /*maga a form elementre vonatkozik*/
}

const inputEvent = (event)  => {
    console.log(event.target.value);
    document.getElementById("inputValueContent").innerHTML = event.target.value;
    }

function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", formElement);
    /* ez egy metódus, aminek 2 paramétert küldök*/
    root.insertAdjacentHTML("beforeend", `
        <div id="inputValueContent"></div>
    `);

    const form = document.getElementById("form");
    /*a submit esemény nem a gombon hivódik meg, hanem a formon,
    ezután a preventDefaulttal megfogom az eseményt*/
    form.addEventListener("submit", formSubmit);
    /*nem akarom lefuttatni a fü.t, csak argumentumként átadni
    spec és fontos: nem szeretnék ennek semmit átadni
    addEventList feature: eseményobjektumot kap*/

    const inputList = form.querySelectorAll("input");
    for (const input of inputList) {
        input.addEventListener("input", inputEvent)
    }
}

window.addEventListener("load", loadEvent);