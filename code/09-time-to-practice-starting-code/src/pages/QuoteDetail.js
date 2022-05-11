import {Fragment} from 'react';
import { Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments'
const QuoteDetail = () => {

    const params = useParams();
    console.log(params.quoteId)

    return (
        <Fragment>
            
            <h1> Page</h1>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />

            </Route>

        </Fragment>
       
    )
}; 

export default QuoteDetail;