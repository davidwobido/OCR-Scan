import React, { useState } from 'react';
import ImageInput from '../../Components/ImageInput/ImageInput';

function Scan() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <div>
      <ImageInput onUpload={setImageUrl} />
      <button disabled={imageUrl === null}>Scan</button>
      <a href="#">Skip</a>
    </div>
  );
}
export default Scan;
