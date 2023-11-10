function ProfileModal () {
  return (
    <div className='bg-[#23252b] w-50 fixed z-30 right-2 rounded text-lg'>
      <ul className='flex flex-col gap-5 justify-around p-5 text-gray-200 font-semibold cursor-default'>
        <li className='hover:underline cursor-pointer'>Mi perfil</li>
        <li className='hover:underline cursor-pointer'>Mi lista</li>
        <li className='hover:underline cursor-pointer'>Configuración</li>
        <li className='hover:underline cursor-pointer'>Cerrar sesión</li>
      </ul>
    </div>
  );
}

export default ProfileModal;
