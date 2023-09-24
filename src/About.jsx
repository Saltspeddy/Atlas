import robotImage from "./assets/robotImage.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#444ee1] h-[120vh] flex justify-center items-center"
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
    </div>
  );
};

export default About;
