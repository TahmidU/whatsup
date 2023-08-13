import { toast } from "react-toastify";
import { Container } from "./styles";

export default function Button() {
    function showToast() {
        toast('Easy peasy!');
    }

    return (<button onClick={showToast}>Test</button>)
}