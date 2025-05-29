import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFiles } from "../redux/filesSlice";

export const useApp = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.files.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchFiles(inputValue));
  };

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  return {
    inputValue,
    setInputValue,
    handleSubmit,
    loading,
  };
};
