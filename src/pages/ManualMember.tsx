/* eslint-disable @typescript-eslint/no-explicit-any */
import { useClerk, useOrganization } from "@clerk/clerk-react";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import classNames from "classnames";
import styled from "styled-components";

const Wrapper = styled.div({
  padding: "0 50px",
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

export default function ManualMember() {
  const { memberships, invitations } = useOrganization({
    memberships: true,
    invitations: true,
  });

  const [tabs, setTabs] = useState(0);
  const [invData, setInvData] = useState<any>([]);

  const clerk = useClerk();

  const handleAddMember = async () => {
    const emailAddress = prompt("Entrer l'email");
    await clerk.organization?.inviteMember({
      emailAddress: emailAddress!,
      role: "org:member",
    });
  };

  const handleTabs = (tabIndex: number) => {
    setTabs(tabIndex);
  };

  useEffect(() => {
    setInvData(invitations?.data as any);
  }, [invitations]);

  return (
    <Wrapper>
      <div className="p-5 border-b border-solid border-gray-200 flex justify-end gap-x-5">
        <button
          className="bg-gray-700 px-4 py-1 text-white cursor-pointer rounded-md"
          onClick={handleAddMember}
        >
          Add member
        </button>
      </div>
      <div className="flex gap-x-5 p-5">
        <button
          className={classNames("px-4 py-1 cursor-pointer rounded-md", {
            "bg-gray-700 text-white": tabs === 0,
          })}
          onClick={() => handleTabs(0)}
        >
          Member ({memberships?.data?.length ?? 0})
        </button>
        <button
          className={classNames("px-4 py-1 cursor-pointer rounded-md", {
            "bg-gray-700 text-white": tabs === 1,
          })}
          onClick={() => handleTabs(1)}
        >
          Invitation ({invData?.length ?? 0})
        </button>
      </div>
      <div className="m-auto">
        {tabs === 0 ? (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {memberships?.data?.map((membership) => (
                <tr
                  key={membership.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">
                    <div className="flex gap-4">
                      <img
                        className="w-6 h-6 object-cover rounded-full"
                        src={membership.publicUserData.imageUrl}
                        alt={membership.publicUserData.firstName!}
                      />
                      {membership.publicUserData.firstName}{" "}
                      {membership.publicUserData.lastName}0
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {DateTime.fromJSDate(membership.createdAt).toFormat(
                      "dd/LL/yy"
                    )}
                  </td>
                  <td className="px-6 py-4">{membership.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Date de création</th>
              </tr>
            </thead>
            <tbody>
              {invData?.map((invitation: any) => (
                <tr
                  key={invitation.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">
                    <div className="flex gap-4">{invitation.emailAddress}</div>
                  </td>
                  <td className="px-6 py-4">
                    {DateTime.fromJSDate(invitation.createdAt).toFormat(
                      "dd/LL/yy"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Wrapper>
  );
}
