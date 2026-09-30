const fs = require("fs");
const pdf = require("pdf-parse");

(async () => {
  try {
    const filePath = "c:/Users/a-ghiasi.AGRI-BANK/Downloads/علی_غیاثی-en.pdf";
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    fs.writeFileSync("src/data/resume.txt", data.text, "utf8");
    console.log("EXTRACT_DONE");
  } catch (err) {
    console.error("EXTRACT_ERROR", err);
    process.exit(1);
  }
})();
