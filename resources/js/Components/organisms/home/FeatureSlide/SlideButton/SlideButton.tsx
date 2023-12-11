interface Props {
    time?: number;
    onClick: () => void;
}
export default function SlideButton({ time = 10, onClick }: Props) {
    return (
        <button>
            <div>
                <div className="slide-button-icon-box"></div>
            </div>
            <div className="slide-button-timer" />
        </button>
    );
}
