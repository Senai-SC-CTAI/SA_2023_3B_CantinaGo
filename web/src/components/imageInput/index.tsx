import "./style.css"
import image from '../../assets/icons/Image.svg'
import React, { useState } from "react";

const imageInput = () => {
        const [imageSrc, setImageSrc] = useState("");
      
        const handleFileChange = (e: { target: { files: any[]; }; }) => {
          const file = e.target.files[0];
      
          if (file) {
            const reader = new FileReader();
      
            reader.addEventListener("load", (e) => {
              const readerTarget = e.target;
              setImageSrc(readerTarget.result);
            });
      
            reader.readAsDataURL(file);
          } else {
            setImageSrc("");
          }
        };
  return (
    <div>
      <label className="pictureCriar" htmlFor="pictureInputCriar">
        {imageSrc ? (
          <div className="picture__image">
            <img src={imageSrc} alt="Selected" className="picture__img" />
          </div>
        ) : (
          <>
            <div className="hidden-content">
                <img src={image} alt="" />
                <p className="pictureTextCriar">Insira Imagem</p>
                <span className="picutreImageCriar"></span>
            </div>
          </>
        )}
      </label>
      <input
        type="file"
        accept="image/*"
        id="pictureInputCriar"
        onChange={handleFileChange}
      />
    </div>
  )
}

export default imageInput
