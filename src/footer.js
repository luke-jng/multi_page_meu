const footerElem = () => {
    const footerDiv = document.getElementById('footer_content');

    const footerContainer = document.createElement('div');
    footerContainer.id = 'footer_container';

    const unorderedListFooterNotes = document.createElement('ul');
    unorderedListFooterNotes.id = "footer_list";

    const noteOne = document.createElement('li');
    noteOne.id = 'note_one';
    noteOne.innerText = "Based on The Odin Project's Restaurant Page Project"

    // const noteTwo = document.createElement('li');
    // noteTwo.id = 'note_two';
    // noteTwo.innerText = ""

    unorderedListFooterNotes.appendChild(noteOne);

    footerContainer.appendChild(unorderedListFooterNotes);

    footerDiv.appendChild(footerContainer);
}

export { footerElem }