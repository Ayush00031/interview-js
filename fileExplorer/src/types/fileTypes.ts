export type FileType = {
  id: string;
  name: string;
  type: "file" | "folder";
  children?: FileType[];
};
