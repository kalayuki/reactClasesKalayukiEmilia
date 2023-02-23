


export const NavBar  =()=>{
    return(
            <header  className=" bg-green-300">  
                <div className="bg-green-300 flex justify-center flex-col items-center">
                    <img className=" rounded-full w-12" alt="logo" src="./images/384_logo.jpg"/>
                    <nav className="  flex gap-3 justify-center items-center  text-lg font-bold">
                        <a href="#">Desyuno y meriendas</a>
                        <a href="#">Leches Vegetales</a>
                        <a href="#">Frutos secos</a>
                        <a href="#">Legumbres y semillas</a>
                    </nav>
                </div>

                </header>

    )
}

