
export default function Footer(){

    return (
        <div className="bg-gray-800 text-white py-4 text-center bottom-0 w-full">
            <h1>Proyecto Talento Tech</h1>
            <h2 className="text-red-500">Desarrollado por Jhon Martin</h2>
            
            <div className="inline-flex px-1 py-2">
                <a href="https://www.linkedin.com/in/jhonanibalmartin/" target="blank">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                        alt="Logo linkedIn"
                        height={25}
                        width={25}
                    />
                </a>
            </div>

            <div className="inline-flex px-1 py-2">
                <a href="https://github.com/Jmartinag/" target="blank">
                    <img
                        src="https://cdn.iconscout.com/icon/free/png-256/free-github-36-226096.png?f=webp"
                        alt="Logo Github"
                        height={25}
                        width={25}
                    />
                </a>
            </div>

            <p className="text-white-800 mt-4">
            © 2024 JAMA Soft - Todos los derechos reservados
            </p>

        </div>



    );
}