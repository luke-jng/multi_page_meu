
function delPageContent(insertedElem) {
    while (insertedElem.hasChildNodes() && insertedElem.lastChild.id != "nav_bar") {
        insertedElem.removeChild(insertedElem.lastChild);
    }
}

function menuItemGen(id, name, price, description, image, image_desc){
    const itemElem = document.createElement('div');
    itemElem.id = `${id}`;
    itemElem.className = 'item_id';

    const itemHead = document.createElement('div');
    itemHead.id = `${id}_head`;
    itemHead.className = 'item_head';

    const itemName = document.createElement('div');
    itemName.id = `${id}_name`;
    itemName.className = 'item_name';
    itemName.innerText = `${name}`;

    const itemPrice = document.createElement('div');
    itemPrice.id = `${id}_price`;
    itemPrice.className = 'item_price';
    itemPrice.innerText = `${price}`;

    itemHead.appendChild(itemName);
    itemHead.appendChild(itemPrice);

    const itemDescription = document.createElement('p');
    itemDescription.id = `${id}_description`;
    itemDescription.className = 'item_description';
    if (description != "placeholder") {
        itemDescription.innerText = `${description}`
    } else {
        itemDescription.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    }


    itemElem.appendChild(itemHead);
    itemElem.appendChild(itemDescription);

    const itemImage = new Image(300, 300);
    itemImage.id = `${id}_image`;
    itemImage.className = 'item_image';
    itemImage.src = image;
    itemImage.alt = image_desc

    itemElem.appendChild(itemImage);

    return itemElem;
}

export { delPageContent, menuItemGen }