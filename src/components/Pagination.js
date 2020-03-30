import React from 'react'
import { Link } from 'gatsby'

const Pagination = () => (
	<section>
		<div className="pagination">
			<ul className="pagination__container">
				<li>
					<Link to="/" activeStyle={{color: '#33cf33'}}>
						Web
					</Link>
				</li>
				<li>
					<Link to="/graphic" activeStyle={{color: '#33cf33'}}>
						Graphic
					</Link>
				</li>
			</ul>
		</div>
	</section>
)

export default Pagination
