import { useNavigate } from "react-router-dom";

import AuthContainer from "../../components/AuthContainer";
import AuthCard from "../../components/AuthCard";
import AuthCardInfo from "../../components/AuthCardInfo";

import { NotFoundButton } from "./styeld";

const NotFound = () => {
  const navigate = useNavigate();
  const canGoBack = window.history.state.idx > 0;

  const goBack = () => {
    navigate(-1);
  };

  return (
    <AuthContainer>
      <AuthCard>
        <AuthCardInfo
          mainText="404 NOT FOUND "
          additionalText="Sorry, can’t find this page"
        />
        {canGoBack && (
          <NotFoundButton variant="contained" onClick={goBack}>
            Return to previous page
          </NotFoundButton>
        )}
      </AuthCard>
    </AuthContainer>
  );
};

export default NotFound;
