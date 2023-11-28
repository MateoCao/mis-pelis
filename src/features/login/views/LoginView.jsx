import InputField from '../../../components/InputField.jsx';
import formFieldsData from '../../../core/assets/data/loginForm.json';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/hook/useAuth.jsx';

function LoginView () {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const { signIn } = useAuth();

  const navigate = useNavigate();

  const userRegister = async (data) => {
    const res = await signIn(data);
    if (res.status === 201) {
      navigate('/my-list');
      console.log('ASD');
    } else {
      console.log('Error al logear usuario');
    }
    reset();
  };

  return (
    <main className='flex items-center bg-[#242424] w-full h-[calc(100vh-64px)]'>
      <section className='flex flex-col justify-center bg-black p-8 rounded self-center w-fit mx-auto'>
        <form className='flex flex-col justify-center gap-4 w-[310px] h-[360px]' onSubmit={handleSubmit(userRegister)}>
          {formFieldsData.map(field => (
            <InputField
              key={field.name}
              label={field.label}
              id={field.id}
              type={field.type}
              register={register}
              name={field.name}
              autoComplete={field.autoComplete}
              errors={errors}
            />
          ))}

          <input className='bg-red-700 hover:bg-red-800 rounded text-white font-semibold text-lg p-2 mt-2 cursor-pointer duration-200' type='submit' value='Ingresar' />
        </form>
        <div className='text-gray-200 text-lg'>
          <p>
            ¿No tienes cuenta?
          </p>
          <Link to='/register'>
            ¡Registrate aquí!
          </Link>
        </div>
      </section>
    </main>
  );
}

export default LoginView;
