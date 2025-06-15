"use client" 

import {
    ImageKitAbortError,
    ImageKitInvalidRequestError,
    ImageKitServerError,
    ImageKitUploadNetworkError,
    upload,
} from "@imagekit/next";
import { useRef, useState } from "react";

interface FileUploadProps {
    onSuccess: (res: any) => void
    onProgress?: (progress: number) => void
    fileType?: "image" | "video"
}

// UploadExample component demonstrates file uploading using ImageKit's Next.js SDK.
const FileUpload = ({onSuccess, onProgress, fileType}:FileUploadProps) => {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    //validation
    const validateFile = (file: File) => {
        if (fileType === "video") {
            if (!file.type.startsWith("video/")) {
                setError("Please upload a valid video file");
            }
        }

        if (file.size > 100 * 1024 * 1024) { 
            setError("File size exceeds 100MB");
        }

        return true;

    }

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.value;
        
    }

    return (
        <>
            <input
                type="file"
                accept={fileType === "video" ? "video/*" : "image/*"}
                onChange={handleFileChange}
            />
            {uploading && (
                <span>Loading...</span>
            )}
            
        </>
    );
};

export default FileUpload;