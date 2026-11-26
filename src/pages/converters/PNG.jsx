import convertImage from "./converter";
import { useState } from "react";

function PNG() {
    // this is what displays under /file_name sooo.... we have sub websites but all of them also include whatever is in
    // main on top... yk less code the better.

    const [url, setUrl] = useState(null);

    async function handleFile(e) {
        const file = e.target.files[0];
        if (!file) return;

        const blob = await convertImage(file, 'image/png')
        setUrl(URL.createObjectURL(blob));
    }

    return (
        <>
        <input type="file" accept="image/*" onChange={handleFile}/>

        {url && (
            <a href="url" download="converted.png">Dowload PNG.</a>
        )}
        </>
    )
}

export default PNG