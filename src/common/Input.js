const Input = ({ label , name , formik , type="text" , placeholder}) => {
    return (
      <div className="mb-2">
        <label>{label}</label>
        <input
        className="mt-1 block w-full py-2 px-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          type={type}
          placeholder={placeholder}
          name={name}
          {...formik.getFieldProps(name)}
        />
        {formik.errors[name] && formik.touched[name] && (
          <div className="text-sm text-pink-600">{formik.errors[name]}</div>
        )}
      </div>
    );
  };
  
  export default Input;