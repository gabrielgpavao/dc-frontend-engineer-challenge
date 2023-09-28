import { RefObject, useEffect, useRef } from 'react'

export default function useCloseOnOutClick<T extends HTMLElement>(handler: VoidFunction): RefObject<T> {
	const ref = useRef<T>(null)

	useEffect(() => {
		function listener(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handler()
			}
		}

		document.addEventListener('mousedown', listener)

		return () => {
			document.removeEventListener('mousedown', listener)
		}
	})

	return ref
}
