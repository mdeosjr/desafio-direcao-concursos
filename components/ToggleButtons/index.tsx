import { MouseEvent } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function ToggleButtons({
	term,
	setTerm,
}: {
	term: string | null;
	setTerm: (term: string) => void;
}) {
	const searchTerms = ["Populares", "Cinema", "Comida", "Animais", "Música"];
	const handleTerm = (
		event: MouseEvent<HTMLElement>,
		newTerm: string | null
	) => {
		if (newTerm !== null) {
			setTerm(newTerm);
		}
	};

	const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
		"&.MuiToggleButtonGroup-root": {
			overflowX: "hidden",
		},
		"& .MuiToggleButtonGroup-grouped": {
			marginRight: "14px",
			padding: "6px 8px",
			marginBottom: "1em",
			border: 0,
			"&:not(:first-of-type), &:first-of-type": {
				borderRadius: "8px",
			},
			textTransform: "none",
			font: "500 14px Montserrat",
		},
	});

	const StyleToggleButton = styled(ToggleButton)({
		"&.MuiToggleButton-root": {
			color: "white",
			backgroundColor: "gray",
		},
		"&.Mui-selected, &:hover": {
			color: "black",
			backgroundColor: "white",
		},
	});

	return (
		<StyledToggleButtonGroup
			value={term}
			exclusive
			onChange={handleTerm}
			aria-label="toggle button group"
		>
			{searchTerms?.map((term: string) => (
				<StyleToggleButton value={term} key={term} aria-label={term}>
					{term}
				</StyleToggleButton>
			))}
		</StyledToggleButtonGroup>
	);
}
