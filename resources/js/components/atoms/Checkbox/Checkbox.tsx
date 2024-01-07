import { ComponentPropsWithRef } from "react";
import { CheckboxContainer } from "./CheckboxStyles";
import CheckIcon from "@/Icons/CheckIcon";

interface Props extends ComponentPropsWithRef<"input"> {
    className?: string;
    dataTestId?: string;
}
export default function Checkbox({
    className,
    dataTestId,
    ...restProps
}: Props) {
    return (
        <CheckboxContainer data-testid={dataTestId} className={className}>
            <input type="checkbox" {...restProps} />
            <CheckIcon />
        </CheckboxContainer>
    );
}
