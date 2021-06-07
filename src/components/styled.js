import styled from 'styled-components';

// Blue
const blue050 = '#E6F6FF';
const blue100 = '#BAE3FF';
const blue200 = '#7CC4FA';
const blue300 = '#47A3F3';
const blue400 = '#2186EB';
const blue500 = '#0967D2';
const blue600 = '#0552B5';
const blue700 = '#03449E';
const blue800 = '#01337D';
const blue900 = '#002159';

// Red
const red050 = '#FFE3E3';
const red100 = '#FFBDBD';
const red200 = '#FF9B9B';
const red300 = '#F86A6A';
const red400 = '#EF4E4E';
const red500 = '#E12D39';
const red600 = '#CF1124';
const red700 = '#AB091E';
const red800 = '#8A041A';
const red900 = '#610316';

// Yellow
const yellow050 = '#FFFBEA';
const yellow100 = '#FFF3C4';
const yellow200 = '#FCE588';
const yellow300 = '#FADB5F';
const yellow400 = '#F7C948';
const yellow500 = '#F0B429';
const yellow600 = '#DE911D';
const yellow700 = '#CB6E17';
const yellow800 = '#B44D12';
const yellow900 = '#8D2B0B';

export const StyledThumbnailButton = styled.button`
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: transparent;
	border: none;
	border-radius: 999em;
	color: #121921;
	font-size: 12px;
	font-weight: 700;
	line-height: 1.5;
	padding: 2px 12px;
	margin: 1px auto;
	outline: none;
	transition: background-color 0.2s;

	&:hover,
	&:focus,
	&:active {
		color: white;
	}

	&:hover {
		background-color: ${blue500};
	}

	&:focus {
		background-color: ${blue600};
	}

	&:active {
		background-color: ${blue700};
	}

	&:disabled:hover {
		background-color: transparent;
		color: #121921;
	}

	svg {
		color: #999999;
		margin-right: 8px;
		margin-left: -4px;
	}

	&:active svg,
	&:focus svg,
	&:hover svg {
		color: ${blue200};
	}

	&:disabled:hover svg {
		color: #999999;
	}
`
