import { User } from "../type";

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("情報の取得に失敗しました");
    }
    const data: User[] = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchUsers;
