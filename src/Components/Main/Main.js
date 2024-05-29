import { createContext, useEffect, useState } from "react";
// compons
import { Navbar } from "../Navbar/Navbar";
import { Search } from "../Search/Search";

const UserLoggedIn = createContext();

function Main() {
  return (
    <div>
      <Navbar />
      <UserLoggedIn.Provider value={"gogulnithin"}>
        <Search />
      </UserLoggedIn.Provider>
    </div>
  );
}

export { Main, UserLoggedIn };
