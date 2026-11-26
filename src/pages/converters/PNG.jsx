import convertImage from "./converter";
import { useState } from "react";

function PNG() {
  // this is what displays under /file_name sooo.... we have sub websites but all of them also include whatever is in
  // main on top... yk less code the better.

  // michal kolny
  const [url, setUrl] = useState(null);

  async function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const blob = await convertImage(file, "image/png");
    setUrl(URL.createObjectURL(blob));
  }

  return (
    <div className="converter-box">
      <input type="file" accept="image/*" onChange={handleFile} />

      {url && (
        <div className="download-row">
          <a href={url} download="converted.png" className="button download-btn">
            Download PNG.
          </a>
        </div>
      )}
    </div>
  );
}

export default PNG;