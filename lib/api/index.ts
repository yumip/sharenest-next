export type WithAccessToken<T> = T & {
  accessToken?: string;
};

export enum METHOD_TYPE {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
}

const DEFAULT_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000"; // fallback if NEXTAUTH_URL is undefined

export const RequestFactory = {
  createRequest: <T>(
    method: METHOD_TYPE,
    path: string,
    options: RequestInit = {},
    baseURL: string = DEFAULT_BASE_URL,
  ): Request => {
    const url = `${baseURL}/${path}`;

    return new Request(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });
  },
};

async function handleErrorResponse(response: Response) {
  let message = "Something went wrong. Please try again later!";
  try {
    const data = await response.json();
    if (data?.message && (response.status === 400 || response.status === 500)) {
      message = data.message;
    }
  } catch {
    // do nothing — fallback to default message
  }
  throw new Error(message);
}

export const fetchAndParse = async (request: Request): Promise<Response> => {
  const response = await fetch(request);
  if (!response.ok) {
    await handleErrorResponse(response);
  }
  return response;
};

export const fetchAndParseJson = async <T>(request: Request): Promise<T> => {
  const response = await fetchAndParse(request);
  return response.json();
};

export function withAuthHeaders(token?: string): HeadersInit {
  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
}
