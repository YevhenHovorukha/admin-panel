import { useForm } from "react-hook-form";

import AuthCard from "../../components/AuthCard";
import AuthCardInfo from "../../components/AuthCardInfo";
import AuthContainer from "../../components/AuthContainer";
import AuthInput from "../../components/AuthInput";
import FormBox from "../../components/FormBox";
import FormButton from "../../components/FormButton";

const Login = () => {
  const { register, handleSubmit } = useForm();

  return (
    <AuthContainer>
      <AuthCard>
        <AuthCardInfo
          mainText="Log In to Dashboard Kit"
          additionalText="Enter your email and password"
        />
        <FormBox
          component="form"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <AuthInput
            text="Email address"
            register={register}
            registerName={"email"}
            label="email"
          />

          <AuthInput
            text="Password"
            register={register}
            registerName={"password"}
            isPassword={true}
            label="password"
          />

          <FormButton type="submit" variant="contained" color="primary">
            Register
          </FormButton>
        </FormBox>
      </AuthCard>
    </AuthContainer>
  );
};

export default Login;
