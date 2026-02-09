const APIURL = "https://ns-website-backend.onrender.com/api";

// API route for contact form submission
export async function contactCreate(request) {
    const response = await fetch(`${APIURL}/contact/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData.message || "Failed to submit contact form");
        return await errorData;
    }
    console.log("Contact form submission successful:", await response);
    return await response.json();
}

// API route for career form submission
export async function careerCreate(request) {
    console.log(request);
    const response = await fetch(`${APIURL}/career/`, {
        method: "POST",
        body: request,
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error("Career form submission error:", errorData);
        return await errorData;
    }

    console.log("Career form submission successful:", await response);
    return await response.json();
}
