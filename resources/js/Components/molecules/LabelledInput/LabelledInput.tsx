import { ComponentProps } from "react";
import { Container } from "./styles";
import Input from "@/Components/atoms/Input";

interface Props extends ComponentProps<typeof Input> {
    labelName: string;
    idAttribute?: string;
    className?: string;
}
export default function LabelledInput({
    labelName,
    idAttribute = "",
    className = "",
    ...restProps
}: Props) {
    return (
        <Container className={className}>
            <label htmlFor={idAttribute ?? labelName}>{labelName}</label>
            <Input
                id={idAttribute ?? labelName}
                name={idAttribute ?? labelName}
                {...restProps}
            />
        </Container>
    );
}
