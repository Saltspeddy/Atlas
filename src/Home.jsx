import logo from "./assets/logo3 (1).jpeg";
// bg-[#080B2C]
const Nav = () => {
  return (
    <div className="grid grid-cols-2 w-screen h-[97vh] pt-[5rem] overflow-hidden bg-[#080B2C]">
      <div className="flex flex-col justify-center  text-white">
        <div className="w-[80%] h-[80%] ">
          <p className="md:ml-20 text-9xl border-b-4 font-bold">
            Carrying Innovation to New Heights!
          </p>
          <div className="text-xl mt-6 flex flex-col justify-center items-center font-semibold">
            <p>FTC team</p>
            <p>20732 | RO_192</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center text-white"></div>
      <div></div>
    </div>
  );
};

export default Nav;
