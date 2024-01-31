import img from "E:/Web/assets/01_Homepage/WeChat Image_20230707151821.png";

const Logo = () =>{

    return (

        <nav>
            <a href="/" className="flex items-start justify-start p-3 pl-14">
            <img src={img} className="h-20 w-20" alt="Logo" />
            </a>
        </nav>



    );

}

export default Logo;