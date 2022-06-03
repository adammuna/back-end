
const itemsContainer = document.querySelector('.itemContainer')
const getItemsBtn = document.querySelector('#getItemsBtn')
const nameInput = document.getElementById("nameInput")
const brandInput = document.getElementById("brandInput")
const priceInput = document.getElementById("priceInput")
const quantityInput = document.getElementById("quantityInput")
const addItemBtn = document.getElementById("addItemBtn")

const getInputValues = function() {
    const name = nameInput.value
    const brand = brandInput.value
    const price = priceInput.value
    const quantity = quantityInput.value
    return { name, brand, price, quantity }
}

const addItemToDB = async function() {
    const item = getInputValues()
    const DbRes = await axios.post('/item/addNewItems', item)
    console.log(DbRes);
    getItemsFromDB()
}

addItemBtn.addEventListener('click', addItemToDB)

const renderItems = function(items) {
    itemsContainer.innerHTML = ""
    items.forEach((item) => {
        const { name, brand, price, quantity, _id } = item
        const itemContainer = `
             <div class="item" id="${_id}">
                <h2>name: ${name} </h2>
                 <h3>brand: ${brand} </h3>
                 <h3>price: ${price}</h3>
                 <h3>quantity: ${quantity}</h3>
            </div>
        `
        itemsContainer.innerHTML += itemContainer
    });
}

const getItemsFromDB = async function() {
    const items = await $.get('/item/getItems')
    renderItems(items)
}

getItemsBtn.addEventListener('click', getItemsFromDB)
getItemsFromDB()
