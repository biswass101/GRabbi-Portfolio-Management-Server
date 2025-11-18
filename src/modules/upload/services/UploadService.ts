import cloudinary from "../../../config/cloudinary.config";
import ApiError from "../../../shared/utils/apiError";
import httpStatus from 'http-status'

export class UploadService {
    async uploadImage (file: any) {
        if(!file) {
            throw new ApiError(httpStatus.NOT_FOUND, "No file Uploaded");
        }

        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: "/src/uploads",
                resource_type: "image",
                transformation: [
                    { width: 800, height: 800, crop: "limit" },
                    { quality: "auto" },
                    { fetch_format: "auto" },
                ],
            },
            (error, result) => {
                if(error) {
                    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Upload failed")
                }

                return 
            }
        )
    }
}