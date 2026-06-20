export type StorageConfig = {
  endpoint: string;
  accessKey: string;
  secretKey: string;
  bucket: string;
};

export type DatabaseConfig = {
  uri: string;
};

export function getFutureDatabaseConfig(): DatabaseConfig {
  return {
    uri: process.env.MONGODB_URI ?? "",
  };
}

export function getFutureStorageConfig(): StorageConfig {
  return {
    endpoint: process.env.MINIO_ENDPOINT ?? "",
    accessKey: process.env.MINIO_ACCESS_KEY ?? "",
    secretKey: process.env.MINIO_SECRET_KEY ?? "",
    bucket: process.env.MINIO_BUCKET ?? "jobdenker-documents",
  };
}

