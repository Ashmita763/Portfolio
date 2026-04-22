import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className=" px-10 py-4 fixed w-full bg-black-100/90 backdrop-blur-sm z-50">
      <div className=" flex justify-between text-secondary font-bold text-3xl cursor-pointer hover:text-orange-200">ASHMITA BASNET</div>

      <div className="flex justify-end gap-20  text-3xl">
        {["home", "about", "background", "skills", "projects", "contact"].map(
          (item) => ( 
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-purple-400"
            >
              {item.toUpperCase()}
            </Link>
          ) 
        )}
      </div>
    </nav>
  );
};


export default Navbar;