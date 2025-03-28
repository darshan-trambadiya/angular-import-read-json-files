declare module '*.json' {
  const value: {
    fileName: string;
    filePath: string;
    details: Array<{
      id: number;
      name: string;
      description: string;
    }>;
  };
  export default value;
}
