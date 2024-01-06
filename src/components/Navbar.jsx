import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
    color="#F31503"
    fontWeight="500"
    fontSize="25"
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    SHOH Tube
    <SearchBar />
  </Stack>
);

export default Navbar;
