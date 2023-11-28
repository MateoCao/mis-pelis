import InputField from '../../../components/InputField.jsx';
import formFieldsData from '../../../core/assets/data/registerForm.json';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../auth/hook/useAuth.jsx';

function RegisterView () {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const { signUp } = useAuth();

  const userRegister = async (data) => {
    console.log(data);
    const res = await signUp(data);
    console.log(res);
    reset();
    return data;
  };

  return (
    <main className='flex items-center bg-[#242424] w-full h-[calc(100vh-64px)]'>
      <section className='flex justify-center bg-black p-8 rounded self-center w-fit mx-auto'>
        <form className='flex flex-col justify-center gap-4 w-[370px] h-[450px]' onSubmit={handleSubmit(userRegister)}>
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

          <input className='bg-red-700 hover:bg-red-800 rounded text-white font-semibold text-lg p-2 mt-2 cursor-pointer duration-200' type='submit' value='Registrarme' />
        </form>
      </section>
    </main>
  );
}

export default RegisterView;
