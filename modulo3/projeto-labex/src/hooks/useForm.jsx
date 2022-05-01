import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChange = (event) => {
    const newValue = event.target.value;
    const fieldName = event.target.name;

    setForm({ ...form, [fieldName]: newValue });

    // const { name, value } = event.target;
    // setForm({ ...form, [name]: value });
  };

  const cleanFields = () => {
    setForm(initialState);
  };

  return { form, onChange, cleanFields };
};
