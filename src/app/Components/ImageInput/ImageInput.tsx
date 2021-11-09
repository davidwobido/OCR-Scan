import React, { ChangeEvent, useState } from 'react';

function ImageInput() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageUrl = URL.createObjectURL(file);
    setImageUrl(newImageUrl);
  };
  return (
    <label>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="uploadImage"
      />
      {imageUrl && <img src={imageUrl} />}
    </label>
  );
}
export default ImageInput;
