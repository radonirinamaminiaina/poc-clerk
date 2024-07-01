import { OrganizationProfile, OrganizationSwitcher } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.div({
  [".cl-organizationProfile-root, .cl-cardBox"]: {
    width: "100%",
    maxWidth: "none",
    boxShadow: "none",
  },
  [".cl-cardBox"]: {
    height: "calc(100vh - 69px)",
    gridTemplateColumns: "1fr 8fr",
  },
});

export default function OrganizationPage() {
  return (
    <Wrapper>
      <div className="p-5 border-b border-solid border-gray-200 flex justify-between gap-x-5">
        <OrganizationSwitcher />
        <Link
          to="/organisation/create"
          className="bg-gray-700 px-4 py-1 text-white cursor-pointer rounded-md"
        >
          New organization
        </Link>
      </div>
      <OrganizationProfile />
    </Wrapper>
  );
}
