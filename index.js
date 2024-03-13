// Define a helper function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

// Main function to demonstrate the usage of the helper function
function main() {
    // Define the dimensions of the rectangle
    var length = 5;
    var width = 3;

    // Calculate the area using the helper function
    var area = calculateRectangleArea(length, width);

    // Display the result
    console.log("The area of the rectangle with length", length, "and width", width, "is:", area);
}

// Call the main function to execute the code
main();
