import React from 'react'
import { Link } from 'gatsby'

const Pagination = () => (
	<section>
		<div className="pagination">
			<ul className="pagination__container">
				<li>
					<Link to="/" activeClassName="active_link">
						Web
					</Link>
				</li>
				<li>
					<Link to="/graphic" activeClassName="active_link">
						Graphic
					</Link>
				</li>
			</ul>
		</div>
	</section>
)

export default Pagination
