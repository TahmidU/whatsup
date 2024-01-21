import { HTMLProps, useRef, useState, MouseEvent } from "react";
import { InputContainer, PasswordVisibilityBtn } from "./InputStyles";
import EyeIcon from "@/Icons/EyeIcon";

interface Props extends HTMLProps<HTMLInputElement> {
    dataTestId?: string;
}
export default function Input({ type, dataTestId, ...restProps }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const isPasswordType = type === "password";
    const [showPassword, setShowPassword] = useState(false);

    function togglePasswordVisibility(e: MouseEvent) {
        e.preventDefault();

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
        <InputContainer>
            <input
                {...restProps}
                ref={inputRef}
                type={type}
                data-testid={dataTestId}
            />
            {isPasswordType && (
                <PasswordVisibilityBtn
                    data-testid={
                        dataTestId ? `${dataTestId}-visibility` : undefined
                    }
                    $showPassword={showPassword}
                    onClick={togglePasswordVisibility}
                >
                    <EyeIcon />
                </PasswordVisibilityBtn>
            )}
        </InputContainer>
    );
}
