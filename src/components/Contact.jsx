export default function Contact() {
  return (
    <div
      id="contact"
      className="w-screen h-screen shadow-lg flex flex-col justify-center items-center"
    >
      <form
        action="https://getform.io/f/e8baca66-2393-4305-ae6a-ffe877b20818"
        encType="multipart/form-data"
        method="POST"
        className="md:w-1/3 w-3/4 min-h-fit shadow-lg flex flex-col justify-center items-center"
      >
        <div className="bg-slate-800 w-full">
          <h1 className="text-center text-white">Contact Me!</h1>
        </div>
        <div className="w-full flex flex-row">
          <label className="w-1/6 p-2">Name:</label>
          <input
            type="text"
            name="name"
            className=" float-right w-5/6 rounded-sm border-gray-300 border-2 m-4"
          />
        </div>
        <div className="w-full flex flex-row">
          <label className="w-1/6 p-2">Email:</label>
          <input
            type="email"
            name="email"
            className=" float-right w-5/6 border-gray-300 border-2 rounded-sm m-4"
          />
        </div>
        <div className="w-full flex flex-row">
          <label className=" w-1/6 p-2">Subject:</label>
          <input
            type="text"
            name="subject"
            className="float-right w-5/6 border-gray-300 border-2 rounded-sm m-4"
          />
        </div>
        <div className="w-full flex flex-row">
          <label className="w-1/6 p-2">Message:</label>
          <input
            type="text"
            name="message"
            className="float-right w-5/6 border-gray-300 border-2 rounded-sm m-4 p-7"
          />
        </div>
        <input type="hidden" name="_gotcha" className="hidden"></input>
        <input
          type="submit"
          className="border-gray-300 border-2 rounded-sm m-4"
        />
      </form>
    </div>
  );
}
