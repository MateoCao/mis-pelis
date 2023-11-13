import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import ProfileModal from './ProfileModal';

function Navbar () {
  const [modalActive, setModalActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const changeOpacity = () => {
    if (window.scrollY > 68) {
      setIsScrolled(true);
    } else if (window.scrollY <= 68) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    changeOpacity();
    window.addEventListener('scroll', changeOpacity);
  }, []);
  const handleModal = () => {
    setModalActive(!modalActive);
  };
  return (
    <nav className={`h-16 fixed top-0 w-full z-50 flex justify-between items-center duration-500 ${!isScrolled ? 'bg-gradient-to-b from-[#23252b]/100 to-[#23252b]/0' : 'bg-[#23252b]/100'}`}>
      <div className='flex gap-16 text-gray-200 p-2'>
        <div className='pl-6'>
          <h1 className='font-bold text-3xl cursor-pointer hover:text-gray-300'>Mis pelis</h1>
        </div>
        <ul className='list-none flex gap-8 text-lg items-center'>
          <li className='hover:text-gray-300 cursor-pointer'>Inicio</li>
          <li className='hover:text-gray-300 cursor-pointer'>Populares</li>
          <li className='hover:text-gray-300 cursor-pointer'>Novedades</li>
          <li className='hover:text-gray-300 cursor-pointer'>Mi lista</li>
        </ul>
      </div>
      <div className='pr-12'>
        <ul className='list-none flex gap-10 text-xl text-gray-200 p-2'>
          <li className='cursor-pointer'>
            <FontAwesomeIcon icon={faSearch} />
          </li>
          <li className='cursor-pointer' onMouseLeave={handleModal} onMouseEnter={handleModal}>
            <FontAwesomeIcon className='mr-2' icon={faUser} />
            <FontAwesomeIcon className='text-sm' icon={faChevronDown} />
            {modalActive && <ProfileModal />}

          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
