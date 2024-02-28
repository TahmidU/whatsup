import Checkbox from "@/components/atoms/Checkbox";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/buttons/Button";
import { RegisterFormContainer } from "@/components/organisms/register/RegisterForm/RegisterFormStyles";
import { router, useForm } from "@inertiajs/react";
import { FormEvent, useState } from "react";

interface Props {
    className?: string;
}
export default function RegisterForm({ className = "" }: Props) {
    const { data, setData } = useForm({
        first_name: "",
        last_name: "",
        username: "",
        other_username: "",
        password: "",
    });

    const [validation, setValidation] = useState({
        password: false,
        agreement: false,
    });

    function onHandleSubmit(e: FormEvent) {
        e.preventDefault();
        router.post(route("register.store.user"), data, {
            preserveScroll: true,
            preserveState: true,
        });
    }

    function validateAgreement(e: FormEvent<HTMLInputElement>) {
        const isChecked = e.currentTarget.checked;
        setValidation((prev) => {
            return {
                ...prev,
                agreement: isChecked,
            };
        });
    }

    function validatePassword(e: FormEvent<HTMLInputElement>) {
        if (
            data.password === e.currentTarget.value &&
            data.password.length !== 0
        ) {
            setValidation((prev) => ({ ...prev, password: true }));
        } else {
            setValidation((prev) => ({ ...prev, password: false }));
        }
    }

    const onHandleInputChange =
        (inputData: keyof typeof data) => (e: FormEvent<HTMLInputElement>) => {
            setData(inputData, e.currentTarget.value);
        };

    const isInvalid =
        !validation.agreement ||
        !validation.password ||
        !!Object.keys(data).find(
            (key) => data[key as keyof typeof data].length === 0
        );

    return (
        <RegisterFormContainer onSubmit={onHandleSubmit} className={className}>
            <header>
                <h2>Register your accounts</h2>
                <span>
                    <p>
                        Already have an account?{" "}
                        <Button
                            as="link"
                            $variant="link-text"
                            href={route("login.show")}
                        >
                            Login
                        </Button>
                    </p>
                    <p className="info">
                        This form will create two accounts both of which will
                        share a limited quota.
                    </p>
                </span>
            </header>

            <div className="register-form-inputs">
                <label>
                    First name
                    <Input onChange={onHandleInputChange("first_name")} />
                </label>

                <br />

                <label>
                    Last name
                    <Input onChange={onHandleInputChange("last_name")} />
                </label>

                <br />

                <label>
                    Username
                    <Input onChange={onHandleInputChange("username")} />
                </label>

                <br />

                <label>
                    Other username (2nd account)
                    <Input onChange={onHandleInputChange("other_username")} />
                </label>

                <br />

                <label>
                    Password
                    <Input
                        type="password"
                        onChange={onHandleInputChange("password")}
                    />
                </label>

                <br />

                <label>
                    Re-enter password
                    <Input type="password" onChange={validatePassword} />
                </label>

                <br />

                <label className="register-agreement">
                    <Checkbox
                        className="agreement-checkbox"
                        onChange={validateAgreement}
                    />
                    <span className="agreement-text">
                        By Registering you agree to the{" "}
                        <Button as="link" href="" $variant="link-text">
                            Terms of Service
                        </Button>{" "}
                        and{" "}
                        <Button as="link" href="" $variant="link-text">
                            Privacy Policy
                        </Button>
                        .
                    </span>
                </label>
            </div>

            <footer>
                <Button
                    $borderSize="lg"
                    type="submit"
                    disabled={isInvalid}
                    className="register-btn"
                >
                    Register
                </Button>
            </footer>
        </RegisterFormContainer>
    );
}
