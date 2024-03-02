import RegisterForm from "@/components/organisms/register/RegisterForm";
import styled from "styled-components";

export const RegisterContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
`;
RegisterContainer.displayName = "RegisterContainer";

export const StyledRegisterForm = styled(RegisterForm)`
    width: 525px;
    margin: auto;
`;
StyledRegisterForm.displayName = "StyledRegisterForm";
