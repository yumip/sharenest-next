import Stack from "@mui/material/Stack";
import ItemPhotoUploader from "./atoms/ItemPhotoUploader";
import ItemDescriptionField from "./atoms/ItemDescriptionField";

export default function ItemDetails() {
  return (
    <Stack spacing={3}>
      <ItemPhotoUploader />
      <ItemDescriptionField />
    </Stack>
  );
}
