import * as React from 'react';

export interface Props {
    svgProps: any;
}

// tslint:disable max-line-length
const VeilederKompakt: React.StatelessComponent<Props> = ({ svgProps }) => (
    <svg
        viewBox="0 0 96 96"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...svgProps}
    >
        <title>NAV veileder</title>
        <defs>
            <path
                d="M67.557 34.114h-.059c0-18.7-13.188-33.859-29.46-33.859-16.269 0-29.457 15.16-29.457 33.86v.016c-.006 15.97-8.058 25.1-8.058 25.1s7.952 9.976 37.516 9.976H38.097c29.567 0 37.519-9.975 37.519-9.975s-8.06-9.137-8.06-25.118"
                id="a"
            />
            <path
                d="M20.143 87.094v-2.77c0-7.466 8.327-15.476 14.514-19.14 1.135 1.985 4.132 9.894 13.25 9.894 9.053 0 13.375-8.363 13.56-10.328 6.311 3.43 15.504 11.796 15.504 19.573v1.951A47.789 47.789 0 0 1 48 96a47.781 47.781 0 0 1-27.857-8.906z"
                id="b"
            />
        </defs>
        <g id="Icons/employee/medium-animation" fill="none" fillRule="evenodd">
            <circle id="Background" fill="#C1B5D0" cx={48} cy={48} r={48} />
            <g id="Head" transform="translate(10 5)">
                <use id="Hair" fill="#D2654C" xlinkHref="#a" />
                <path
                    d="M44.017 90.627c-1.971.246-3.98.373-6.017.373-1.966 0-3.904-.118-5.808-.348-5.426-8.936-7.576-28.387-8.476-29.804 0 0 13.547-9.003 28.665-.476 0 1.322-2.642 21.184-8.364 30.255z"
                    id="Neck"
                    fill="#E7E5E2"
                />
                <path
                    d="M15.477 31.324s-.116.672-.266.562a1.76 1.76 0 0 0-.67-.14c-1.024 0-1.857.879-1.859 1.965l-.01 7.514c-.002 1.086.827 1.968 1.853 1.97.41 0 .786-.145 1.094-.384 2.48 12.1 11.321 20.646 21.863 20.664 10.541.018 19.41-8.5 21.924-20.591.307.24.683.386 1.095.388 1.025 0 1.858-.879 1.859-1.963l.011-7.516c.001-1.086-.828-1.967-1.853-1.97-.236 0-.462.052-.67.137-23.774 2.88-32.067-13.64-32.767-13.642 0 0-9.943 9.514-11.604 13.006z"
                    id="Face"
                    fill="#E7E5E2"
                />
                <g id="Eyes" transform="translate(27.03 31.865)" fill="#635E59">
                    <path
                        d="M2.569 6.528C.97 6.651.523 4.243 1.005 2.671c.09-.298.62-1.655 1.556-1.655.935 0 1.348.741 1.406.869.688 1.533.35 4.508-1.398 4.643"
                        id="Left-Eye"
                        className="eye"
                    />
                    <path
                        d="M20.404 6.528c1.599.123 2.046-2.285 1.564-3.857-.09-.298-.62-1.655-1.556-1.655-.935 0-1.348.741-1.406.869-.688 1.533-.35 4.508 1.398 4.643"
                        id="Right-eye"
                        className="eye"
                    />
                </g>
                <path
                    d="M39.023 41.162c.94-.148 1.581-.055 1.811.233.868 1.09.59 2.243-.898 3.19-.783.498-1.86.673-2.43.415a.548.548 0 0 0-.729.288.57.57 0 0 0 .282.744c.942.427 2.392.191 3.46-.488 2.023-1.287 2.486-3.21 1.172-4.862-.556-.697-1.541-.84-2.836-.636a.563.563 0 0 0-.462.644c.046.308.328.52.63.472z"
                    id="Nose"
                    className="nose"
                    fill="#D1BFA3"
                    fillRule="nonzero"
                />
                <path
                    d="M45.318 49.392c-.05.117-.164.34-.348.635-.31.497-.701.997-1.175 1.462-1.412 1.387-3.25 2.19-5.59 2.116-2.282-.072-4.112-.861-5.547-2.135a8.352 8.352 0 0 1-1.31-1.467 5.156 5.156 0 0 1-.388-.634.547.547 0 0 0-.74-.257.57.57 0 0 0-.251.756c.08.168.239.443.48.79a9.467 9.467 0 0 0 1.485 1.665c1.62 1.437 3.69 2.33 6.237 2.41 2.652.083 4.772-.842 6.39-2.43a9.09 9.09 0 0 0 1.34-1.67c.216-.346.357-.62.429-.789a.57.57 0 0 0-.285-.743.548.548 0 0 0-.727.291z"
                    id="Mouth-happy"
                    fill="#D19E9C"
                    fillRule="nonzero"
                />
                <path
                    d="M43.852 52.464c-.132-.24-.386-.568-.784-.89-.732-.593-1.68-.918-2.837-.835l-2.231.16a.548.548 0 0 0-.504.588.546.546 0 0 0 .581.51l2.23-.16c.875-.063 1.555.17 2.08.595.276.223.444.44.512.563a.541.541 0 0 0 .739.216.553.553 0 0 0 .214-.747z"
                    id="Mouth-unsure"
                    fill="#D19E9C"
                    fillRule="nonzero"
                />
                <path
                    d="M32.057 51.462s.869 1.021 3.286 1.002l2.42-.02"
                    id="Mouth-hesitant"
                    stroke="#D19E9C"
                    strokeLinecap="round"
                />
            </g>
            <use id="Body" fill="#5C4378" xlinkHref="#b" />
            <g id="ID" transform="translate(52.457 80.5)">
                <path
                    d="M11.677 12.721H1.317c-.728 0-1.317-.59-1.317-1.32V2.619c0-.729.59-1.32 1.317-1.32h16.308a1.32 1.32 0 0 1 1.318 1.32V9.42a47.753 47.753 0 0 1-7.266 3.301z"
                    id="Card"
                    fill="#D2242A"
                />
                <path
                    d="M13.538 7.537c0 2.158-1.781 3.908-3.978 3.908-2.201 0-3.983-1.75-3.983-3.908C5.577 5.38 7.36 3.63 9.56 3.63c2.197 0 3.978 1.75 3.978 3.907"
                    id="Fill-98"
                    fill="#FFF"
                />
                <path
                    id="Fill-99"
                    fill="#FFF"
                    d="M4.403 9.26h-.776l.83-1.997h.778z"
                />
                <path
                    id="Fill-100"
                    fill="#FFF"
                    d="M14.187 9.26h-.481l.83-1.997h.48z"
                />
                <path
                    id="Fill-101"
                    fill="#FFF"
                    d="M15.515 9.26h-.204l.828-1.997h.204z"
                />
                <path
                    d="M6.536 9.25h.611a.054.054 0 0 0 .056-.054V7.328a.054.054 0 0 0-.056-.054H6.53a.07.07 0 0 0-.071.07l-.243.588c-.015.03.01.067.042.067h.175c.026 0 .048.02.048.048v1.15c0 .03.024.053.055.053"
                    id="Fill-102"
                    fill="#C52D35"
                />
                <path
                    d="M7.864 9.25h.612c.032 0 .06-.023.06-.054V7.328c0-.03-.028-.054-.06-.054h-.952a.07.07 0 0 0-.072.07l-.244.588L7.124 8h.487c.109 0 .198.085.198.193v1.004c0 .03.024.054.055.054"
                    id="Fill-103"
                    fill="#C52D35"
                />
                <path
                    d="M10.604 7.274h-.613a.055.055 0 0 0-.056.054v1.868c0 .03.025.055.056.055h.62a.07.07 0 0 0 .07-.071l.243-.588c.015-.032-.008-.067-.045-.067h-.17a.047.047 0 0 1-.047-.047v-1.15c0-.03-.028-.054-.058-.054"
                    id="Fill-104"
                    fill="#C52D35"
                />
                <path
                    d="M8.083 9.25h.403a.07.07 0 0 0 .071-.07l.243-.589a.048.048 0 0 0-.045-.067h-.17l-.502.726z"
                    id="Fill-105"
                    fill="#C52D35"
                />
                <path
                    d="M12.244 7.274h.729c.035 0 .06.033.045.065l-.771 1.881c-.006.02-.024.03-.045.03h-.66l.654-1.944a.052.052 0 0 1 .048-.032"
                    id="Fill-106"
                    fill="#C52D35"
                />
                <path
                    d="M11.33 7.274H10.3c-.073 0 .296.07.322.135l.729 1.78c.015.039.052.062.093.062h.625l-.643-1.91a.1.1 0 0 0-.096-.067"
                    id="Fill-107"
                    fill="#C52D35"
                />
                <path
                    d="M9.985 7.908c0 .398-.052.422-.052.422s-.057-.382-.357-.382c-.295 0-.362.169-.362.295 0 .145.15.282.235.282h.536l-.317.689a.065.065 0 0 1-.059.037h-.243c-.256 0-.922-.329-.922-.964 0-.637.496-1.013.908-1.013.341 0 .633.23.633.634z"
                    id="Fill-108"
                    fill="#C52D35"
                />
                <path
                    d="M10.451 3.111h-1.69a.224.224 0 0 1-.226-.222v-.28c0-.121.101-.221.226-.221h1.69c.125 0 .226.1.226.222v.28c0 .122-.1.221-.226.221"
                    id="Fill-109"
                    fill="#5A1F57"
                />
                <path
                    id="Fill-110"
                    fill="#C2B5CF"
                    d="M9.117 2.856h.98V.26h-.98z"
                />
            </g>
        </g>
    </svg>
);

export default VeilederKompakt;
