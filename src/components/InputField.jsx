function InputField ({ label, id, type, register, name, autoComplete, errors }) {
  return (
    <>
      <label className='font-semibold text-lg mt-2 text-gray-100' htmlFor={id}>
        {label}
      </label>
      <input
        className='border rounded p-2 focus:border-sky-500 text-black'
        name={name}
        id={id}
        type={type}
        autoComplete={autoComplete}
        required
        {...register(name)}
      />
      <div className='min-h-[35px]'>
        {errors[name]?.message && (
          <p className='text-red-600 text-sm font-semibold'>{errors[name].message}</p>
        )}
      </div>

    </>
  );
}

export default InputField;
