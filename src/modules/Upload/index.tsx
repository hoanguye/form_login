import React, { useCallback, useState } from 'react';
import Cropper from 'react-easy-crop';
interface Props {}

const Upload = (props: Props) => {
  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    setImage(e.target.files);
  };

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [image, setImage] = useState<any>('');
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);
  return (
    <div>
      <input type="file" onChange={handleOnChange} multiple />
      <img src="https://gstatic.gvn360.com/2022/05/Troi-dem_-13-1024x576.jpg"></img>
      {image && (
        <>
          <img src={image} />
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={4 / 3}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </>
      )}
    </div>
  );
};

export default Upload;
