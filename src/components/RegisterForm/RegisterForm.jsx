import { useForm } from "react-hook-form";
import "./RegisterForm.css";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label>Username</label>
        <input
          type="text"
          {...register("username", { required: "Username is required" })}
          style={{ borderColor: errors.username && "red" }}
        />
        {errors.username && (
          <p className="error">{errors.username.message}</p>
        )}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
          style={{ borderColor: errors.email && "red" }}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^[0-9]{8}[A-Za-z]$/,
              message:
                "Password must be 8 digits followed by a letter (e.g. 12345678A)",
            },
          })}
          style={{ borderColor: errors.password && "red" }}
        />
        {errors.password && (
          <p className="error">{errors.password.message}</p>
        )}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
