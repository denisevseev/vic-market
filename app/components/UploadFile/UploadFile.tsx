import { Button } from "@mui/material";
import { useRef, ChangeEvent } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import "../../components/OnlineJopApplication/JobApplication.scss";

interface UploadFileProps {
  onFileSelect: (files: FileList | null) => void;
}

export default function UploadFile({ onFileSelect }: UploadFileProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;

    if (onFileSelect && selectedFiles) {
      onFileSelect(selectedFiles);
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*,application/pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileSelect}
      />

      <Button
        onClick={handleFileUpload}
        variant="contained"
        startIcon={<UploadFileIcon />}
        sx={{
          textTransform: "none",
        }}
        className="submitFormButton"
      >
        Upload file
      </Button>
    </>
  );
}
