import './AppHeader.scss';

const AppHeader = () => {
	return (
		<ul className="app-header">
			<li className="app-header-item">
				<a href="#">Coffee house</a>
			</li>
			<li className="app-header-item">
				<a href="#">Our coffee</a>
			</li>
			<li className="app-header-item">
				<a href="#">For your pleasure</a>
			</li>
		</ul>
	);
}

export default AppHeader;