"use client";
import { useSearchParams } from "next/navigation";
import Table from "../../templates/Table";
import { columns } from "./columns";
import ItemForm from "../forms/components/NewItemForm";
import { useFetchItemsByGroupId } from "@/lib/hooks/queries/item";
import { useEffect } from "react";
import { usePatchItem } from "@/lib/hooks/mutations/item";
import { ItemFormShape } from "@/shared/features/items/schema/itemFormSchema";
import { FieldArray, FormProvider, useFieldArray, useForm } from "react-hook-form";
import { useGridEditHandlers } from "@/shared/hooks/rhf/useGridEditHandlers";
import { PatchItemRequest } from "@/shared/features/items/schema/itemTypes";
import { mapFetchItemToFormRow, mapFormRowToPatchItem } from "@/shared/features/items/utils/mappers";

export default function ItemTable() {
  const searchParams = useSearchParams();
  const search = searchParams.get("status");
  const initialProps = !!search
    ? { groupId: "cassiegroup", queryString: `?status=${search}` }
    : { groupId: "cassiegroup" };
  const { data } = useFetchItemsByGroupId(initialProps);
  const updateUserMutation = usePatchItem();
  const methods = useForm<ItemFormShape>({
      defaultValues: { rows: [] },
      mode: "onBlur",
    });
  const { control, trigger, reset, getValues } = methods;
  const { fields, update } = useFieldArray({
       control,
       name: "rows",
  }); 
  const { processRowUpdate } = useGridEditHandlers<
   FieldArray<ItemFormShape, 'rows'>,
   PatchItemRequest                               
 >(
     update,
     trigger,
     getValues,
     updateUserMutation,
     mapFormRowToPatchItem
   );
    useEffect(() => {
      if (data?.length) {
          const defaultValues = data.map(row =>  mapFetchItemToFormRow(row)) as Object[];
        reset({ rows: defaultValues });
      }
    }, [data, reset]);
  return (
    <FormProvider {...methods}>
      <Table
        title={"Items"}
        fields={fields}
        columns={columns}
        disableColumnFilter={false}
        showToolbar={true}
        processRowUpdate={processRowUpdate}
        createForm={
          <ItemForm defaultValues={undefined} onSubmit={() => console.log} />
        }
      />
    </FormProvider>
  );
}