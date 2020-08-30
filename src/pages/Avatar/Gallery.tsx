import React from "react";

import { getAvatar } from "../../assets/assets";

interface IGalleryProps {
  onUpload: (src: string) => void;
}

export const Gallery: React.FC<IGalleryProps> = ({onUpload}) => {
  return (
    <>
      <h3 className="mb-2">
        Не нашёл картинку?
        <span role="img" aria-label="*cry*">
          😢
        </span>
        Возьми мою.
        <span role="img" aria-label="*kiss*">
          😘
        </span>
      </h3>
      <div className="row gallery">
        {getAvatar.examples.map((item: string, index: number) => (
          <div className="col-sm-6 col-md-4 col-xl-3 p-1" key={index}>
            <img onClick={()=>onUpload(item)} className="gallery__image" src={item} alt="exm avatar" />
          </div>
        ))}
      </div>
    </>
  );
};
