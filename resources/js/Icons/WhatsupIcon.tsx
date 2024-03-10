import { ComponentProps } from "react";

export default function WhatsupIcon(props: ComponentProps<"svg">) {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 120 120"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit={2}
            {...props}
        >
            <g>
                <path
                    d="M60,5.015l54.985,109.97l-54.985,-44.504l-54.985,44.504l54.985,-109.97Zm0,15.938l39.047,78.094l-39.047,-31.604l-39.047,31.604l39.047,-78.094Z"
                    fill="#1cd774"
                />
            </g>
        </svg>
    );
}
