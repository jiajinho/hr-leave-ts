import axios from './';
import api from 'config/api';
import type { Department } from 'schema';

type Status = "active" | "inActive";

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

//For react-query
const queryKey = "department";

function mapToReactSchema(data: Response): Department {
  return {
    id: data.uId,
    name: data.name,
    description: data.description,
    isActive: data.status === "active"
  }
}

async function list() {
  const response = await axios.get<{ data: Response[] }>(api.department.list);
  return response.data.data;
}

async function getById(uId: string) {
  const url = api.department.getById.replace(":uId", uId);

  const response = await axios.get<{ data: Response }>(url);
  return response.data.data;
}

async function create(body: {
  name: string,
  description?: string,
  status: Status
}) {
  const response = await axios.post<Response>(api.department.create, body);
  return response;
}

async function update(body: {
  uId: string,
  name?: string,
  description?: string,
  status: Status
}) {
  const clone = { ...body };
  body.name ?? delete clone.name;
  body.description ?? delete clone.description;

  const url = api.department.update.replace(":uId", body.uId);

  const response = await axios.put<{ data: Response }>(url, body);
  return response.data.data;
}

//delete is a reserved keyword for JS
async function destroy(uId: string) {
  const url = api.department.delete.replace(":uId", uId);

  const response = await axios.delete<{ data: "success" }>(url);
  return response.data.data;
}

export default {
  queryKey,
  mapToReactSchema,
  list,
  getById,
  create,
  update,
  destroy
}