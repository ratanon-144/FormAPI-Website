export interface ProductData {
    id?: number;
    name: string;
    group?: string;
    
    file?: any;
    file_obj?: URL | string;
    createdAt?: Date;
    updatedAt?: Date;
  }