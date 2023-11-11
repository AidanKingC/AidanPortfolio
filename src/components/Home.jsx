export default function Home() {

    return(
        <div id="home" className="flex justify-center items-center w-screen h-screen bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
           
            <div className="absolute backdrop-blur backdrop-brightness-75 border-2 p-4 rounded-md">
                <h1 className="text-4xl md:text-8xl font-bold text-white">Aidan King</h1>
                <h3 className="text-xl md:text-2xl font-bold text-white">Full Stack</h3>
                <h3 className="text-xl md:text-2xl font-bold text-white">Web Developer</h3>
            </div>
        </div>

    )
}