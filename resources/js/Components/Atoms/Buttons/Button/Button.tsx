import { ButtonContainer, LinkContainer } from "./ButtonStyles";
import {
    ButtonInterface,
    LinkInterface,
} from "@/Components/Atoms/Buttons/Button/types/Polymorphic";

type Props = ButtonInterface | LinkInterface;

// Can't destruct `as` from here. Typescript loses the type infer
export default function Button({
    $variant = "action",
    $borderSize = "sm",
    children,
    className = "",
    ...restProps
}: Props) {
    if (restProps.as === "link") {
        const { as, ...specificProps } = restProps;
        return (
            <LinkContainer
                $variant={$variant}
                $borderSize={$borderSize}
                className={className}
                {...specificProps}
            >
                {children}
            </LinkContainer>
        );
    }

    const { as, ...specificProps } = restProps;
    return (
        <ButtonContainer
            $variant={$variant}
            $borderSize={$borderSize}
            className={className}
            {...specificProps}
        >
            {children}
        </ButtonContainer>
    );
}
