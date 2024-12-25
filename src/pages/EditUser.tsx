import UserForm from "../components/UserForm";
import { useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="container__form">
        <UserForm isCreate={false} id={id} />
      </div>
    </div>
  );
};

export default EditUser;
