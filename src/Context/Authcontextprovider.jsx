import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Authcontext = React.createContext();

const Authcontextprovider = ({ children }) => {
  const navigate = useNavigate();
  const [authstate, setAuthstate] = useState({
    token: null,
    isauth: false,
  });

  const [cartcount, setCartcount] = useState(0);
  const [added, setAdded] = useState([]);

  function login(value) {
    setAuthstate({
      token: value,
      isauth: true,
    });
    navigate("/");
  }

  function logout() {
    setAuthstate({
      token: null,
      isauth: false,
    });
    navigate("/login")
  }

  function newAddedProduct(val) {
    setCartcount(cartcount + 1);
    setAdded([...added, val]);
  }

  function handleReset(){
    setCartcount(0);
    setAdded([])
  }

  return (
    <Authcontext.Provider
      value={{ authstate, login, logout, cartcount, newAddedProduct, added,handleReset }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export default Authcontextprovider;
