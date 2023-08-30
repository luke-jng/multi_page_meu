
function delPageContent(insertedElem) {
    while (insertedElem.hasChildNodes() && insertedElem.lastChild.id != "nav_bar") {
        insertedElem.removeChild(insertedElem.lastChild);
    }
}

export { delPageContent }