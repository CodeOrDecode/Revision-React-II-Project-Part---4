import React from "react";
import { Link } from "react-router-dom";
import style from "../Css/Navbar.module.css";
import { IoCartOutline } from "react-icons/io5";
import { Authcontext } from "../Context/Authcontextprovider";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

const Navbar = () => {
  const toast = useToast()
  const {cartcount,logout,authstate } = React.useContext(Authcontext);
  const navigate = useNavigate()

  function handlegotocart(){
    navigate("/cart")
  }

  function handleLogout(){
    logout();
    toast({
      title: 'Logout Successfully.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }

  return (
    <div className={style.navbar}>
      <Link className={style.change} to="/">
        Home
      </Link>
      {authstate.isauth != true  && <Link className={style.change}  to="/login">
        Login
      </Link>}
      <Link className={style.change} to="/product">
        Product
      </Link>
      <IoCartOutline onClick={handlegotocart} className={style.cartstyle}/>
      <p onClick={handlegotocart} className={authstate.isauth ? style.pone: style.pone2}>{cartcount}</p>
      {authstate.isauth && <Button colorScheme='blue' onClick={handleLogout}>Logout</Button>}

    </div>
  );
};

export default Navbar;
