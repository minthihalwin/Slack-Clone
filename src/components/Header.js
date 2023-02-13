import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import { auth } from "../util/firebase_controller";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logout } from "../features/appSlice";


function Header() {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
          alt={user?.displayName}
          src={user?.photoURL}
          onClick={() => {
            signOut(auth);
            dispatch(logout())
          }}
        />
        <AccessTimeIcon />
      </HeaderLeft>

      {/* Header Search */}
      <HeaderSearch>
        <SearchIcon />
        <input type="text" placeholder={`Search ${user.displayName}`} />
      </HeaderSearch>

      {/* Header Right */}
      <HeaderRight>
        <HelpOutlinedIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end; //stick to the right

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
