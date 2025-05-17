import { http, HttpResponse } from "msw";
import { mockItems } from "../data/items";
import { Item, ItemStatus } from "@/shared/types/item";

const items = mockItems;
export const itemHandlers = [
  // GET /api/items/:groupId
  http.get("/api/:groupId/items", ({ params, request }) => {
    const url = new URL(request.url);
    const { groupId } = params;
    console.log(groupId);
    const status = url.searchParams.get("status");
    const borrowerId = url.searchParams.get("id");
    console.log(borrowerId);

    let filteredItems = items;

    if (groupId) {
      filteredItems = filteredItems.filter((item) => item.groupId === groupId);
      if (status) {
        filteredItems = filteredItems.filter(
          (item) => item.status.toLowerCase() === status.toLowerCase(),
        );
      }
      if (borrowerId) {
        console.log(borrowerId);
        filteredItems = filteredItems.filter(
          (item) => item?.borrower?.id === borrowerId,
        );
      }
    }
    return HttpResponse.json(filteredItems);
  }),

  // POST /api/items
  http.post("/api/:groupId/items", async ({ request }) => {
    const newItem = (await request.json()) as Partial<Item>;

    if (!newItem.name || !newItem.category) {
      return HttpResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const item: Item = {
      id: `item-${Date.now()}`,
      groupId: newItem.groupId ?? "group-123",
      name: newItem.name,
      category: newItem.category,
      status: ItemStatus.Available,
      description: newItem.description ?? "",
      imageUrl: newItem.imageUrl ?? "",
      borrower: { id: "u2", name: "Mimi Tan" },
      dueDate: undefined,
    };

    items.push(item);
    return HttpResponse.json(item, { status: 201 });
  }),

  // PATCH /api/items/:id
  http.patch("/api/:groupId/items/:id", async ({ params, request }) => {
    const { id } = params;
    const updates = (await request.json()) as Partial<Item>;

    if (!updates || typeof updates !== "object") {
      return HttpResponse.json(
        { error: "Invalid request body" },
        { status: 400 },
      );
    }

    const index = items.findIndex((i) => i.id === id);
    if (index === -1) {
      return HttpResponse.json({ error: "Item not found" }, { status: 404 });
    }

    items[index] = { ...items[index], ...updates };
    return HttpResponse.json(items[index]);
  }),
];
