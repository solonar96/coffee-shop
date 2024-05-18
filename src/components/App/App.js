import '../../style/index.scss';

import AppHeader from '../AppHeader/AppHeader';

function App() {
	return (
		<section className="promo">
			<AppHeader />
			<h1 className="promo-header">Everything You Love About Coffee</h1>
			<div className="divider-white"></div>
			<p className="promo-descr">We makes every day full of energy and taste<br/>Want to try our beans?</p>
			<button className="promo-btn">More</button>
		</section>

	);
}

export default App;
