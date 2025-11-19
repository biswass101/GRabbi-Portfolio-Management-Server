import cloudinary from "../../../config/cloudinary.config";
import ApiError from "../../../shared/utils/apiError";
import httpStatus from "http-status";
import streamifier from "streamifier";

export class UploadService {
  async uploadImage(file: any) {
    return new Promise((resolve, reject) => {
      if (!file) {
        return reject(new ApiError(httpStatus.BAD_REQUEST, "No file uploaded"));
      }

      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "uploads",
          resource_type: "image",
          transformation: [
            { width: 800, height: 800, crop: "limit" },
            { quality: "auto" },
            { fetch_format: "auto" },
          ],
        },
        (error, result) => {
          

          if (error) {
            return reject(
              new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Upload failed")
            );
          }

          resolve({
            url: result?.secure_url,
            public_id: result?.public_id,
          });
        }
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }
  async deleteImage(public_id: string) {
    if (!public_id) {
      throw new ApiError(httpStatus.BAD_REQUEST, "public_id is required");
    }
    try {
      const result = await cloudinary.uploader.destroy(public_id);
      return result;
    } catch (err: any) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "File not Deleted");
    }
  }
}
