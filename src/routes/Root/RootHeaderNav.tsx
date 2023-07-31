import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";

import { MyNavButton } from "./MyNavButton";

const RootHeaderNav = () => {
  return (
    <nav>
      <MyNavButton url="home" startIcon={<HomeIcon />} active={false}>
        Home
      </MyNavButton>
      <MyNavButton url="user" startIcon={<HomeIcon />} active={true}>
        User
      </MyNavButton>
      <MyNavButton url="company" startIcon={<HomeIcon />} active={false}>
        Company
      </MyNavButton>
    </nav>
  );
};

export { RootHeaderNav };
