    let list = document.getElementsByTagName("ul")(0);
    let newItemLast = document.createElement("li"); //<li><li>
    let newTextLast = document.createTextNode("cream"); //cream

    newItemLast.appendChild(newTextLast);// <li>cream<li>
    list.appendChild(newItemLast);
    let newItemFirst = document.createElement("li"); //<li><li>
    let newTextFirst = document.createTextNode("kale");
    newItemFirst.appendChild("newTextFirst"); //<li<kale<li>
    list.insertBefore(newItemFirst, list.firstChild);
