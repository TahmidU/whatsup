import { toast } from "react-toastify";
import { Container } from "./styles";

export default function Button() {
    function showToast() {
        toast('Easy peasy!');
    }

    return (<Container onClick={showToast}>Test</Container>)
}