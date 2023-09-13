import { HTMLProps } from "react";
import { Container } from "./styles";

type Props = {} & HTMLProps<HTMLInputElement>;
export default function Input({ ...restProps }: Props) {
    return (
        <Container>
            <input {...restProps} />
            {/* MdOutlineRemoveRedEye */}
        </Container>
    );
}
