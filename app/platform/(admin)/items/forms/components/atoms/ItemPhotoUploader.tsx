import { Avatar, Box, Button } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PhotoIcon from "@mui/icons-material/Photo";

export default function ItemPhotoUploader() {
  //useForm({ defaultValues,});
  const { setValue } = useForm();
  //useState(defaultValues?.imageUrl || "");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setValue("imageUrl", url); // optionally use file instead
    }
  };
  return (
    <Box textAlign="center">
      <Avatar src={previewUrl} sx={{ width: 100, height: 100, margin: "auto" }}>
        <PhotoIcon />
      </Avatar>
      <Button variant="outlined" component="label" sx={{ mt: 1 }}>
        Upload New
        <input
          hidden
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </Button>
    </Box>
  );
}
