import { Link } from "react-router-dom";
import { UserWithId } from "../types";
import { Edit2Icon, LoaderCircle, TrashIcon } from "lucide-react";
import { useState } from "react";
import { API_URL } from "../constants";
import "./UserCard.css";

const UserCard = ({
  user,
  onDelete,
}: {
  user: UserWithId;
  onDelete: (id: number) => Promise<void>;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(user);
  const urlImage = user.image
    ? `${API_URL}/static/` + user.image
    : `https://avatar.iran.liara.run/username?username=${user.name}`;

  const handleDelete = async (id: number) => {
    setIsLoading(true);
    await onDelete(id);
    setIsLoading(false);
  };
  return (
    <div className="user" key={user.id}>
      <div className="user__image">
        <img src={urlImage} alt={user.name} />
      </div>
      <div className="user__info">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Last name:</strong> {user.lastname}
        </p>
        <p>
          {" "}
          <strong>Email:</strong> {user.email}
        </p>
        <div className="user__actions">
          <Link to={`/edit/${user.id}`}>
            <button className="btn-edit">
              <p>Edit</p>
              <Edit2Icon width={18} height={18} />
            </button>
          </Link>
          <button
            disabled={isLoading}
            className="btn-delete"
            onClick={() => handleDelete(user.id)}
          >
            {isLoading ? (
              <LoaderCircle className="loader" width={18} height={18} />
            ) : (
              <>
                <p>Delete</p>
                <TrashIcon width={18} height={18} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
