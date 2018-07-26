import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    renderDish(dish){
        if (dish != null){
            return(
                <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name} </CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
            );
        }else{
            return (<div></div>);
        }
    }

    renderComments(comments){
        if (comments != null){
            return(
                <div col-12 col-md-5 m-1>
                    <h4> Comments </h4>
                    <ul className="list-unstyled">
                            {
                                comments.map((comment)=>{
                                    return(
                                        <div className="container">
                                            <li className="row"><p>{comment.comment}</p></li>
                                            <li className="row">
                                                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                            </li>    
                                        </div>
                                    );
                                })
                            }
                    </ul>        
                </div>
            );
        }else{
            return (<div></div>);
        }
    }

    render(){

        if(this.props.dish == null){
            return(
                <div></div>
            );
        }else{
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1"> 
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1"> 
                            {this.renderComments(this.props.dish.comments)}
                        </div>    
                    </div> 
                </div>       
            );
        }
    };
}

export default DishDetail;