function UserProfile() {
    return (
      <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 sm:max-w-xl md:p-8 md:max-w-sm lg:p-8 lg:max-w-sm xl:p-8 xl:max-w-xs 2xl:p-8 2xl:max-w-xs ">

        <img className="rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-36 lg:h-36 xl:w-36 xl:h-36 2xl:w-36 2xl:h-36 " src="https://via.placeholder.com/150" alt="User" />

        <h1 className="text-xl text-blue-800 my-4 sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">John Doe</h1>

        <p className="text-gray-600 text-base sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;