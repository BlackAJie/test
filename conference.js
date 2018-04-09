function add(obj) {
    var img = document.createElement("img");
    img.src = "checked";
    var parent = obj.parentNode;
    parent.prepend(img);
    console.log(obj);
}

function show(str = ["nothinh"]) {
    console.log(str);
}