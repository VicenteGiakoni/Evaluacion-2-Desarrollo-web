const selector = document.querySelector(".coso");
const apiURL = "https://mhw-db.com/weapons";

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
            <div class="info">
            <h3>Nombre: ${weapon.name}</h3>
            <p>Rareza: ${weapon.rarity}</p>
            <p>Tipo de arma: ${weapon.type}</p>
            <p>Daño : ${weapon.attack.display}</p>
            <p>Elemento: : ${weapon.elements.type}</p>
            <p>Daño elemental : ${weapon.elements.damage}</p>
            </div>
        `;
    });
    selector.innerHTML = template
}
ShowWeapons()
