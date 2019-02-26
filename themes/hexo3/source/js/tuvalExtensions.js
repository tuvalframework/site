function createButton(x,y,text, onClickFunc) {
    var button = document.createElement('button');
    button.style.width='100px';
    button.innerText = text;
    button.style.position= 'absolute';
    button.style.top = y + 'px';
    button.style.left= x + 'px';
    button.onclick = function () {
        if (onClickFunc) {
            onClickFunc();
        }
        evt.preventDefault();
        evt.stopImmediatePropagation();
    }
    document.body.appendChild(button);
    return button;
}