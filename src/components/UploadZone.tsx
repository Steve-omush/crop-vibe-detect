import { useCallback } from "react";
import { Upload } from "lucide-react";
import { toast } from "sonner";

interface UploadZoneProps {
  onImageUpload: (file: File) => void;
  disabled?: boolean;
}

const UploadZone = ({ onImageUpload, disabled }: UploadZoneProps) => {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (disabled) return;

      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) {
        onImageUpload(file);
      } else {
        toast.error("Please upload an image file");
      }
    },
    [onImageUpload, disabled]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && file.type.startsWith("image/")) {
        onImageUpload(file);
      } else {
        toast.error("Please upload an image file");
      }
    },
    [onImageUpload]
  );

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className={`
        border-2 border-dashed border-border rounded-lg p-12
        flex flex-col items-center justify-center gap-4
        transition-colors hover:border-primary hover:bg-muted/50
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
        <Upload className="h-8 w-8 text-primary" />
      </div>
      <div className="text-center space-y-2">
        <p className="text-foreground font-medium">
          Drop your image here, or click to browse
        </p>
        <p className="text-sm text-muted-foreground">
          Supports JPG, PNG, WEBP (Max 10MB)
        </p>
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        disabled={disabled}
        className="hidden"
        id="file-upload"
      />
      <label
        htmlFor="file-upload"
        className={`
          px-6 py-2 rounded-lg bg-primary text-primary-foreground
          font-medium cursor-pointer hover:opacity-90 transition-opacity
          ${disabled ? "pointer-events-none opacity-50" : ""}
        `}
      >
        Select Image
      </label>
    </div>
  );
};

export default UploadZone;
