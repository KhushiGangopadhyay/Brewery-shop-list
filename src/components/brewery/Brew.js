import React from 'react'

const Brew = ({ item }) => {
	return (
		<div class="card">
  		<br/>
   		<h4><b>{item.name}</b></h4>
   		<hr/>
    	<p>State: {item.state}
    	<br/>
    	pin code: {item.postal_code}
    	</p>

  		</div>
		
	)

}
export default Brew