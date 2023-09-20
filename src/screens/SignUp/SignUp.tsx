import { useForm } from "react-hook-form";

import AuthInput from "../../components/AuthInput";
import AuthCardInfo from "../../components/AuthCardInfo";
import AuthContainer from "../../components/AuthContainer";
import AuthCard from "../../components/AuthCard";
import FormBox from "../../components/FormBox/FormBox";
import FormButton from "../../components/FormButton";

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  return (
    <AuthContainer>
      <AuthCard>
        <AuthCardInfo
          mainText="Sign Up"
          additionalText="Create a new account"
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
            text="First Name"
            register={register}
            registerName={"firstName"}
            label="First name"
          />

          <AuthInput
            text="Last Name"
            register={register}
            registerName={"lastName"}
            label="LAST name"
          />

          <AuthInput
            text="Password"
            register={register}
            registerName={"password"}
            isPassword={true}
            label="password"
          />

          <AuthInput
            text="Password"
            register={register}
            registerName={"confirmPassword"}
            isPassword={true}
            label="confirm password"
          />

          <FormButton type="submit" variant="contained" color="primary">
            Register
          </FormButton>
        </FormBox>
      </AuthCard>
    </AuthContainer>
  );
};

export default SignUp;
