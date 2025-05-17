import { BasicModal } from "@/shared/components/organisms/BasicModal";
import DeleteIcon from "@mui/icons-material/Delete";
export default function DeleteButton() {
  return (
    <BasicModal
      trigger={
        <BasicModal.Trigger>
          <DeleteIcon />
        </BasicModal.Trigger>
      }
    >
      <BasicModal.Header title="Are you sure you want to delete?" />
      <BasicModal.Footer
        buttonText={"Yes"}
        onSubmit={() => console.log("submit")}
      />
    </BasicModal>
  );
}
