

function sendMsg() {
    let msg = document.querySelector("#SearchInput1").value;
    const newEle = document.querySelector("#refernceId1").cloneNode(true);
    newEle.removeAttribute("id");
    newEle.style.visibility = "visible";
    newEle.children[0].innerHTML = msg;

    const msgDisplay = document.querySelector("#wBody1");
    msgDisplay.appendChild(newEle);
    document.querySelector("#SearchInput1").value = "";

    const newEle1 = document.querySelector("#refernceId2").cloneNode(true);
    newEle1.removeAttribute("id");
    newEle1.style.visibility = "visible";
    newEle1.children[1].innerHTML = msg;
    const msgDisplay1 = document.querySelector("#wBody2");
    msgDisplay1.appendChild(newEle1);
}


function sendMsg1() {
    let msg = document.querySelector("#SearchInput2").value;
    const newEle = document.querySelector("#refernceId1").cloneNode(true);
    newEle.removeAttribute("id");
    newEle.style.visibility = "visible";
    newEle.children[1].innerHTML = msg;
    const msgDisplay = document.querySelector("#wBody1");
    msgDisplay.appendChild(newEle);
    document.querySelector("#SearchInput2").value = "";

    const newEle1 = document.querySelector("#refernceId2").cloneNode(true);
    newEle1.removeAttribute("id");
    newEle1.style.visibility = "visible";
    newEle1.children[0].innerHTML = msg;
    const msgDisplay1 = document.querySelector("#wBody2");
    msgDisplay1.appendChild(newEle1);
}