function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);


    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
   
    // get area
    const area = .5 * base * height;
    console.log(area);

    // show area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

}
function calculateRectangleArea(){
    // get width field value
    const widthField = document.getElementById('rectangle-width');
    const widthFieldText = widthField.value;
    const width = parseFloat(widthFieldText);
    
    // get rectangle height
    const heightField = document.getElementById('rectangle-height');
    const heightFieldText = heightField.value;
    const height = parseFloat(heightFieldText);
    
    // get area
    const area = width * height ;
    console.log(area);
  

    // show area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
    
}

//  reuseable function >-- reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('Parallelogram-base');
    
    const height = getInputValue('Parallelogram-height');
    
    const area = base * height;
    setElementValue('Parallelogram-area', area);
    
}

// reuseable get input value field in number
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// set area
function setElementValue(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area  = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementValue('ellipse-area', areaTwoDecimal);
}