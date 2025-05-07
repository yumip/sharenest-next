import { useSearchParams } from "next/navigation";

export const useCreateQueryString = (name: string, value: string) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  params.set(name, value);

  return params.toString();
};
