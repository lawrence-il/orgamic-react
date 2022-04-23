const Spinner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', background: 'none', display: 'block', shaperendering: 'auto'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="rotate(0 50 50)">
            <rect x="47.5" y="22.5" rx="2.5" ry="7.5" width="5" height="15" fill="#1c4595">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(36 50 50)">
            <rect x="47.5" y="22.5" rx="2.5" ry="7.5" width="5" height="15" fill="#e76a24">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(72 50 50)">
            <rect x="47.5" y="22.5" rx="2.5" ry="7.5" width="5" height="15" fill="#01080a">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.7s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(108 50 50)">
            <rect x="47.5" y="22.5" rx="2.5" ry="7.5" width="5" height="15" fill="#e7e5e8">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(144 50 50)">
            <rect x="47.5" y="22.5" rx="2.5" ry="7.5" width="5" height="15" fill="#fbbc42">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(180 50 50)">
            <rect x="47.5" y="22.5" rx="2.5" ry="7.5" width="5" height="15" fill="#1c4595">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(216 50 50)">
            <rect x="47.5" y="22.5" rx="2.5" ry="7.5" width="5" height="15" fill="#e76a24">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(252 50 50)">
            <rect x="47.5" y="22.5" rx="2.5" ry="7.5" width="5" height="15" fill="#01080a">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.2s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(288 50 50)">
            <rect x="47.5" y="22.5" rx="2.5" ry="7.5" width="5" height="15" fill="#e7e5e8">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.1s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(324 50 50)">
            <rect x="47.5" y="22.5" rx="2.5" ry="7.5" width="5" height="15" fill="#fbbc42">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
            </rect>
            </g>
        </svg>
    );
};

export default Spinner;