function removeElement(elementID) {
    var element = document.getElementById(elementID);
    element.parentNode.removeChild(element);
}
setTimeout(() => {
    removeElement("error_");
    console.log("element gone?");
}, 2000);