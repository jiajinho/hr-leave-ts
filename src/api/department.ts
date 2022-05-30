import axios from './';
import type { Department } from 'schema';

type Status = "active" | "inactive";

type Response = {
  uId: string,
  organizationId: string,
  name: string,
  description: string,
  status: Status,
  _id: string,
  createdAt: string,
  updatedAt: string
}

function mapToClient(data: Response): Department {
  return {
    id: data.uId,
    name: data.name,
    description: data.description,
    isActive: data.status
  }
}

async function list() {
  const response = await axios.get<{ data: Response[] }>("api/department?status=active");
  return response.data.data;
}

async function getById(uId: string) {
  const response = await axios.get<{ data: Response }>(`api/department/${uId}`);
  return response.data.data;
}

async function create(body: {
  name: string,
  description?: string,
  status: Status
}) {
  const response = await axios.post<Response>('api/department', body);
  return response;
}

async function update(uId: string, body: {
  name?: string,
  description?: string,
  status?: Status
}) {
  const response = await axios.put<{ data: Response }>(`api/department/${uId}`, body);
  return response.data.data;
}

//delete is a reserved keyword for JS
async function destroy(uId: string) {
  const response = await axios.delete<{ data: "success" }>(`api/department/${uId}`);

  console.log(response);

  return response;
}

export default {
  mapToClient,
  list,
  getById,
  create,
  update,
  destroy
}