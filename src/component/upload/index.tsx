import axios from "axios"
const Upload = async (file: any) => {
    // Upload ảnh lên Cloudinary
    const CLOUD_NAME = "doa7mkkpq";
    const PRESET_NAME = "upload";
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`; // Thay thế với giá trị của bạn
    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME);
    formData.append("file", file);
    // gửi lên cloudinary
    const response = await axios.post(
        api,
        formData
    );

    return response.data.secure_url
}

export default Upload