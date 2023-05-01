let backgroundColor = document.getElementById("bgColorInput");
let fontColor = document.getElementById("fontColorInput");
let fontSize = document.getElementById("fontSizeInput");
let fontWeight = document.getElementById("fontWeightInput");
let padding = document.getElementById("paddingInput");
let borderRadius = document.getElementById("borderRadiusInput");


let customButton = document.getElementById("customButton");

function applyButton() {
    let bgColorValue = backgroundColor.value;
    console.log(bgColorValue);
    let fontColorValue = fontColor.value;
    let fontSizeValue = fontSize.value;
    let fontWeightValue = fontWeight.value;
    let paddingValue = padding.value;
    let borderRadiusValue = borderRadius.value;

    customButton.style.backgroundColor = bgColorValue;
    customButton.style.color = fontColorValue;
    customButton.style.fontSize = fontSizeValue;
    customButton.style.fontWeight = fontWeightValue;
    customButton.style.padding = paddingValue;
    customButton.style.borderRadius = borderRadiusValue;
}