import { CreateOrganization } from "@clerk/clerk-react";

export default function OrganizationPage() {
  return <CreateOrganization afterCreateOrganizationUrl={"/organisation"} />;
}
