import robotImage from "./assets/robotImage.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#444ee1] text-white h-[120vh] flex flex-col justify-center items-center"
    >
      {/* <div className="w-screen flex justify-center items-center">
        <div className="grid grid-cols-3 w-[70%] gap-20">
          <div className="flex flex-col justify-center items-center gap-3">
            {" "}
            <div
              className=" w-[400px] h-[400px] bg-cover bg-center bg-no-repeat rounded-3xl border-[#2F37A0] border-8 shadow-2xl shadow-[#2F37A0] drop-shadow-2xl"
              style={{ backgroundImage: `url(${robotImage})` }}
            ></div>
            <div className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              vero incidunt reiciendis, maxime temporibus inventore dolorum
              voluptatum voluptates fugiat ab placeat quis eos, optio aliquam
              magni laborum quae sed non animi sapiente modi labore
            </div>
          </div>

          <div
            className=" w-[300px] h-[300px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${robotImage})` }}
          ></div>
          <div
            className=" w-[300px] h-[300px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${robotImage})` }}
          ></div>
        </div>
      </div> */}

      <div className="grid grid-cols-2 w-screen ">
        <div></div>
        <div className="flex flex-col text-xl font-semibold text-white justify-center items-center gap-6 my-10">
          <div className="flex">
            <div className="w-[80%] border-4 border-white p-4 rounded-3xl">
              Noi suntem echipa de robotică a Colegiului Național Bănățean.
              Echipa noastră de robotică se ocupă cu proiectarea, programarea,
              asamblarea și configurarea robotului pentru competiția FTC.
            </div>
          </div>
          <div className="flex">
            <div className="w-[80%] border-4 border-white p-4 rounded-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              maxime eaque libero vero fugit illum minus magni, totam
              repellendus, adipisci est amet. Velit blanditiis rem doloremque
              quas accusantium ducimus fugiat ut repudiandae verita
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-screen flex justify-center items-center">
        <div className="grid grid-cols-2 w-[70vw] font-kanit font-bold text-5xl">
          <div className="flex flex-col justify-center items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-64 h-56 border-white p-1 border-8 rounded-3xl"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
            <p>20+</p>
            <p>Members</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-64 h-56 border-white p-1 border-8 rounded-3xl"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
            <p>20+</p>
            <p>Members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
