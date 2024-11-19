// const container = document.querySelector(".container")
// const listObject = document.querySelector(".listObject");
// const checkBox = document.querySelector(".fakeCheckbox");
// const checkMark = checkBox.querySelector(".checkMark");
// const xOut = document.querySelector(".xOutSection");
const addItem = document.querySelector(".addItemText");



// checkBox.addEventListener("mouseover", (event) => {
//     checkBox.style.cursor = "pointer";
//     checkBox.style.backgroundColor = "rgba(0,0,0,.2)";
// })

// checkBox.addEventListener("mouseout", (event) => {
//     checkBox.style.backgroundColor = "rgb(255,255,255)";
// })

// checkMark.addEventListener("click", (event) => {
//     checkMark.classList.toggle("hidden");
// })

// xOut.addEventListener("mouseover", (event) => {
//     xOut.style.backgroundColor = "rgba(0,0,0,.3)"
// })

// xOut.addEventListener("mouseout", (event) => {
//     xOut.style.backgroundColor = "rgb(171, 228, 245)"
// })

// xOut.addEventListener("click", (event) => {
//     while (listObject.lastChild) {
//         listObject.lastChild.remove();
//     }
// })


addItem.addEventListener("click", (event) => {
    createListObject();

})

const createListObject = () => {
    const newListObject = document.createElement("div");
    newListObject.classList.add("listObject");

    const newCheckbox = document.createElement("div");
    newCheckbox.classList.add("fakeCheckbox");

    newCheckbox.addEventListener("mouseover", (event) => {
        newCheckbox.style.cursor = "pointer";
        newCheckbox.style.backgroundColor = "rgba(0,0,0,.2)";
    })

    newCheckbox.addEventListener("mouseout", (event) => {
        newCheckbox.style.backgroundColor = "rgb(255,255,255)";
    })

    const newCheckMark = document.createElement("p");
    newCheckMark.textContent = "✓";
    newCheckMark.classList.add("checkMark");
    newCheckMark.classList.add("hidden");
    
    newCheckbox.append(newCheckMark);

    newCheckMark.addEventListener("click", (event) => {
        newCheckMark.classList.toggle("hidden");
    })

    const newInputText = document.createElement("input");
    newInputText.type = "text";
    newInputText.classList.add("listText");

    const newXOutSection = document.createElement("div");
    newXOutSection.classList.add("xOutSection");

    const newXOut = document.createElement("p");
    newXOut.classList.add("xOut");
    newXOut.textContent = "x";
    newXOutSection.append(newXOut);

    newXOutSection.addEventListener("mouseover", (event) => {
        newXOutSection.style.backgroundColor = "rgba(0,0,0,.3)"
    })
    
    newXOutSection.addEventListener("mouseout", (event) => {
        newXOutSection.style.backgroundColor = "rgb(171, 228, 245)"
    })
    
    newXOutSection.addEventListener("click", (event) => {
        // while (newListObject.lastChild) {
        //     newListObject.lastChild.remove();
        // }
        newListObject.outerHTML=" "
        newListObject.remove;
    })

    newListObject.append(newCheckbox);
    newListObject.append(newInputText);
    newListObject.append(newXOutSection);
    document.querySelector(".allListObjects").append(newListObject);
}
createListObject();
