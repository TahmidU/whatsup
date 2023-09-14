import { HTMLProps, useRef, useState } from "react";
import { Container, PasswordVisibilityBtn } from "./styles";
import EyeIcon from "@/icons/EyeIcon";

type Props = {} & HTMLProps<HTMLInputElement>;
export default function Input({ type, ...restProps }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordType = type === "password";

    function togglePasswordVisibility() {
        const inputElm = inputRef.current;

        if (inputElm) {
            if (inputElm.type === "password") {
                inputElm.type = "text";
                setShowPassword(false);
            } else {
                inputElm.type = "password";
                setShowPassword(true);
            }
        }
    }

    return (
        <Container>
            <input ref={inputRef} {...restProps} />
            {isPasswordType && (
                <PasswordVisibilityBtn
                    showPassword={showPassword}
                    onClick={togglePasswordVisibility}
                >
                    <EyeIcon />
                </PasswordVisibilityBtn>
            )}
        </Container>
    );
}
