import React from "react";

import { getAvatar } from "../../assets/assets";

interface IUploaderProps {
  avatar: string;
  progressUpload: number;
  onUpload: () => void;
  inputAvatar: React.MutableRefObject<HTMLInputElement | null>;
}

export const Uploader: React.FC<IUploaderProps> = ({
  avatar,
  progressUpload,
  onUpload,
  inputAvatar,
}) => {
  // Магическое число 16 - это размер прогресс бара в rem.
  const RightProgress: number =
    progressUpload <= 50 ? (progressUpload * 16) / 50 : 16;
  const LeftProgress: number =
    progressUpload >= 50 ? 16-((progressUpload - 50) * 16) / 50 : 16;

  return (
    <div className="avatar">
      <input
        type="file"
        ref={inputAvatar}
        onChange={onUpload}
        id="avatar-upload"
        className="avatar__input"
      />
      <label className="avatar__label" htmlFor="avatar-upload">
        <img
          className="avatar__image"
          src={avatar ? avatar : getAvatar.placeholder}
          alt="avatar"
        />
        <div className="avatar__overlay">
          <span role="img" aria-label="upload">
            📥
          </span>
        </div>
        <div className="avatar__loading">
          <span
            style={{ clip: `rect(auto, auto, ${RightProgress}rem, 8rem)` }}
          />
          <span
            style={{ clip: `rect( ${LeftProgress}rem, 8rem, auto, auto)` }}
          />
        </div>
      </label>
    </div>
  );
};
