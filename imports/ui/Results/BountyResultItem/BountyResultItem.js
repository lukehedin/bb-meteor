import React, { Component } from 'react';

export default class BountyResultItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="bounty-item">
				<div className="bounty-item-inner">
					<img className="bounty-item-photo" src={"/img/bounty/" + this.props.item.thumbnail} />
					<div>
						{this.props.item.title}
					</div>
					<div>
						0km
					</div>
				</div>
			</div>
		);
	}
}