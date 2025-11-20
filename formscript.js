document.getElementById("addBtn").addEventListener("click", function () {
    let labelText = document.getElementById("labelInput").value;
    let type = document.getElementById("typeSelect").value;

    if (labelText === "") {
        alert("Please enter a label name!");
        return;
    }

    let div = document.createElement("div");
    div.style.marginBottom = "8px";


    let label = document.createElement("label");
    label.innerText = labelText + ": ";
    div.appendChild(label);


    let input = document.createElement("input");
    input.type = type;
    div.appendChild(input);

    document.getElementById("formArea").appendChild(div);


    document.getElementById("labelInput").value = "";
});

document.getElementById("saveBtn").addEventListener("click", function () {
    let previewArea = document.getElementById("formArea");

    if (previewArea.children.length === 0) {
        alert("No fields to save!");
        return;
    }

    

    alert("Form saved Succesfully");
});




































































