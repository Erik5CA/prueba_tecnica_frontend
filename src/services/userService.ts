import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { AxiosError } from "axios";

export const userService = {
  createUser: async (formData: FormData) => {
    try {
      const { data } = await axiosInstance.post("/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
      throw error;
    }
  },
  getUsers: async () => {
    const { data } = await axiosInstance.get("/users");
    return data;
  },
  deleteUser: async (id: number) => {
    try {
      const { data } = await axiosInstance.delete(`/users/${id}`);
      toast.success(data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    }
  },
  updateUser: async (id: string, formData: FormData) => {
    try {
      const { data } = await axiosInstance.put(`/users/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
      throw error;
    }
  },
};
