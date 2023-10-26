import InputField from '../components/InputField.jsx';
import formFieldsData from '../assets/data/registerForm.json';
import { useForm } from 'react-hook-form';

function RegisterPage () {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const userRegister = async (data) => {
    console.log(data);

    reset();
  };

  return (
    <main className=' bg-[#242424] w-screen h-screen'>
      <div className='h-44 '>
        <h1 className='text-red-700 text-5xl p-4 font-bold'>NETFLIX</h1>
      </div>
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

export default RegisterPage;
