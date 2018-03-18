import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BountyTypeIcon from '../../BountyTypeIcon/BountyTypeIcon';

export default class BountyResultItem extends Component {
	constructor(props) {
        super(props);
    }
    renderTypes(){
        return this.props.item.types.map((typeId) => {
            return (<BountyTypeIcon key={typeId} type={typeId} />);
        });
    }
	render() {
        let now = new Date();
        let dateCreated = new Date(this.props.item.created);

        let newLabel = false
            ? (<div className="bounty-mini-label">
                    NEW               
                </div>)
            : null;

        const photoStyle = { backgroundImage: 'url(/img/bounty/' + this.props.item.thumbnail + ')'};

        return(
            <div className="bounty-item">
                <div className="bounty-item-inner">
                    <Link to={{ pathname: '/bounty', search: '?id=' + this.props.item.bountyId }}>
                        <div className="bounty-item-photo" style={photoStyle}>
                            <div className="bounty-org-name bounty-photo-label">
                                {this.props.item.organisation.name}
                            </div>
                            <div className="bounty-type-icon-container">
                                {this.renderTypes()}
                            </div>
                        </div>
                    </Link>
                    <div className="bounty-item-label">
                        <h1>
                            {this.props.item.title} {newLabel}
                        </h1>
                        <div className="bounty-item-label-left">
                            0km
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}