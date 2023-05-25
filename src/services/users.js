import { axiosSecure } from "../plugins/axios";

const getUsers = async (params) => await axiosSecure.get("users", { params });

const createUsers = async (data) => await axiosSecure.post("users/", data);

const getUser = async (id) => await axiosSecure.get(`users/${id}`);

const updateUser = async (id, data) =>
  await axiosSecure.put(`users/${id}/`, data);

const deleteUser = async (id) => await axiosSecure.delete(`users/${id}/`);

export { getUsers, createUsers, getUser, updateUser, deleteUser };
