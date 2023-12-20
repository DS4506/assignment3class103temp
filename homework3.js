function convertTemperature(start, scale) {
    if (scale === "C") {
        // Convert Celsius to Fahrenheit
        const fahrenheit = (start * 9/5) + 32;
        console.log(`${start}°C is ${fahrenheit.toFixed(2)}°F`);
    } else if (scale === "F") {
        // Convert Fahrenheit to Celsius
        const celsius = (start - 32) * 5/9;
        console.log(`${start}°F is ${celsius.toFixed(2)}°C`);
    } else {
        console.log("Invalid scale. Please use 'C' for Celsius or 'F' for Fahrenheit.");
    }
}