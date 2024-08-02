import Popup from "reactjs-popup";
import Icon from "../Icon";
import "./index.css";
import { colors } from "../../../utils/colors";
import { useState } from "react";

const GroupPopup = ({
  sendToApi,
  values = { title: "", color: "#B38BFA" },
}) => {
  const [form, setFrom] = useState(values);
  const handleTitleChange = (title) => {
    setFrom({ ...form, title });
  };
  const handleColorChange = (color) => {
    setFrom({ ...form, color });
  };
  const handleSubmit = async (e, close) => {
    e.preventDefault();
    await sendToApi(form);
    close();
    setFrom(values);
  };
  return (
    <div>
      <Popup
        trigger={
          <button className="group__popup_trigger">
            <Icon name="pluse" size={35} color="#fff" />
          </button>
        }
        modal
      >
        {(close) => (
          <div className="group__popup">
            <h2>Create New Group</h2>
            <form
              className="group__popup__form"
              onSubmit={(e) => handleSubmit(e, close)}
            >
              <div className="input">
                <h3>Group Name</h3>
                <input
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Enter group name"
                  value={form.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                />
              </div>
              <div className="input">
                <h3>Group Color</h3>
                <div className="color__input__container">
                  {colors.map((color, i) => (
                    <div
                      key={i}
                      className={`color__input ${
                        color == form.color ? "color__input__selected" : ""
                      }`}
                      style={{ "--group-color": color }}
                      onClick={() => handleColorChange(color)}
                    />
                  ))}
                </div>
              </div>
              <div className="form__button__container">
                <button className="form__button" type="submit">
                  Create
                </button>
              </div>
            </form>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default GroupPopup;
