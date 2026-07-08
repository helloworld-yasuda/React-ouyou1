import { User } from "./type";

const fetchUserStatus = async (userId: number): Promise<User> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  if (!response.ok) {
    throw new Error("取得に失敗しました");
  }
  return await response.json();
};

export default fetchUserStatus;
