import { ComponentPropsWithRef } from "react";
import { CheckboxContainer, CustomStyleCheckbox } from "./CheckboxStyles";
import CheckIcon from "@/Icons/CheckIcon";

interface Props extends ComponentPropsWithRef<"input"> {
    title: string;
    idAttribute?: string;
    className?: string;
    dataTestId?: string;
}
export default function Checkbox({
    title,
    idAttribute,
    className,
    dataTestId,
    ...restProps
}: Props) {
    return (
        <CheckboxContainer data-testid={dataTestId} className={className}>
            {/* Hide the default checkbox to maintain its feature. Display a styled pseudo-element */}
            <CustomStyleCheckbox>
                <input
                    id={idAttribute ?? title}
                    type="checkbox"
                    {...restProps}
                />
                <CheckIcon />
            </CustomStyleCheckbox>

            <label htmlFor={idAttribute ?? title}>{title}</label>
        </CheckboxContainer>
    );
}
