import { HTMLProps, useRef, useState } from "react";
import { Container, PasswordVisibilityBtn } from "./styles";
import EyeIcon from "@/icons/EyeIcon";

type Props = {} & HTMLProps<HTMLInputElement>;
export default function Input({ type, ...restProps }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const isPasswordType = type === "password";
    const [showPassword, setShowPassword] = useState(false);

    function togglePasswordVisibility() {
        const inputElm = inputRef.current;

        if (inputElm) {
            if (inputElm.type === "password") {
                inputElm.type = "text";
                setShowPassword(true);
            } else {
                inputElm.type = "password";
                setShowPassword(false);
            }
        }
    }

    return (
        <Container>
            <input ref={inputRef} type={type} {...restProps} />
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
