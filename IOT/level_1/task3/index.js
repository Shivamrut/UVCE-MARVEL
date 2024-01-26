var btn = document.getElementById("disco");
var btnlbl = document.getElementById("disco-name");
var body = document.body;
var colorPicker = document.getElementById("colorPicker");
colorPicker.style.visibility = "hidden";

btn.addEventListener("click", () => {
    colorPicker.click();
});

colorPicker.addEventListener("input", (event) => {
    var selectedColor = event.target.value;
    console.log("Selected color:", selectedColor);

    body.style.backgroundColor = selectedColor;

    
    var complementaryColor = calculateComplementaryColor(selectedColor);

    btnlbl.style.color = complementaryColor;
});

// Function to calculate the complementary color
function calculateComplementaryColor(color) {
    // Assuming color is in hex format, convert it to RGB
    var hex = color.replace(/^#/, '');
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    // Calculate complementary color by inverting each RGB component
    var complementaryR = 255 - r;
    var complementaryG = 255 - g;
    var complementaryB = 255 - b;

    // Convert back to hex format
    var complementaryHex = "#" + ((1 << 24) | (complementaryR << 16) | (complementaryG << 8) | complementaryB).toString(16).slice(1);

    return complementaryHex;
}
