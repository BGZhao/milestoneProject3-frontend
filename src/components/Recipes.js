// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';

// const Recipes = () => {
//     return (
//         <Container>
//             <Card border="info" >
//                 <Card.Header className="blockquote mb-0 card-body">Recipes</Card.Header>
//                 <Card.Body>
//                     <Card.Text>
//                     This is where we are going to keep our recipes
//                     </Card.Text>
//                 </Card.Body>
//             </Card>
//         </Container>
//     )
// }

// export default Recipes

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import Search from "./Search";

function Recipes() {

	// const {  } = useParams()

	const [recipes, setRecipes] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/api/recipes`,{

                headers: {
                    'x-auth-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                    
                },
            })
			const resData = await response.json()
			setRecipes(resData)
		}
		fetchData()
	}, [])
    console.log(recipes)

	if (recipes === null) {
		return <h1>Loading</h1>
	}


	return (
		<main>
		
			<Search />
		
        <div className="row">
				<div className="col-sm-6">
					<h2>{recipes[0].recipename}</h2>
					<img style={{ maxWidth: 200 }} src={recipes[0].image} alt={recipes[0].recipename} />
                    <h3>{recipes[0].cuisines}</h3><br/>
                    <h3>{recipes[0].description}</h3>
					
				</div>
                </div>
    
		</main>
	)
}

export default Recipes