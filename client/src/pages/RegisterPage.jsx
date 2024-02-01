import { useForm } from "react-hook-form";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    // form: { error },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <section>
        <button className="btn btn-block bg-slate-500">aaaa</button>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Register</h1>
            <div>
              <p>Basic Information</p>
              <div>
                <label htmlFor="fullname">Full Name</label>
                <br></br>
                <input
                  {...register("fullname", {
                    required: true,
                  })}
                  id="fullname"
                  type="text"
                  placeholder="enter you name"
                />
              </div>
              <button className="bg-orange600" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
