import { Container } from "./styles";

type TextButton = {
    variant: "Text";
    type: "ghost" | "bold";
};

type NormalButton = {
    variant: "Normal";
    type: "action" | "danger";
    borderSize?: "sm" | "md" | "lg";
};

type Props = NormalButton | TextButton;
export default function Button(props: Props) {
    if (props.variant === "Normal") {
        const { colour, borderSize = "sm" } = props;

        return <Container>Normal</Container>;
    }

    const { colour } = props;

    return <Container>Text</Container>;
}
