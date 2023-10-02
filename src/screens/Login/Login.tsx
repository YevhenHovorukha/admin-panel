import { useForm } from "react-hook-form";

import AuthCard from "../../components/AuthCard";
import AuthCardInfo from "../../components/AuthCardInfo";
import AuthContainer from "../../components/AuthContainer";
import FormBox from "../../components/FormBox";
import FormButton from "../../components/FormButton";
import SignUpText from "../../components/SignUpText";
import StandardInput from "../../components/Inputs/StandardInput";
import PasswordInput from "../../components/Inputs/PasswordInput";

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
          <StandardInput
            text="Email address"
            register={register}
            registerName={"email"}
            label="email"
          />

          <PasswordInput
            text="Password"
            register={register}
            registerName={"password"}
            label="password"
          />

          <FormButton type="submit" variant="contained" color="primary">
            Register
          </FormButton>
        </FormBox>
        <SignUpText />
      </AuthCard>
    </AuthContainer>
  );
};

export default Login;
