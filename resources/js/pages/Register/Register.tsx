import {
    RegisterContainer,
    StyledRegisterForm,
} from "@/pages/Register/RegisterStyles";
import { getPublicImage } from "@/utils/PublicImagesUtil";

export default function Register() {
    return (
        <RegisterContainer>
            <StyledRegisterForm />
            <div className="register-right-segment">
                <div className="register-float-container">
                    <header>
                        <div className="register-logo-container">
                            <img
                                src={getPublicImage({
                                    type: "logo",
                                    name: "logo_dark",
                                })}
                            />
                        </div>
                        <h1>Whatsup</h1>
                    </header>

                    <ul>
                        <li>
                            <span>
                                Leverage the power of AI to power your chat
                            </span>
                        </li>
                        <li>
                            <span>
                                Utilise powerful tools to manage your groups
                            </span>
                        </li>
                        <li>
                            <span>
                                Limitless high definition video, and audio
                                calls. Unlimited messages
                            </span>
                        </li>
                        <li>
                            <span>
                                Find your conversations quickly with our smart
                                search
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </RegisterContainer>
    );
}
