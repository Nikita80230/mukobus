import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { ColorRing, InfinitySpin } from "react-loader-spinner";

import CloseModalIcon from "../../assets/images/closeModalIcon.inline.svg";

import { StyledBookModal } from "./styled";

const BookModal = ({ handleToggleModal }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_6chzy0r",
        "template_qwlb8qp",
        form.current,
        {
          publicKey: "xd4RkdzG2kFGCiQYx",
        }
      );

      toast.success("Ваші контакти успішно відправлено!");

      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });

      handleToggleModal();
    } catch (error) {
      toast.success("Виникла помилка!!!");
      console.log("FAILED...", error.text);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  // };

  return (
    <StyledBookModal>
      <div className="modal">
        <button
          className="closeModalButton"
          onClick={handleToggleModal}
          type="button"
        >
          <CloseModalIcon className="closeModalIcon" />
        </button>

        <h2 className="modalTitle">Зв'яжіться з нами</h2>
        <span className="modalDescription">
          Для замовлення або отримання додаткової інформації, будь ласка,
          напишіть нам
        </span>
        <form className="modalForm" ref={form} onSubmit={sendEmail}>
          <label className="formLabel">
            <span className="formInputName">Ім'я</span>
            <input
              onChange={handleChange}
              name="name"
              value={formData.name}
              className="formInput"
              type="text"
              required
            />
          </label>
          <div className="formInputsContactsWrapper">
            <label className="formLabel email">
              <span className="formInputName">Електронна пошта</span>
              <input
                onChange={handleChange}
                name="email"
                value={formData.email}
                className="formInput"
                type="email"
                required
              />
            </label>
            <label className="formLabel phoneNumber">
              <span className="formInputName">Номер телефону</span>
              <input
                onChange={handleChange}
                name="phoneNumber"
                value={formData.phoneNumber}
                className="formInput"
                type="text"
                required
              />
            </label>
          </div>
          <label className="formLabel">
            <span className="formInputName">Повідомлення</span>
            <textarea
              onChange={handleChange}
              name="message"
              value={formData.message}
              className="formInput textArea"
              rows="5"
              placeholder="Введіть тут своє повідомлення..."
              required
            ></textarea>
          </label>
          <button
            className="formSubmitButton"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? (
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#ee4f27", "#f8b26a", "#ee58ee", "#47dad5"]}
              />
            ) : (
              "Відправити"
            )}
          </button>
        </form>
      </div>
    </StyledBookModal>
  );
};

export default BookModal;
