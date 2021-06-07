import React from 'react';

/*
---------------------------------------------------------------
Small Icons
--------------------------------------------------------------- */

export const AlertSolidCircle = ({ color }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
		<path
			d="M 12 1 C 18.075 1 23 5.925 23 12 C 23 18.075 18.075 23 12 23 C 5.925 23 1 18.075 1 12 C 1 5.925 5.925 1 12 1 Z M 11 12 C 11 12.552 11.448 13 12 13 C 12.552 13 13 12.552 13 12 L 13 7 C 13 6.448 12.552 6 12 6 C 11.448 6 11 6.448 11 7 Z M 12 14.5 L 10.5 16 L 12 17.5 L 13.5 16 Z"
			fill={color ? color : 'currentColor'}
		/>
	</svg>
)

export const Edit = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
		<path d="M 8.5 1 L 11 3.5 L 4.5 10 L 2 10 L 2 7.5 Z" fill="transparent" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
	</svg>
);

export const Lock = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
		<path d="M 10 7 C 10 7 10 9.758 10 10.2 C 10 10.642 9.552 11 9 11 C 8.448 11 3.552 11 3 11 C 2.448 11 2 10.642 2 10.2 C 2 9.979 2 7 2 7 Z" fill="currentColor" strokeWidth="2" stroke="currentColor"></path>
		<path d="M 2 8 C 2 8 2 7.209 2 5 C 2 2.791 3.791 1 6 1 C 8.209 1 10 2.791 10 5 C 10 7.209 10 8 10 8" fill="transparent" strokeWidth="2" stroke="currentColor"></path>
	</svg>
);

export const Unlock = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
		<path d="M 10 7 C 10 7 10 9.758 10 10.2 C 10 10.642 9.552 11 9 11 C 8.448 11 3.552 11 3 11 C 2.448 11 2 10.642 2 10.2 C 2 9.979 2 7 2 7 Z" fill="currentColor" strokeWidth="2" stroke="currentColor"></path>
		<path d="M 2 9 C 2 9 2 7.209 2 5 C 2 2.791 3.791 1 6 1 C 7.105 1 8.105 1.448 8.828 2.172" fill="transparent" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
	</svg>
)

export const Zoom = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
		<path
			d="M 1 5.5 C 1 3.015 3.015 1 5.5 1 C 7.985 1 10 3.015 10 5.5 C 10 7.985 7.985 10 5.5 10 C 3.015 10 1 7.985 1 5.5 Z M 10.5 11 L 8.5 9"
			fill="transparent"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const EyeSm = ({ color }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
		<path d="M 6 8 C 6 6.895 6.895 6 8 6 C 9.105 6 10 6.895 10 8 C 10 9.105 9.105 10 8 10 C 6.895 10 6 9.105 6 8 Z M 1 8.091 C 1 8.091 3.545 3 8 3 C 12.455 3 15 8.091 15 8.091 C 15 8.091 12.455 13.182 8 13.182 C 3.545 13.182 1 8.091 1 8.091 Z"
			fill="transparent"
			stroke={color ? color : 'currentColor'}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.5"
		/>
	</svg>
)

export const EyeOffSm = ({ color }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
		<path d="M 11.78 11.78 C 10.692 12.609 9.368 13.069 8 13.091 C 3.545 13.091 1 8 1 8 C 1.792 6.525 2.889 5.236 4.22 4.22 M 6.664 3.062 C 7.102 2.959 7.55 2.908 8 2.909 C 12.455 2.909 15 8 15 8 C 14.614 8.723 14.153 9.403 13.625 10.03 M 1 1 L 15 15"
			fill="transparent"
			strokeWidth="1.5"
			stroke={color ? color : 'currentColor'}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

/*
---------------------------------------------------------------
Medium Icons
--------------------------------------------------------------- */

export const Eye = ({ color }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
		<path d="M 1 12 C 1 12 5 4 12 4 C 19 4 23 12 23 12 C 23 12 19 20 12 20 C 5 20 1 12 1 12 Z" fill="transparent" strokeWidth="2" stroke={color ? color : 'currentColor'} strokeLinecap="round" strokeLinejoin="round"></path>
		<path d="M 9 12 C 9 10.343 10.343 9 12 9 C 13.657 9 15 10.343 15 12 C 15 13.657 13.657 15 12 15 C 10.343 15 9 13.657 9 12 Z" fill="transparent" strokeWidth="2" stroke={color ? color : 'currentColor'} strokeLinecap="round" strokeLinejoin="round"></path>
	</svg>
)

export const EyeOff = ({ color }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
		<path d="M 17.94 17.94 C 16.231 19.243 14.149 19.965 12 20 C 5 20 1 12 1 12 C 2.244 9.682 3.969 7.657 6.06 6.06 M 9.9 4.24 C 10.588 4.079 11.293 3.998 12 4 C 19 4 23 12 23 12 C 22.393 13.136 21.669 14.205 20.84 15.19 M 14.12 14.12 C 13.372 14.923 12.246 15.253 11.183 14.982 C 10.12 14.71 9.29 13.88 9.018 12.817 C 8.747 11.754 9.077 10.628 9.88 9.88 M 1 1 L 23 23"
			fill="transparent"
			stroke={color ? color : 'currentColor'}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		></path>
	</svg>
)

export const LinkOffIcon = ({ color }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
		<path
			d="M 8 0 L 8 9.899 M 5 7.95 C 5 7.95 4.657 7.95 3 7.95 C 1.343 7.95 0 6.607 0 4.95 C 0 3.293 1.343 1.95 3 1.95 C 4.657 1.95 5 1.95 5 1.95 M 11 1.95 C 11 1.95 11.343 1.95 13 1.95 C 14.657 1.95 16 3.293 16 4.95 C 16 6.607 14.657 7.95 13 7.95 C 11.343 7.95 11 7.95 11 7.95"
			fill="transparent"
			stroke={color ? color : 'currentColor'}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			transform="translate(-0 3.05) rotate(45 8 4.95)"
		/>
	</svg>
)

export const ZoomIcon = ({ color }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
		<path
			d="M 1 7 C 1 3.686 3.686 1 7 1 C 10.314 1 13 3.686 13 7 C 13 10.314 10.314 13 7 13 C 3.686 13 1 10.314 1 7 Z M 14 14.5 L 11.5 12"
			fill="transparent"
			strokeWidth="2"
			stroke={color ? color : 'currentColor'}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

export const CircleCheck = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
		<path d="M 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 Z" fill="#5CB70B"></path>
		<path d="M 9 1 C 13.418 1 17 4.582 17 9 C 17 13.418 13.418 17 9 17 C 4.582 17 1 13.418 1 9 C 1 4.582 4.582 1 9 1 Z" fill="rgba(202, 255, 132, 1.00)"></path>
		<path d="M 0 7.071 L 4.243 7.071 L 4.243 0" transform="translate(6.879 4.464) rotate(45 2.121 3.536)" fill="transparent" strokeWidth="2" stroke="#399709" strokeLinecap="round" strokeLinejoin="round"></path>
	</svg>
)
