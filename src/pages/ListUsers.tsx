import { LoaderCircle } from "lucide-react";
import UserCard from "../components/UserCard";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { userService } from "../services/userService";

const ListUsers = () => {
  const { users, isLoading, setUsers } = useFetchUsers();

  const handleDelete = async (id: number) => {
    await userService.deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  const isUsetListEmpty = users.length === 0;

  if (isLoading) {
    return (
      <div className="container container--loading">
        <LoaderCircle className="loader" />
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Users</h2>
      <div className="container__list">
        {isUsetListEmpty && <p>There are no users yet.</p>}
        {users.map((user) => (
          <UserCard user={user} key={user.id} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default ListUsers;
