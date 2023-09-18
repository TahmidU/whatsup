import { ComponentPropsWithRef } from "react";
import { CheckboxContainer, Toggle } from "./styles";
import CheckIcon from "@/icons/CheckIcon";

interface Props extends ComponentPropsWithRef<"input"> {
    title: string;
    idAttribute?: string;
}
export default function Checkbox({ title, idAttribute, ...restProps }: Props) {
    return (
        <CheckboxContainer>
            <label htmlFor={idAttribute ?? title}>{title}</label>
            <Toggle>
                <input
                    id={idAttribute ?? title}
                    type="checkbox"
                    {...restProps}
                />
                <CheckIcon />
            </Toggle>
        </CheckboxContainer>
    );
}
