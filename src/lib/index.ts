
import { ReadStream } from "fs"

export namespace ApolloServerFileUploads {

  export type File = {
    filename: string;
    mimetype: string;
    encoding: string;
    stream?: ReadStream;
  }
  
  export type UploadedFileResponse = {
    filename: string;
    mimetype: string;
    encoding: string;
    url: string;
  }
  
  export interface IUploader {
    singleFileUploadResolver: (parent, { file } : { file: File }) => Promise<UploadedFileResponse>;
    multipleUploadsResolver: (parent, { files } : { files: File[] }) => Promise<UploadedFileResponse[]>;
  }
}