import Input from "@/Components/atoms/Input";
import { ComponentType } from "react";
import { Container } from "./styles";

type Props = {
    labelName: string;
    nameAttribute?: string;
    idAttribute?: string;
    className?: string;
} & ComponentType<typeof Input>;
export default function LabelledInput({
    labelName,
    nameAttribute = "",
    idAttribute = "",
    className = "",
    ...restProps
}: Props) {
    return (
        <Container className={className}>
            <label htmlFor={nameAttribute ?? labelName}>{labelName}</label>
            <Input
                id={idAttribute ?? labelName}
                name={nameAttribute ?? labelName}
                {...restProps}
            />
        </Container>
    );
}
