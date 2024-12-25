import { useEffect, useState } from "react";
import { userService } from "../services/userService";
import { AxiosError } from "axios";
import { UserWithId } from "../types";

export const useFetchUsers = () => {
  const [users, setUsers] = useState<UserWithId[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await userService.getUsers();
        setUsers(response);
      } catch (error) {
        if (error instanceof AxiosError) {
          setMessage(error.response?.data.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { users, message, isLoading, setUsers };
};
