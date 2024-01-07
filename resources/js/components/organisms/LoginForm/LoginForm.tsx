import { FormEvent, Fragment } from "react";
import { LoginFormContainer, Form } from "./LoginFormStyles";
// import LabelledInput from "@/Components/Molecules/LabelledInput";
import Button from "@/components/atoms/buttons/Button";
// import Checkbox from "@/Components/Atoms/Checkbox";

interface Props {}
export default function LoginForm({}: Props) {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
    }

    return <></>;

    // return (
    //     <LoginFormContainer
    //         header={
    //             <Fragment>
    //                 <div className="logo-container">
    //                     <img src="logo/logo_alt.png" />
    //                 </div>
    //                 <section className="welcome-segment">
    //                     <span>Welcome back!</span>
    //                     <span>Please enter your details</span>
    //                 </section>
    //             </Fragment>
    //         }
    //         footer={
    //             <Fragment>
    //                 <span>
    //                     {"Don't"} have an account?{" "}
    //                     <Button as="link" href="" className="sign-up-link">
    //                         Sign Up
    //                     </Button>
    //                 </span>
    //             </Fragment>
    //         }
    //     >
    //         <Form onSubmit={handleSubmit}>
    //             <div className="login-main-segment">
    //                 <div className="login-typed-inputs">
    //                     <LabelledInput
    //                         labelName="Email"
    //                         idAttribute="email-login-form"
    //                         type="email"
    //                     />
    //                     <LabelledInput
    //                         labelName="Password"
    //                         idAttribute="password-login-form"
    //                         type="password"
    //                     />
    //                 </div>
    //                 <div className="login-main-options">
    //                     <Checkbox
    //                         idAttribute="remember-me-login-form"
    //                         title="Remember me"
    //                     />
    //                     <Button as="link" href="">
    //                         Forgot Password?
    //                     </Button>
    //                 </div>
    //             </div>

    //             <Button $borderSize="xl">Login</Button>
    //         </Form>
    //     </LoginFormContainer>
    // );
}
