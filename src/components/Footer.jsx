// import { LogoWhite } from "../assets";

// const Footer = () => (
//   <footer className='bg-primary py-12'>

//     <div className='container mx-auto text-white flex items-center gap-5 sm:justify-between flex-col sm:flex-row'>
//       <a href="/" >
//         <LogoWhite />
//       </a>
//       <div className="flex flex-col items-center">
//         <p>Copyright &copy; {new Date().getFullYear()}, All Right Reserved,</p>
//       </div>
//     </div>

//   </footer>
// );

// export default Footer;
import { LogoWhite } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-white py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-8">

        {/* Logo and Company Info */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/">
            <LogoWhite className="w-[160px]" />
          </Link>
          <p className="text-sm text-gray-400">
            Luxurious hotel experience & unforgettable memories.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-4 text-sm text-gray-300 uppercase tracking-wide font-medium">
          <Link to="/" className="hover:text-accent transition">Home</Link>
          <Link to="/rooms" className="hover:text-accent transition">Rooms</Link>
          <Link to="/restaurant" className="hover:text-accent transition">Restaurant</Link>
          <Link to="/spa" className="hover:text-accent transition">Spa</Link>
          <Link to="/contact" className="hover:text-accent transition">Contact</Link>
        </div>

        {/* Social Media */}
        <div className="flex gap-x-4">
          {/* Replace # with actual URLs and icons with actual SVGs or icons */}
          <a href="#" className="hover:text-accent transition">FB</a>
          <a href="#" className="hover:text-accent transition">IG</a>
          <a href="#" className="hover:text-accent transition">TW</a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} LuxStay Hotel. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
