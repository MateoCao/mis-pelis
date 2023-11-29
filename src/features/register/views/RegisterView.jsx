import InputField from '../../../components/InputField.jsx';
import formFieldsData from '../../../core/assets/data/registerForm.json';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../auth/hook/useAuth.jsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../validations/schema/registerSchema.js';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterView () {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: zodResolver(registerSchema) });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const userRegister = async (data) => {
    try {
      setLoading(true);
      const res = await signUp(data);
      if (res.status === 201) {
        navigate('/my-list');
      } else {
        setError(res[0]);
        setTimeout(() => {
          setError('');
        }, 5000);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError('');
      }, 5000);
      console.log('Error al registrar usuario', error);
    } finally {
      console.log('FINALLY');
      setLoading(false);
    }
    reset();
    return data;
  };

  return (
    <main className='flex items-center bg-[#242424] w-full h-[calc(100vh-64px)]'>
      <section className='flex flex-col justify-center bg-black p-8 rounded self-center w-fit mx-auto max-w-[380px]'>
        {error &&
          <div className='w-4/5 self-center text-center'>
            <p className='text-red-500 text-lg font-semibold'>{error}</p>
          </div>}
        <form className='flex flex-col justify-center gap-2 w-[310px] min-h-[450px]' onSubmit={handleSubmit(userRegister)}>
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
          <button type='submit' className='bg-red-700 hover:bg-red-800 rounded text-white font-semibold text-lg p-2 mt-2 cursor-pointer duration-200'>
            {loading ? <FontAwesomeIcon className='animate-spin' icon={faSpinner} /> : 'Registrarme'}
          </button>
        </form>
      </section>
    </main>
  );
}

export default RegisterView;
