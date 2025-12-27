/* -----------------------------
   Type Declarations
--------------------------------*/

type SharedUserRecord = {
  id: string;
  email: string;
  status: string;
  itemsShared: string;
  billing: string;
};

/* -----------------------------
   Fake Data
--------------------------------*/

const sharedUsersData: SharedUserRecord[] = [
  {
    id: "share-001",
    email: "mdnayemuddinsheikh@gmail.com",
    status: "Accept 22 Sep 2025",
    itemsShared: "All",
    billing: "No",
  },
];

/* -----------------------------
   Component
--------------------------------*/

export default function AlreadyShared() {
  return (
    <section className="text-neutral-500">
      <div className="mx-auto space-y-6">
        <div className="primary-card">
          <h3 className="primary-card-header mb-4 font-semibold">Already shared with</h3>

          <div className="relative overflow-hidden">
            <div className="overflow-x-auto px-5 sm:px-6">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="border-gray-base border-b py-3 text-left text-nowrap">NAME</th>
                    <th className="border-gray-base border-b py-3 text-left text-nowrap">EMAIL</th>
                    <th className="border-gray-base border-b py-3 text-left text-nowrap">STATUS</th>
                    <th className="border-gray-base border-b py-3 text-left text-nowrap">
                      ITEMS SHARED
                    </th>
                    <th className="border-gray-base border-b py-3 text-left text-nowrap">
                      BILLING
                    </th>
                    <th className="border-gray-base border-b py-3 text-right text-nowrap"></th>
                  </tr>
                </thead>

                <tbody>
                  {sharedUsersData?.map((record) => (
                    <tr key={record?.id} className="border-b border-[#1C2230] last:border-none">
                      <td></td>

                      <td className="px-2 py-6 text-nowrap">{record?.email}</td>

                      <td className="cursor-pointer px-2 py-6 text-nowrap text-[#3B82F6]">
                        {record?.status}
                      </td>

                      <td className="px-2 py-6 text-nowrap">{record?.itemsShared}</td>

                      <td className="px-2 py-6 text-nowrap">{record?.billing}</td>

                      <td className="cursor-pointer px-2 py-6 text-right text-nowrap text-[#EF4444]">
                        Remove
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
