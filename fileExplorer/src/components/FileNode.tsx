import { memo, useState } from "react";
import { FileType } from "../types/fileTypes";
import {
  FaChevronDown,
  FaChevronRight,
  FaEdit,
  FaFile,
  FaFolder,
} from "react-icons/fa";
import NameInput from "./NameInput";

type FileNodeProps = {
  node: FileType;
  onAdd: (parentId: string, type: "file" | "folder", name: string) => void;
  onDelete: (id: string) => void;
  onRename: (id: string, newName: string) => void;
  existingNames: string[];
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
  const [isAdding, setIsAdding] = useState<"file" | "folder" | null>(null);
  const [newName, setNewName] = useState(node.name);
  const [nameError, setNameError] = useState<string>("");

  const handleAddName = (name: string) => {
    if (existingNames.includes(name)) {
      setNameError("Name alredy exists.Please choose another");
      return;
    }
    if (isAdding) onAdd(node.id, isAdding, name);
    setIsAdding(null);
    setNameError("");
  };

  const handleRename = (name: string) => {
    if (existingNames.includes(name)) {
      setNameError("Name alredy exists.Please choose another");
      return;
    }
    onRename(node.id, name);
    setIsEditing(false);
    setNameError("");
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
        {isAdding ? (
          <NameInput
            intialValue={newName}
            onSave={handleAddName}
            errorMessage={nameError}
          />
        ) : isEditing ? (
          <NameInput
            intialValue={newName}
            onSave={handleRename}
            errorMessage={nameError}
          />
        ) : (
          <span style={{ marginLeft: 5 }}>{node.name}</span>
        )}
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
        <button onClick={() => onDelete(node.id)}>Delete</button>
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

export default memo(FileNode);
