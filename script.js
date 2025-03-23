(async () => {
    const LICENSE_URL = "https://itisuniqueofficial.github.io/license/template.json"; // Replace with actual JSON URL
    const currentDomain = window.location.hostname;
    const REDIRECT_DELAY = 7000; // 7 seconds delay before redirect

    try {
        // Fetch license JSON in real-time
        const response = await fetch(LICENSE_URL, { cache: "no-store" });
        if (!response.ok) throw new Error("Failed to fetch license data");

        const licenseData = await response.json();
        const license = licenseData.licenses[currentDomain];
        const redirectURL = licenseData.redirect_url || "https://www.itisuniqueofficial.com/";
        const fallbackRedirectURL = licenseData.fallback_redirect_url || "https://www.itisuniqueofficial.com/error";

        if (!license) {
            console.warn("⛔ License not found. Redirecting in 7 seconds...");
            setTimeout(() => (window.location.href = redirectURL), REDIRECT_DELAY);
            return;
        }

        if (license.status !== "active") {
            console.warn("🚫 License is inactive. Redirecting in 7 seconds...");
            setTimeout(() => (window.location.href = redirectURL), REDIRECT_DELAY);
            return;
        }

        if (new Date(license.expires) < new Date()) {
            console.warn("📅 License has expired. Redirecting in 7 seconds...");
            setTimeout(() => (window.location.href = redirectURL), REDIRECT_DELAY);
            return;
        }

        // Log license details
        console.log(`✅ License Valid for: ${currentDomain}`);
        console.table({
            "🔹 Status": license.status,
            "📅 Expires On": license.expires,
            "👤 Buyer Name": license.buyer_name,
            "🌍 Buyer Country": license.buyer_country,
            "🛒 Purchase Date": license.purchase_date,
            "📜 License Type": license.license_type,
            "🏢 License Provider": licenseData.license_provider
        });

    } catch (error) {
        console.error("❌ License check failed. Redirecting in 7 seconds...", error);
        setTimeout(() => (window.location.href = fallbackRedirectURL), REDIRECT_DELAY);
    }
})();
