fetch("https://api.scholarapi.dev/navin-chandra") // replace with your ID
  .then(res => res.json())
  .then(data => {
    document.getElementById("scholar-stats").innerHTML =
      `Citations: ${data.citations} <br> h-index: ${data.h_index}`;
  })
  .catch(() => {
    document.getElementById("scholar-stats").innerText =
      "Google Scholar stats unavailable";
  });
