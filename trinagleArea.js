// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
    if (typeof base !== 'number' || typeof height !== 'number' || isNaN(base) || isNaN(height)) {
    return NaN;
}
    
    return ((base * height) / 2);
    
}

const output = calculateTriangleArea(5, 10);
console.log(output);
