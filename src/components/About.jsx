export default function About() {
  return (
    <div id="about" className="w-screen shadow-lg">
      <div  className="shadow-lg flex flex-col items-center md:flex-row">
          <img
            className="block object-cover md:h-full md:w-1/2"
            src="AboutPic.jpg"
          />
        <div className="h-full flex flex-col justify-left items-center md:items-start p-3">
          <h1 className="text-3xl">
            My Name is <span className="font-bold"> Aidan King, </span>{" "}
          </h1>
          <h3 className="text-xl">Grafic design is my passion</h3>
        </div>
      </div>
    </div>
  );
}
