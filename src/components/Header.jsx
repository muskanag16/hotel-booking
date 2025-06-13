// import { useRoomContext } from '../context/RoomContext';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { LogoWhite } from '../assets'; // SVG Logo
// import { LogoDark } from '../assets'; // SVG Logo


// const Header = () => {

//   const { resetRoomFilterData } = useRoomContext();

//   const [header, setHeader] = useState(false);

//   useEffect(() => {
//     window.addEventListener('scroll', () =>
//       window.scrollY > 50
//         ? setHeader(true)
//         : setHeader(false)
//     );
//   });

//   const navLinks = ['Home', 'Rooms', 'Restaurant', 'Spa', 'Contact'];

//   return (
//     <header
//       className={`fixed z-50 w-full transition-all duration-300 
//       ${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'}`}
//     >

//       <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-y-6 lg:gap-y-0'>

//         {/* Logo */}
//         <Link to="/" onClick={resetRoomFilterData}>
//           {
//             header
//               ? <LogoDark className='w-[160px]' /> //<img className='w-[160px]' src={LogoDark} />
//               : <LogoWhite className='w-[160px]' /> //<img className='w-[160px]' src={LogoWhite} />
//           }
//         </Link>

//         {/* Nav */}
//         <nav className={`${header ? 'text-primary' : 'text-white'}
//         flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}>
//           {
//             navLinks.map(link =>
//               <Link to="/" className='transition hover:text-accent' key={link}>
//                 {link}
//               </Link>
//             )
//           }
//         </nav>

//       </div>

//     </header>
//   );
// };

// export default Header;

import { useRoomContext } from '../context/RoomContext';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogoWhite, LogoDark } from '../assets';

const Header = () => {
  const { resetRoomFilterData } = useRoomContext();
  const [header, setHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Spa', path: '/spa' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 
      ${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'}`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-y-6 lg:gap-y-0 px-4">
        {/* Logo */}
        <Link to="/" onClick={resetRoomFilterData}>
          {header
            ? <LogoDark className="w-[160px]" />
            : <LogoWhite className="w-[160px]" />}
        </Link>

        {/* Navigation */}
        <nav className={`${header ? 'text-primary' : 'text-white'}
          flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}
        >
          {navLinks.map(link => (
            <Link
              to={link.path}
              key={link.name}
              className={`transition hover:text-accent ${
                location.pathname === link.path ? 'text-accent' : ''
              }`}
              onClick={resetRoomFilterData}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
