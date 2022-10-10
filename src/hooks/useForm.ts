import { useState } from 'react';

export const useForm = <T>(initialState: T) => {

  const [form, setForm] = useState<T>(initialState);

  const handleChange = <k>(name: keyof T) => (value: k) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const reset = () => {
    setForm(initialState);
  };

  return {
    form,
    handleChange,
    reset,
  };
};
