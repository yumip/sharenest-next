import { BasicModal } from "@/shared/components/organisms/BasicModal";
import DescriptionIcon from "@mui/icons-material/Description";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import ItemDetails from "./components/ItemDetails";

type DetailsFormProps = {
  defaultValues: any; //ItemDetailFormData
  onSubmit: (data: any) => void;
};
export default function ItemDetailsFormModal({
  defaultValues,
  onSubmit,
}: DetailsFormProps) {
  const { control, handleSubmit, setValue } = useForm();
  return (
    <BasicModal
      trigger={
        <BasicModal.Trigger>
          <DescriptionIcon />
        </BasicModal.Trigger>
      }
    >
      <BasicModal.Body>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <ItemDetails />
        </Box>
      </BasicModal.Body>
      <BasicModal.Footer buttonText="Update" onSubmit={() => console.log} />
    </BasicModal>
  );
}
