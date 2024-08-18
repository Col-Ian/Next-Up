import { useEffect, useRef, useState } from 'react';

export function useDismissHandler(initialValue: boolean) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(initialValue);

	function handleClickOutside(e: any) {
		if (ref.current && !ref.current.contains(e.target)) setVisible(false);
	}

	function handleKeyPress(e: KeyboardEvent) {
		if (e.key === 'Escape') setVisible(false);
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		document.addEventListener('keydown', handleKeyPress, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
			document.removeEventListener('keydown', handleKeyPress, true);
		};
	}, [ref]);

	return { visible, setVisible, ref };
}
