import Checkbox from "@/components/atoms/Checkbox";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/buttons/Button";
import { RegisterFormContainer } from "@/components/organisms/register/RegisterForm/RegisterFormStyles";
import { getPublicImage } from "@/utils/PublicImagesUtil";

export default function RegisterForm() {
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
                        <span>
                            DO NOT ENTER PERSONAL INFORMATION IN THIS SITE
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
                        <Checkbox className="register-form-agreement" />I have
                        read and understood the{" "}
                        <Button $variant="text">Terms of service's</Button> and{" "}
                        <Button $variant="text">Privacy Policy</Button>
                    </label>
                </div>
                <footer>
                    <Button $borderSize="lg" $variant="text">
                        Already have an account?
                    </Button>
                    <Button $borderSize="lg">Register</Button>
                </footer>
            </form>
        </RegisterFormContainer>
    );
}
