import React, { useState } from "react";
import { FileType } from "../types/FileType";
import FileNode from "./FileNode";
import { addNode, deleteNode } from "../utils/fileUtils";

const FileExplorer: React.FC = () => {
  const [tree, setTree] = useState<FileType[]>([
    { id: "1", name: "Root", type: "folder", children: [] },
  ]);

  const handleAddNode = (
    parentId: string,
    type: "file" | "folder",
    name: string
  ) => {
    setTree((prevTree) => [...addNode(parentId, name, type, prevTree)]);
  };

  const handleDeleteNode = (id: string) => {
    setTree((prevTree) => [...deleteNode(id, prevTree)]);
  };

  const handleRenameNode = (id: string, newName: string) => {
    const renameNodeRecursively = (nodes: FileType[]): FileType[] => {
      return nodes.map((node) => {
        if (node.id === id) {
          return { ...node, name: newName };
        }
        if (node.children) {
          return { ...node, children: renameNodeRecursively(node.children) };
        }
        return node;
      });
    };

    setTree(renameNodeRecursively(tree));
  };

  // Extract all names from the tree to check for duplicates
  const extractNames = (nodes: FileType[]): string[] => {
    let names: string[] = [];
    nodes.forEach((node) => {
      names.push(node.name);
      if (node.children) {
        names = names.concat(extractNames(node.children));
      }
    });
    return names;
  };

  const existingNames = extractNames(tree); // Get existing names from the tree

  return (
    <div>
      {tree.map((node) => (
        <FileNode
          key={node.id}
          node={node}
          onAdd={handleAddNode}
          onDelete={handleDeleteNode}
          onRename={handleRenameNode}
          existingNames={existingNames} // Pass existing names to FileNode
        />
      ))}
    </div>
  );
};

export default FileExplorer;
