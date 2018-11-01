import React from 'react'
import { Link } from 'gatsby'

const Pagination = () => (
	<section>
		<div className="pagination">
			<ul className="pagination__container">
				<li>
					<Link to="/">Web</Link>
				</li>
				<li>
					<Link to="/graphic">Graphic</Link>
				</li>
			</ul>
		</div>
	</section>
)

export default Pagination
