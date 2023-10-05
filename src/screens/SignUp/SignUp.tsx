import { useForm } from "react-hook-form";

import AuthCardInfo from "../../components/AuthCardInfo";
import AuthContainer from "../../components/AuthContainer";
import AuthCard from "../../components/AuthCard";
import FormBox from "../../components/FormBox/FormBox";
import FormButton from "../../components/FormButton";
import StandardInput from "../../components/Inputs/StandardInput";
import PasswordInput from "../../components/Inputs/PasswordInput";
import {
  emailValidation,
  fullNameValidation,
} from "../../validation/validation";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          <StandardInput
            text="Email address"
            register={register}
            registerName={"email"}
            label="email"
            options={emailValidation}
            errors={errors}
          />

          <StandardInput
            text="First Name"
            register={register}
            registerName={"firstName"}
            label="First name"
            options={fullNameValidation}
            errors={errors}
          />

          <StandardInput
            text="Last Name"
            register={register}
            registerName={"lastName"}
            label="Last name"
            options={fullNameValidation}
            errors={errors}
          />

          <PasswordInput
            text="Password"
            register={register}
            registerName={"password"}
            label="password"
            errors={errors}
          />

          <PasswordInput
            text="Password"
            register={register}
            registerName={"confirmPassword"}
            label="confirm password"
            errors={errors}
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
