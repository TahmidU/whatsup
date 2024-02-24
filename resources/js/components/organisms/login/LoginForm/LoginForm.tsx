import { FormEvent, Fragment } from "react";
import { LoginFormContainer } from "./LoginFormStyles";
// import LabelledInput from "@/Components/Molecules/LabelledInput";
import Button from "@/components/atoms/buttons/Button";
import Input from "@/components/atoms/Input";
// import Checkbox from "@/Components/Atoms/Checkbox";

interface Props {}
export default function LoginForm({}: Props) {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
    }

    return (
        <LoginFormContainer>
            <header>
                <section className="register-form-welcome-segment">
                    <span>Login</span>
                    <span>
                        New to Whatsup?{" "}
                        <Button
                            as="link"
                            $variant="text"
                            href={route("user.register")}
                        >
                            Register.
                        </Button>
                    </span>
                </section>
            </header>

            <div className="register-form-inputs">
                <label>
                    First name
                    <Input
                    // onChange={onHandleInputChange("first_name")}
                    />
                </label>

                <br />

                <label>
                    Last name
                    <Input
                    // onChange={onHandleInputChange("last_name")}
                    />
                </label>

                <br />

                <label>
                    Username
                    <Input
                    // onChange={onHandleInputChange("username")}
                    />
                </label>

                <br />

                <label>
                    Other username (2nd account)
                    <Input
                    // onChange={onHandleInputChange("other_username")}
                    />
                </label>

                <br />

                <label>
                    Password
                    <Input
                        type="password"
                        // onChange={onHandleInputChange("password")}
                    />
                </label>

                <br />

                <label>
                    Re-enter password
                    <Input
                        type="password"
                        // onChange={validatePassword}
                    />
                </label>
            </div>

            <footer>
                <Button
                    as="link"
                    href={route("user.login")}
                    $borderSize="lg"
                    $variant="text"
                    className="register-form-login"
                >
                    Already have an account?
                </Button>
                <Button
                    $borderSize="lg"
                    type="submit"
                    // disabled={isInvalid}
                >
                    Login
                </Button>
            </footer>
        </LoginFormContainer>
    );

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
