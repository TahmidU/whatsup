import Checkbox from "@/components/atoms/Checkbox";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/buttons/Button";
import { RegisterFormContainer } from "@/components/organisms/register/RegisterForm/RegisterFormStyles";
import { getPublicImage } from "@/utils/PublicImagesUtil";
import { router, useForm } from "@inertiajs/react";
import { FormEvent, isValidElement, useState } from "react";

export default function RegisterForm() {
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
        router.post(route("user.register"), data, {
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
        <RegisterFormContainer>
            <form onSubmit={onHandleSubmit}>
                <header>
                    <div className="register-form-logo-container">
                        <img
                            src={getPublicImage({
                                type: "logo",
                                name: "logo_dark",
                            })}
                        />
                    </div>
                    <section className="register-form-welcome-segment">
                        <span>Register your accounts</span>
                        <span>
                            This form will create two accounts both of which
                            will share a limited quota.
                        </span>
                    </section>
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
                        <Input
                            onChange={onHandleInputChange("other_username")}
                        />
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

                    <label className="register-form-tos-pp">
                        <Checkbox
                            className="register-form-agreement"
                            onChange={validateAgreement}
                        />
                        I understand not to enter in any personal information in
                        this website
                    </label>
                </div>

                <footer>
                    <Button
                        $borderSize="lg"
                        $variant="text"
                        className="register-form-login"
                    >
                        Already have an account?
                    </Button>
                    <Button $borderSize="lg" type="submit" disabled={isInvalid}>
                        Register
                    </Button>
                </footer>
            </form>
        </RegisterFormContainer>
    );
}
