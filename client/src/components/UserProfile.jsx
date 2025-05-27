const UserProfile = ({ name, bids }) => {
  return (
    <div className="bg-[#3A2F5F] overflow-hidden shadow rounded-lg border border-[#1E90FF] w-full my-6">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-white">
          User Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-[#CCCCCC]">
          Information about the user.
        </p>
      </div>
      <div className="border-t border-[#1E1E2F] px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-[#1E1E2F]">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-[#CCCCCC]">Name: </dt>
            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
              {name}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-[#CCCCCC]">Total Bids</dt>
            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
              {bids}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default UserProfile;