import { Uploader } from '@/app/types';
import { horacePath, PostSettings } from '@/lib/setting';

export const getPresignedUrl = async (uploader: Uploader) => {
  const resp = await fetch(
    `${horacePath}info/s3/presigned`,
    PostSettings(uploader),
  );
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return resp.json();
};

export const uploadPresignedUrl = async (
  file: File,
  presignedUrl: string,
): Promise<string> => {
  const response = await fetch(presignedUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': file.type,
    },
    body: file,
  });
  if (!response.ok) {
    throw new Error(`Failed to upload file: ${response.statusText}`);
  }
  return presignedUrl.split('?')[0]; // Return the URL without query parameters
};
export const deleteObject = async (key: string): Promise<void> => {
  const response = await fetch(`${horacePath}info/s3object?key=${key}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key }),
  });
  if (!response.ok) {
    throw new Error(`Failed to delete object: ${response.statusText}`);
  }
};
export const uploadImageToS3 = async (imageBinary: Blob): Promise<string> => {
  const formData = new FormData();

  formData.append('image', imageBinary);

  const headers = {
    method: 'PUT',
    body: formData,
  };
  const resp = await fetch(`${horacePath}info/s3/upload`, headers);
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return resp.json();
};
