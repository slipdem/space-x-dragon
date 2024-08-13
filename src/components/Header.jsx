import { Button } from '@/components/ui/Button';

export const Header = () => {
	return (
		<header>
			<span>logo</span>
			<nav>
				<a href='/'>Home</a>
				<a href='/'>About</a>
				<a href='/'>QA</a>
				<a href='/'>Contact form</a>
			</nav>
			<div>
				<Button />
			</div>
		</header>
	);
};
