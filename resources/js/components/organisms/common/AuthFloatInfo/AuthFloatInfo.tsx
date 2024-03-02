import { AuthFloatInfoContainer } from "@/components/organisms/common/AuthFloatInfo/AuthFloatInfoStyles";
import { getPublicImage } from "@/utils/PublicImagesUtil";

export default function AuthFloatInfo() {
    return (
        <AuthFloatInfoContainer>
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
            </div>
        </AuthFloatInfoContainer>
    );
}
