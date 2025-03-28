export interface JsonData {
  fileName: string;
  filePath: string;
  details: Array<{
    id: number;
    name: string;
    description: string;
  }>;
}
