import axios from "axios";

export const uploadAvatarToServer = async(image: any, options: any) => {
    const file = new FormData();
    file.append("avatar", image);
    return await axios.post("http://localhost:8080/images/upload", file, options)
};