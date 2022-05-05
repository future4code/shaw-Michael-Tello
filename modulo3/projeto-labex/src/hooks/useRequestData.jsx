import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestData = (estadoInicial, url) => {
  const [data, setData] = useState(estadoInicial);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("Erro no Get");
      });
  }, [url]);

  return [data, loading, erro];
};


