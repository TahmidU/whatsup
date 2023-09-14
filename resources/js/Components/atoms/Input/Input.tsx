import { HTMLProps, useRef } from "react";
import { Container, PasswordVisibilityBtn } from "./styles";
import EyeIcon from "@/icons/EyeIcon";

type Props = {} & HTMLProps<HTMLInputElement>;
export default function Input({ type, ...restProps }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const isPasswordType = type === "password";

    function togglePasswordVisibility() {
        const inputElm = inputRef.current;

        if (inputElm) {
            if (inputElm.type === "password") {
                inputElm.type = "text";
            } else {
                inputElm.type = "password";
            }
        }
    }

    return (
        <Container>
            <input ref={inputRef} {...restProps} />
            {isPasswordType && (
                <PasswordVisibilityBtn onClick={togglePasswordVisibility}>
                    <EyeIcon />
                </PasswordVisibilityBtn>
            )}
        </Container>
    );
}
