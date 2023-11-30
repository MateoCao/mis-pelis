import InputField from '../../../core/components/InputField.jsx';
import formFieldsData from '../../../core/assets/data/loginForm.json';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/hook/useAuth.jsx';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../validations/schema/loginSchema.js';

function LoginView () {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: zodResolver(loginSchema) });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const navigate = useNavigate();

  const userLogin = async (data) => {
    try {
      setLoading(true);
      const res = await signIn(data);
      if (res.status === 201) {
        navigate('/my-list');
      } else {
        setError(res[0]);
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      setLoading(false);
    }
    reset();
  };

  return (
    <main className='flex relative items-center bg-black/30 w-full h-[calc(100vh-64px)]'>
      <img className='absolute w-full h-full object-cover top-0 left-0 -z-10' src='../../../../banner/banner.jpg' alt='Banner de peliculas' />
      <section className='flex flex-col justify-center bg-black p-8 rounded self-center w-fit mx-auto max-w-[380px]  '>
        <div className='w-4/5 self-center text-center'>
          {error && <p className='text-blue-500 text-lg font-semibold'>{error}</p>}
        </div>
        <form className='flex flex-col justify-center gap-2 w-[310px] h-[360px]' onSubmit={handleSubmit(userLogin)}>
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

          <button type='submit' className='bg-blue-700 hover:bg-blue-800 rounded text-white font-semibold text-lg p-2 mt-2 cursor-pointer duration-200'>
            {loading ? <FontAwesomeIcon className='animate-spin' icon={faSpinner} /> : 'Ingresar'}
          </button>
        </form>
        <div className='text-gray-200 text-lg'>
          <p>
            ¿No tienes cuenta?
          </p>
          <Link className='text-blue-500 hover:text-blue-600' to='/register'>
            ¡Registrate aquí!
          </Link>
        </div>
      </section>
    </main>
  );
}

export default LoginView;
