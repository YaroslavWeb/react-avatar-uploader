import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Uploader } from "./Uploader";
import { Gallery } from "./Gallery";
import { Alert } from "../../components/Alert";
import { IStore, IStateAvatar, IAlert } from "../../interfaces";
import { setProgress, setAvatar, uploadAvatar } from "./redux/actions";
import "./styles.scss";

export const Avatar: React.FC = () => {
  const { avatar, progressUpload } = useSelector<IStore, IStateAvatar>(
    (state) => state.avatarReducer
  );
  const dispatch = useDispatch();
  const inputAvatar = React.useRef<HTMLInputElement>(null);
  const [alerts, setAlerts] = React.useState<IAlert[]>([]);

  React.useEffect(() => {
    setAlerts((prev) => [
      ...prev,
      { text: `Форматы: jpg|jpeg|png. До 10мб.`, type: "primary" },
    ]);
    setTimeout(()=>{
      setAlerts([])
    }, 5000)
  }, []);

  // опции для axios запроса
  const options = {
    onUploadProgress: (progressEvent: any) => {
      const { loaded, total } = progressEvent;
      let percent = Math.floor((loaded * 100) / total);
      dispatch(setProgress(percent));
      console.log(`${loaded}b - ${total}b | ${percent}%`);
    },
  };

  // Загрузка картинки из input
  const onUpload = () => {
    if (inputAvatar.current?.files && inputAvatar.current.files[0]) {
      console.log(inputAvatar.current.files[0]);
      dispatch(setAvatar(URL.createObjectURL(inputAvatar.current.files[0])));
      dispatch(uploadAvatar(inputAvatar.current.files[0], options));
    }
  };

  // Загрузка картинки из галереи
  const onUploadFromGallery = (src: string) => {
    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        let file = new File([blob], "avatar.jpg", {
          type: "image/jpeg",
          lastModified: Date.now(),
        });
        dispatch(setAvatar(URL.createObjectURL(file)));
        dispatch(uploadAvatar(file, options));
      });
  };

  return (
    <div className="container">
      {alerts.map((item: IAlert, index: number) => (
        <Alert key={index} type={item.type}>
          {item.text}
        </Alert>
      ))}
      <div className="row">
        <div className="col-sm-12 my-2">
          <Uploader
            avatar={avatar}
            progressUpload={progressUpload}
            onUpload={onUpload}
            inputAvatar={inputAvatar}
          />
        </div>
        <hr />
        <div className="col-sm-12">
          <Gallery onUpload={onUploadFromGallery} />
        </div>
      </div>
    </div>
  );
};
