// Function to solve a quadratic equation of the form ax^2 + bx + c = 0
function solveQuadratic(a, b, c) {
    if (a === 0) {
        return "Not a quadratic equation.";
    }
 
    // Calculate the discriminant (b^2 - 4ac)
    const discriminant = (b * b) - (4 * a * c);
 
    // If the discriminant is positive, we have two real roots
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [parseFloat(root1.toFixed(10)), parseFloat(root2.toFixed(10))];
    }
    // If the discriminant is zero, we have one real root
    else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [parseFloat(root.toFixed(10))];
    }
    // If the discriminant is negative, there are no real roots
    else {
        return "No real roots.";
    }
}

const result = solveQuadratic(1,-3, 2);
console.log(result);