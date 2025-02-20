import { useState } from "react";
import FileNode from "./FileNode";
import { FileType } from "../types/fileTypes";
import { addNode, deleteNode, renameNode } from "../utils/fileUtils";

const FileExplorer = () => {
  const [tree, setTree] = useState<FileType[]>([
    {
      id: "1",
      name: "Root",
      type: "folder",
      children: [],
    },
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
    setTree((prevTree) => [...renameNode(id, newName, prevTree)]);
  };
  return (
    <div>
      {tree.map((node) => (
        <FileNode
          key={node.id}
          node={node}
          onAdd={handleAddNode}
          onDelete={handleDeleteNode}
          onRename={handleRenameNode}
          existingNames={["Root"]}
        />
      ))}
    </div>
  );
};

export default FileExplorer;
