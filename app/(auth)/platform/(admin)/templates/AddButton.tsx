import { BasicModal } from "@/shared/components/organisms/BasicModal";
import AddIcon from "@mui/icons-material/Add";

export default function AddButton({ children }: { children: React.ReactNode }) {
  return (
    <BasicModal
      trigger={
        <BasicModal.Trigger>
          Create
          <AddIcon />
        </BasicModal.Trigger>
      }
    >
      <BasicModal.Body>{children}</BasicModal.Body>
      <BasicModal.Footer
        buttonText={"Create"}
        onSubmit={() => console.log("submit")}
      />
    </BasicModal>
  );
}
