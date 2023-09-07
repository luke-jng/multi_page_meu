
function delPageContent(insertedElem) {
    while (insertedElem.hasChildNodes() && insertedElem.lastChild.id != "nav_bar") {
        insertedElem.removeChild(insertedElem.lastChild);
    }
}

function menuItemGen(id, name, price, description, image, image_desc, image_author_websource, image_author){
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
    
    const itemImageContainer = document.createElement('div');
    itemImageContainer.id = `${id}_imagecontainer`
    itemImageContainer.className = 'item_imagecontainer';

    const itemImage = new Image(300, 300);
    itemImage.id = `${id}_image`;
    itemImage.className = 'item_image';
    itemImage.src = image;
    itemImage.alt = image_desc

    const itemImageOverlay = document.createElement('div');
    itemImageOverlay.id = `${id}_imageoverlay`;
    itemImageOverlay.className = 'item_imageoverlay';
    
    const itemImageOverlayContent = document.createElement('div');
    itemImageOverlayContent.id = `${id}_imageoverlaycontent`;
    itemImageOverlayContent.className = 'item_imageoverlaycontent';
    itemImageOverlayContent.innerHTML = `Photo by <a class="refsource" href="https://unsplash.com/@${image_author_websource}">${image_author}</a> on <a class="refsource" href="https://unsplash.com">Unsplash</a>`

    itemImageOverlay.appendChild(itemImageOverlayContent);

    itemImageContainer.append(
        itemImage,
        itemImageOverlay
    );

    itemElem.appendChild(itemImageContainer);

    return itemElem;
}

export { delPageContent, menuItemGen }