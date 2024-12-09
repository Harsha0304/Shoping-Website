// Script to dynamically adjust prices based on the device type
document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");
    const userAgent = navigator.userAgent.toLowerCase();

    // Determine device type
    const isDesktop = userAgent.includes("windows") || userAgent.includes("macintosh");
    const isAndroid = userAgent.includes("android");

    // Adjust prices
    products.forEach((product) => {
        const basePrice = parseFloat(product.getAttribute("data-price"));
        let adjustedPrice = basePrice;

        if (isDesktop) {
            adjustedPrice = basePrice * 1.07; // Increase by 7%
        } else if (isAndroid) {
            adjustedPrice = basePrice * 0.7; // Decrease by 30%
        }

        // Update the price in the UI
        product.querySelector(".price").textContent = `₹${adjustedPrice.toFixed(2)}`;
    });
});
