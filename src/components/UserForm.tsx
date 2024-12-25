import { useRef, useState } from "react";
import { User } from "../types";
import { userService } from "../services/userService";
import { LoaderCircle, UserRoundPen, UserRoundPlus } from "lucide-react";
import "./UserForm.css";

const UserForm = ({
  isCreate = true,
  id,
}: {
  isCreate?: boolean;
  id?: string;
}) => {
  const [user, setUser] = useState<User>({
    name: "",
    lastname: "",
    email: "",
    image: null,
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const imageRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, image: e.target.files![0] }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", user.image || "");
    formData.append("password", user.password.trim());
    formData.append("name", user.name.trim());
    formData.append("lastname", user.lastname.trim());
    formData.append("email", user.email.trim());
    try {
      if (isCreate) {
        await userService.createUser(formData);
      } else {
        await userService.updateUser(id!, formData);
      }
      setUser({
        name: "",
        lastname: "",
        email: "",
        image: null,
        password: "",
      });
      if (imageRef.current) {
        imageRef.current.value = "";
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const labelButton = isCreate ? "Create" : `Edit`;

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>{isCreate ? "Create user" : `Edit user (${id})`}</h2>
        <div className="form__inputs">
          <div className="form__input-group">
            <label className="form__label" htmlFor="name">
              Name(s)
            </label>
            <input
              className="form__input"
              type="text"
              name="name"
              value={user.name}
              placeholder="e.g. John"
              onChange={handleChange}
            />
          </div>
          <div className="form__input-group">
            <label className="form__label" htmlFor="lastname">
              Last Name(s)
            </label>
            <input
              className="form__input"
              type="text"
              name="lastname"
              value={user.lastname}
              placeholder="e.g. Doe"
              onChange={handleChange}
            />
          </div>
          <div className="form__input-group">
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <input
              className="form__input"
              type="text"
              name="email"
              value={user.email}
              placeholder="e.g. john@doe.com"
              onChange={handleChange}
            />
          </div>
          <div className="form__input-group">
            <label className="form__label" htmlFor="image">
              Image
            </label>
            <input
              className="form__input"
              type="file"
              name="image"
              ref={imageRef}
              accept="image/*"
              placeholder="Image"
              onChange={handleImageChange}
            />
          </div>
          <div className="form__input-group">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input"
              type="password"
              name="password"
              value={user.password}
              placeholder="e.g. 123456"
              onChange={handleChange}
            />
          </div>
        </div>
        <button disabled={isLoading} type="submit" className="btn-primary">
          {isLoading ? (
            <LoaderCircle className="loader" width={18} height={18} />
          ) : (
            <>
              <p>{labelButton}</p>
              {isCreate ? (
                <UserRoundPlus width={18} height={18} />
              ) : (
                <UserRoundPen width={18} height={18} />
              )}
            </>
          )}
        </button>
      </form>
    </>
  );
};

export default UserForm;
