import { FileType } from "../types/fileTypes";

export const addNode = (
  parentId: string,
  name: string,
  type: "file" | "folder",
  tree: FileType[]
): FileType[] => {
  return tree.map((node) => {
    if (node.id === parentId && node.type === "folder") {
      //check if name alredy exists in this folder
      const nameExists = node.children?.some((child) => child.name === name);

      if (nameExists) {
        alert(`A ${type} with the name  "${name}" already exists,`);
        return node;
      }

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

export const renameNode = (
  id: string,
  newName: string,
  tree: FileType[]
): FileType[] => {
  return tree.map((node) => {
    if (node.id === id) {
      return { ...node, name: newName };
    }
    if (node.children) {
      return { ...node, children: renameNode(id, newName, node.children) };
    }
    return node;
  });
};
