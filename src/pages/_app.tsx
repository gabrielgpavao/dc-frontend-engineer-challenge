import { UserProvider } from '@/contexts/UserContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Circular from 'next/font/local'

const circular = Circular({
	src: [
		{
			path: '../assets/fonts/circular/CircularStd-Light.otf',
			weight: '300',
			style: 'normal'
		},
		{
			path: '../assets/fonts/circular/CircularStd-Book.woff2',
			weight: '450',
			style: 'normal'
		},
		{
			path: '../assets/fonts/circular/CircularStd-Medium.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../assets/fonts/circular/CircularStd-Bold.woff2',
			weight: '700',
			style: 'normal'
		},
		{
			path: '../assets/fonts/circular/CircularStd-Black.woff2',
			weight: '800',
			style: 'normal'
		}
	],
	variable: '--font-circular'
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<div className={circular.className}>
				<Component {...pageProps} />
			</div>
		</UserProvider>
	)
}
