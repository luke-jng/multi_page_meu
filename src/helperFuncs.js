
function delPageContent(insertedElem) {
    while (insertedElem.hasChildNodes() && insertedElem.lastChild.id != "nav_bar") {
        insertedElem.removeChild(insertedElem.lastChild);
    }
}

function menuItemGen(id, name, price, description){
    const itemElem = document.createElement('div');
    itemElem.id = `${id}`;

    const itemHead = document.createElement('div');
    itemHead.id = `${id}_head`;

    const itemName = document.createElement('div');
    itemName.id = `${id}_name`;
    itemName.innerText = `${name}`;

    const itemPrice = document.createElement('div');
    itemPrice.id = `${id}_price`;
    itemPrice.innerText = `${price}`;

    itemHead.appendChild(itemName);
    itemHead.appendChild(itemPrice);

    const itemDescription = document.createElement('p');
    itemDescription.id = `${id}_description`
    itemDescription.innerText = `${description}`

    itemElem.appendChild(itemHead);
    itemElem.appendChild(itemDescription);

    return itemElem;
}

export { delPageContent, menuItemGen }