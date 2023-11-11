export default function About() {
  return (
    <div id="about" className="w-screen shadow-lg">
      <div className="shadow-lg flex flex-col items-center md:flex-row">
        <img
          className="block object-cover md:h-full md:w-1/2"
          src="AboutPic.jpg"
        />
        <div className="h-full flex flex-col justify-left items-center md:items-start p-3">
          <h1 className="text-3xl">
            My Name is <span className="font-bold"> Aidan King, </span>
          </h1>
          <h3 className="p-4 text-lg">
            I'm a dedicated web developer and IT specialist driven by an
            insatiable thirst for knowledge. My world revolves around the
            symphony of coding languages, where each line represents an
            opportunity to learn and innovate. With a passion for turning
            concepts into digital realities, I thrive in the dynamic realm of
            technology. Every project is a chance to push boundaries and elevate
            my skills. In this fast-paced environment, adaptability isn't just a
            skill; it's a way of life. Join me on this journey of perpetual
            learning, where each challenge becomes a stepping stone towards
            crafting seamless, cutting-edge solutions. Let's build something
            extraordinary together—one line of code at a time.
          </h3>
        </div>
      </div>
    </div>
  );
}
