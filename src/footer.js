const footerElem = () => {
    const footerDiv = document.getElementById('footer_content');

    const footerContainer = document.createElement('div');
    footerContainer.id = 'footer_container';

    const unorderedListFooterNotes = document.createElement('ul');
    unorderedListFooterNotes.id = "footer_list";

    const noteOne = document.createElement('li');
    noteOne.id = 'note_one';
    noteOne.innerHTML = 'Based on <a class="refsource" href="https://www.theodinproject.com/"> The Odin Project</a>&apos;s <a class="refsource" href="https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page">Restaurant Page Project</a>';

    // const noteTwo = document.createElement('li');
    // noteTwo.id = 'note_two';
    // noteTwo.innerText = ""

    unorderedListFooterNotes.appendChild(noteOne);

    footerContainer.appendChild(unorderedListFooterNotes);

    const backgroundCredit = document.createElement('p');
    backgroundCredit.id = 'background_credit';
    backgroundCredit.innerHTML = `Background Photo by <a class="refsource" href="https://unsplash.com/@sevcovic23">Peter Sevcovic</a> on <a class="refsource" href="https://unsplash.com">Unsplash</a>`


    footerDiv.append(
        backgroundCredit,
        footerContainer
        );
}

export { footerElem }