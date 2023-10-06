import { useForm } from "react-hook-form";

import AuthCard from "../../components/AuthCard";
import AuthCardInfo from "../../components/AuthCardInfo";
import AuthContainer from "../../components/AuthContainer";
import FormBox from "../../components/FormBox";
import FormButton from "../../components/FormButton";
import SignUpText from "../../components/SignUpText";
import StandardInput from "../../components/Inputs/StandardInput";
import PasswordInput from "../../components/Inputs/PasswordInput";
import { emailValidation } from "../../constants/validation";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
            options={emailValidation}
            registerName={"email"}
            label="email"
            errorMessage={String(errors["email"]?.message)}
          />

          <PasswordInput
            text="Password"
            register={register}
            registerName={"password"}
            errorMessage={String(errors["password"]?.message)}
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
