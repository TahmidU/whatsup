import Checkbox from "@/components/atoms/Checkbox";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/buttons/Button";
import { RegisterFormContainer } from "@/components/organisms/register/RegisterForm/RegisterFormStyles";
import { getPublicImage } from "@/utils/PublicImagesUtil";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function RegisterForm() {
    const formData = useForm({
        firstName: "",
        lastName: "",
        username: "",
        otherUsername: "",
        password: "",
    });

    const [validation, setValidation] = useState({
        reEnterPassword: false,
        agreement: false,
    });

    const isInvalid =
        !validation.agreement &&
        !validation.reEnterPassword &&
        !!Object.keys(formData.data).find(
            (key) =>
                formData.data[key as keyof typeof formData.data].length === 0
        );

    return (
        <RegisterFormContainer>
            <form>
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
                        <Input />
                    </label>

                    <br />

                    <label>
                        Last name
                        <Input />
                    </label>

                    <br />

                    <label>
                        Username
                        <Input />
                    </label>

                    <br />

                    <label>
                        Other username (2nd account)
                        <Input />
                    </label>

                    <br />

                    <label>
                        Password
                        <Input />
                    </label>

                    <br />

                    <label>
                        Re-enter password
                        <Input />
                    </label>

                    <br />

                    <label className="register-form-tos-pp">
                        <Checkbox
                            className="register-form-agreement"
                            checked={validation.agreement}
                            onChange={(e) => {
                                setValidation((prev) => ({
                                    ...prev,
                                    agreement: e.currentTarget.checked,
                                }));
                            }}
                        />
                        I have not entered in any personal information
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
