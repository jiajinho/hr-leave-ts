import axios from './';

type Status = "active" | "inactive";

type Response = {
  uId: string,
  organizationId: string,
  name: string,
  description: string,
  status: string,
  _id: string,
  createdAt: string,
  updatedAt: string
}

export async function list() {
  const response = await axios.get<{ data: Response[] }>("department?status=active");
  return response.data.data;
}

export async function getById(uId: string) {
  const response = await axios.get<{ data: Response }>(`department/${uId}`);
  return response.data.data;
}

export async function create(body: {
  name: string,
  description?: string,
  status: Status
}) {
  const response = await axios.post<Response>('department', body);
  return response;
}

export async function update(uId: string, body: {
  name?: string,
  description?: string,
  status?: Status
}) {
  const response = await axios.put<{ data: Response }>(`department/${uId}`, body);
  return response.data.data;
}