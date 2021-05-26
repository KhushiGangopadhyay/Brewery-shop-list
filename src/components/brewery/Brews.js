import React from 'react'
import Brew from './Brew'

const Brews = ({ items, isLoading }) => {
  return isLoading ? (<div class="spinner-border text-muted"></div>) : (
  	<section className="cards">
  	{items.map(item=>(
  			<Brew key={item.id} item={item}> </Brew>
  		))}
  	</section>
  	)
}

export default Brews