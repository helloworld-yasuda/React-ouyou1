import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchUserStatus from "./api/userStates";
import { User } from "./type";

export const useUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const data = fetchUserStatus(Number(id));

  useEffect(() => {
    const getUser = async () => {
      if (!id) return;
      const data = await fetchUserStatus(Number(id));
      if (data) {
        setUser(data);
      }
    };
    getUser();
  }, [id, data]);

  return { user };
};
