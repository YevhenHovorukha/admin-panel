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
} from "../../constants/validation";

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
            errorMessage={String(errors["email"]?.message)}
          />

          <StandardInput
            text="First Name"
            register={register}
            registerName={"firstName"}
            label="First name"
            options={fullNameValidation}
            errorMessage={String(errors["firstName"]?.message)}
          />

          <StandardInput
            text="Last Name"
            register={register}
            registerName={"lastName"}
            label="Last name"
            options={fullNameValidation}
            errorMessage={String(errors["lastName"]?.message)}
          />

          <PasswordInput
            text="Password"
            register={register}
            registerName={"password"}
            label="password"
            errorMessage={String(errors["password"]?.message)}
          />

          <PasswordInput
            text="Password"
            register={register}
            registerName={"confirmPassword"}
            label="confirm password"
            errorMessage={String(errors["confirmPassword"]?.message)}
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
