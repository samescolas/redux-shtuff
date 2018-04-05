import React, { Component } from 'react';
import styled from 'styled-components';

class OrderDetailForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			delta: 1
		};
	}

	render() {
		const QuestionContainer = styled.div`
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		`;
		const FormContainer = styled.div`
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			width: 80%;
			margin-left: 10%;
			height: 60%;
		`;
		const Question = styled.h4`
			text-align: center;
			font-size: 3vmin;
			font-family: 'Oswald', sans-serif;
			height: 10%;
		`;
		const QuantityButton = styled.button`
			width: 13vmin;
			height: 8vmin;
			border-radius: 12%;
			font-size: 4vmin;
		`;
		const Quantity = styled.p`
			font-size: 3vmin;
			padding-left: 1vmin;
			padding-right: 1vmin;
		`;
		const SubmitButton = styled.button`
			height: 40%;
			width: 80%;
			margin-top: 5%;
			margin-left: 10%;
		`;
		const onPlusClick = (e) => {
			this.setState({ delta: this.state.delta + 1 });
			//props.addItem(props.item); 
		}
		const onMinusClick = (e) => {
			if (this.state.delta === 0) {
				return ;
			}
			this.setState({ delta: this.state.delta - 1 });
			//if (props.itemCount == 0)
				//return ;
			//props.removeItem(props.item);
		}
		const onSubmit = (e) => {
			e.preventDefault();
			if (this.state.delta > 0) {
				for (let i=0; i<this.state.delta; i++) {
					this.props.addItem(this.props.item);
				}
			} else if (this.state.delta < 0) {
				for (let i=0; i>this.state.delta; i--) {
					this.props.removeItem(this.props.item);
				}
			}
			this.props.closeDiv();
		};
		const formatCurrency = (c) => {
			return "$" + c.toFixed(2).toString();
		};
		return (
			<QuestionContainer>
				<Question>How many would you like to add to your order?</Question>
				<FormContainer>
					<QuantityButton onClick={onMinusClick}>-</QuantityButton>
					<Quantity>{this.state.delta}</Quantity>
					<QuantityButton onClick={onPlusClick}>+</QuantityButton>
				</FormContainer>
				<SubmitButton onClick={onSubmit}>Add to Order</SubmitButton>
			</QuestionContainer>
		)
	};
}

export default OrderDetailForm;
