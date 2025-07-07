//handle form and file input
const form = document.getElementById("fileForm");

form.addEventListener("submit", async (event) => {
  console.log("Form submit event triggered!");
  event.preventDefault(); // Prevent the default form submission

  const fileInput = document.querySelector('input[type="file"]');
  const file = fileInput.files[0];
  if (!file) {
    alert("Please select a file.");
    return;
  }

  if (file.type !== "application/zip") {
    alert("Please select a zip file.");
    return;
  }

  await processFile(file);
});

//process zip file
async function processFile(file) {
  try {
    const zip = await JSZip.loadAsync(file);
    await manageData(zip.files); // Pass the files to your data management function
  } catch (error) {
    console.error("Error processing file:", error);
    alert("Error processing file. See console for details.");
  }
}

//process data from zip file and collect .md files into a new zip
async function manageData(files) {
  const outputZip = new JSZip();

  for (const filename in files) {
    if (!Object.prototype.hasOwnProperty.call(files, filename)) {
      continue;
    }

    const file = files[filename];

    if (!filename.endsWith(".json")) {
      continue; // Skip non-JSON files
    }

    try {
      const jsonData = JSON.parse(await file.async("string"));
      const markdownContent = convertToMarkdown(jsonData);
      //const mdFilename = filename.replace('.json', '.md');
      const safeTitle = (jsonData.title || "untitled")
        .replace(/[\/\\?%*:|"<>]/g, "_") // Replace illegal filename characters
        .trim();
      const mdFilename = `${safeTitle}.md`;
      outputZip.file(mdFilename, markdownContent);
    } catch (error) {
      console.error(`Error processing ${filename}:`, error);
      alert(`Error processing ${filename}. See console for details.`);
    }
  }

  // Generate the zip and prompt download
  outputZip.generateAsync({ type: "blob" }).then(function (content) {
    downloadZip(content, "takeout_converted2markdown.zip");
  });
}

//convert data to markdown
function convertToMarkdown(jsonData) {
  let markdown = "";

  // Add labels if present
  if (jsonData.labels && Array.isArray(jsonData.labels)) {
    const labelNames = jsonData.labels.map((label) => label.name).join(", ");
    markdown += `#[[${labelNames}]]\n\n`;
  }

  // Add formatted date if present
  if (jsonData.userEditedTimestampUsec) {
    const date = new Date(jsonData.createdTimestampUsec / 1000);
    const options = { year: "numeric", month: "long", day: "numeric" };
    markdown += `(${date.toLocaleDateString(undefined, options)})\n\n`;
  }

  // Add textContent if present
  if (jsonData.textContent) {
    markdown += jsonData.textContent.replace(/\n/g, "  \n") + "\n\n";
  }

  // Add listContent as mardown list
  if (jsonData.listContent && Array.isArray(jsonData.listContent)) {
    jsonData.listContent.forEach((item) => {
      if (item.text) {
        markdown += `- ${item.text}\n`;
      }
    });
    markdown += `\n`;
  }
  return markdown;
}

//download zip file
function downloadZip(blob, filename) {
  const element = document.createElement("a");
  element.href = URL.createObjectURL(blob);
  element.download = filename;
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
