"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Table from "../../templates/Table";
import { columns } from "./columns";
import ItemForm from "../forms/components/NewItemForm";
import { useFetchItemsByGroupId } from "@/lib/hooks/queries/item";
import { Skeleton } from "@mui/material";

export default function ItemTable() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("status");
  const initialProps = !!search
    ? { groupId: "cassiegroup", queryString: `?status=${search}` }
    : { groupId: "cassiegroup" };
  const { data } = useFetchItemsByGroupId(initialProps);
  console.log(data);
  if (!data) return <Skeleton />;
  return (
    <Table
      title={"Items"}
      items={data}
      columns={columns}
      disableColumnFilter={false}
      showToolbar={true}
      createForm={
        <ItemForm defaultValues={undefined} onSubmit={() => console.log} />
      }
    />
  );
}
