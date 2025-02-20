import React, { useState } from "react";
import { FileType } from "../types/FileType";
import {
  FaFolder,
  FaFile,
  FaChevronDown,
  FaChevronRight,
  FaEdit,
} from "react-icons/fa";

type FileNodeProps = {
  node: FileType;
  onAdd: (parentId: string, type: "file" | "folder", name: string) => void;
  onDelete: (id: string) => void;
  onRename: (id: string, newName: string) => void;
  existingNames: string[]; // Pass existing names to check against
};

const FileNode: React.FC<FileNodeProps> = ({
  node,
  onAdd,
  onDelete,
  onRename,
  existingNames,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(node.name);
  const [isAdding, setIsAdding] = useState<"file" | "folder" | null>(null); // Track adding state
  const [nameError, setNameError] = useState<string>("");

  const handleRename = () => {
    if (existingNames.includes(newName)) {
      setNameError("Name already exists. Please choose another.");
      return;
    }
    onRename(node.id, newName);
    setIsEditing(false);
    setNameError(""); // Clear error
  };

  const handleAddName = (name: string) => {
    if (existingNames.includes(name)) {
      setNameError("Name already exists. Please choose another.");
      return;
    }
    if (isAdding) {
      onAdd(node.id, isAdding, name);
      setIsAdding(null);
      setNameError(""); // Clear error
    }
  };

  return (
    <div style={{ marginLeft: 20 }}>
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        {node.type === "folder" && (
          <span onClick={() => setExpanded(!expanded)}>
            {expanded ? <FaChevronDown /> : <FaChevronRight />}
          </span>
        )}
        {node.type === "folder" ? (
          <FaFolder color="goldenrod" />
        ) : (
          <FaFile color="gray" />
        )}

        {/* Show input field when adding or editing */}
        {isAdding ? (
          <div>
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onBlur={() => handleAddName(newName)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddName(newName);
                }
              }}
              autoFocus
            />
            {nameError && (
              <div style={{ color: "red", fontSize: "12px" }}>{nameError}</div>
            )}
          </div>
        ) : isEditing ? (
          <div>
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onBlur={handleRename}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleRename();
                }
              }}
              autoFocus
            />
            {nameError && (
              <div style={{ color: "red", fontSize: "12px" }}>{nameError}</div>
            )}
          </div>
        ) : (
          <span style={{ marginLeft: 5 }}>{node.name}</span>
        )}

        {/* Edit Button */}
        <button onClick={() => setIsEditing(true)}>
          <FaEdit />
        </button>
        {node.type === "folder" && (
          <>
            <button
              onClick={() => {
                setIsAdding("file");
                setNewName("New File");
              }}
            >
              📄+
            </button>
            <button
              onClick={() => {
                setIsAdding("folder");
                setNewName("New Folder");
              }}
            >
              📂+
            </button>
          </>
        )}
        <button onClick={() => onDelete(node.id)}>❌</button>
      </div>

      {expanded && node.children && (
        <div>
          {node.children.map((child) => (
            <FileNode
              key={child.id}
              node={child}
              onAdd={onAdd}
              onDelete={onDelete}
              onRename={onRename}
              existingNames={existingNames}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileNode;
