import './styles.css'

export const WaveSvg = () => (
    <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
    >
        <defs>
            <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
        </defs>
        <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#FFD1C7"></use>
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="#FF9B84"></use>
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#FE8A6F"></use>
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#FE8063"></use>
        </g>
    </svg>
)