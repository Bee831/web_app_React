import { useState } from "react";

function Converter({ type, display }) {
  // this is what displays under /file_name sooo.... we have sub websites but all of them also include whatever is in
  // main on top... yk less code the better.

  // michal kolny
  const [url, setUrl] = useState(null);

  async function convertImage(file, format = 'image/jpeg') {
    const img = await createImageBitmap(file);
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext('2d');

    if (format === 'image/jpeg') {
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    ctx.drawImage(img, 0, 0);

    return new Promise(resolve => canvas.toBlob(resolve, format, 0.5));
}

  async function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const blob = await convertImage(file, type);
    setUrl(URL.createObjectURL(blob));
  }

  return (
    <div className="converter-box">
      <p>upload a file and convert to { display }.</p>
      <div className="top-card">
        <label htmlFor="file_input" className="button card-btn">Choose File.</label>
        <input type="file" accept="image/*" onChange={handleFile} id="file_input" />
        <div className={!url && "inactive"}>
          <a href={url} download={ `converted.${type.slice(type.indexOf("/") + 1)}`} className="button card-btn">
            Download { display }.
          </a>
        </div>
      </div>
      {url && (
        <div className="img-border">
        <img className="previev" src={url} alt="converted image." />
        </div>
      )}
    </div>
  );
}

export default Converter;