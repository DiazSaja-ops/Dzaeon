const linksData = [
    { name: "My Store", url: "https://example.com" },
    { name: "YouTube", url: "https://youtube.com" },
    { name: "TikTok", url: "https://tiktok.com" },
    { name: "Instagram", url: "https://instagram.com" }
];

const linksContainer = document.getElementById("links");
const toggleButton = document.getElementById("toggleTheme");

// Generate links otomatis
linksData.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.innerText = link.name;
    a.className = "link";
    a.target
