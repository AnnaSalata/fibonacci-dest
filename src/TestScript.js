package src;

export function renderTestScript() {
    try {
        const htmlContent = `
            <html>
                <head>
                    <title>Fibonacci Test Script</title>
                </head>
                <body>
                    <h1>Fibonacci Test Script</h1>
                    <p>This script is designed to test the Fibonacci calculations.</p>
                    <p>The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.</p>
                    <p>To use the Fibonacci calculator, simply input a number to receive the corresponding Fibonacci value.</p>
                    <p>Ensure to test edge cases, such as negative numbers and large inputs, to validate the robustness of the calculator.</p>
                </body>
            </html>
        `;
        console.log(htmlContent);
    } catch (error) {
        console.log("An error occurred while rendering the test script page.");
    }
}