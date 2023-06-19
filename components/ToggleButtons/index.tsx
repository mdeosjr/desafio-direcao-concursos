import styles from "./toggleButtons.module.css";
import classNames from "classnames";

export default function ToggleButtons({
	onChange,
	options,
  value
}: {
	onChange: (option: string) => void;
	options: string[];
  value: string;
}) {

	return (
		<div className={styles.Container}>
			{options.map((option, index) => (
				<button
					key={index}
					className={classNames(styles.Option, {
						[styles.active]: option === value
					})}
					onClick={() => {
						onChange(option);
					}}
				>
					{option}
				</button>
			))}
		</div>
	);
}
