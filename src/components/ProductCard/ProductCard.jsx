import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
  return (
    <div class="card">
			<img
				src={props.product.thumbnail}
				class="card-img-top img-fluid"
				alt="..."
			/>
			<div class="card-body">
				<h5 class="card-title">{props.product.title}</h5>
				<p class="card-text">{props.product.description}</p>
				{<Link to={"/product?id=" + props.product.id} className="btn btn-primary">
					Detail
				</Link>}
				<button class="btn btn-danger">Sil</button>
			</div>
		</div>
  )
}
export default ProductCard;