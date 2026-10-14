const selector = document.querySelector(".coso");

const filter = encodeURIComponent(JSON.stringify({
  type: "great-sword",
  "elements.type": "fire"

}));
const apiURL = "https://mhw-db.com/weapons?q=${filter}";


async function getweapon() {
    const todo = await fetch(apiURL)
    const weapons = await todo.json()
    return weapons

}
async function ShowWeapons() {
    const weapons = await getweapon();
    let template = "";


    weapons.forEach(weapon => {
        template += `
            <section class="card" style="max-width: 320px">
                <h3>Nombre: ${weapon.name}</h3>
                <p>Rareza: ${weapon.rarity}</p>
                <p>Tipo de arma: ${weapon.type}</p>
                <p>Daño : ${weapon.attack.display}</p>
                <p>Elemento: : ${weapon.elements[0] ? weapon.elements[0].type : "Ninguno"}</p> 
                <p>Daño elemental : ${weapon.elements[0] ? weapon.elements[0].damage : "N/A"}</p>
            </section>
        `;
    });
    selector.innerHTML = template
}
ShowWeapons()
