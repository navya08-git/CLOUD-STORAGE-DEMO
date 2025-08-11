async function upload() {
  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/upload", {
    method: "POST",
    body: formData
  });

  const data = await response.json();
  document.getElementById("link").innerHTML = `Uploaded: <a href="${data.url}" target="_blank">Download Link</a>`;
}

