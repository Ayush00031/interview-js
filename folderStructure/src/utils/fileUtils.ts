import { FileType } from "../types/FileType";

export const addNode = (
  parentId: string,
  name: string,
  type: "file" | "folder",
  tree: FileType[]
): FileType[] => {
  return tree.map((node) => {
    if (node.id === parentId && node.type === "folder") {
      return {
        ...node,
        children: [
          ...(node.children || []),
          {
            id: Date.now().toString(),
            name,
            type,
            children: type === "folder" ? [] : undefined,
          },
        ],
      };
    }
    if (node.children) {
      return {
        ...node,
        children: addNode(parentId, name, type, node.children),
      };
    }
    return node;
  });
};

export const deleteNode = (id: string, tree: FileType[]): FileType[] => {
  return tree
    .filter((node) => node.id !== id)
    .map((node) => ({
      ...node,
      children: node.children ? deleteNode(id, node.children) : undefined,
    }));
};
