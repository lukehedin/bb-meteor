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
    getNewLabel(){
        return (<div key="0" className="bounty-mini-label">
            new
        </div>);
    }
    getRatingLabel(){
        return (<div key="1" className="bounty-mini-label rating">
            4.3★
        </div>);
    }
	render() {
        let now = new Date();
        let dateCreated = new Date(this.props.item.created);



        const photoStyle = { backgroundImage: 'url(/img/bounty/' + this.props.item.thumbnail + ')'};

        return(
            <div className="bounty-item">
                <div className="bounty-item-inner">
                    <Link to={{ pathname: '/bounty', search: '?id=' + this.props.item.bountyId }}>
                        <div className="bounty-item-photo" style={photoStyle}>
                            <div className="bounty-org-name bounty-photo-label">
                                <b>{this.props.item.organisation.name}</b>
                                <div className="bounty-km">&lt;1km</div>
                            </div>
                            <div className="bounty-type-icon-container">
                                {this.renderTypes()}
                            </div>
                        </div>
                        <div className="bounty-item-label">
                            <h1>
                                {this.props.item.title}
                            </h1>
                            <div className="mini-labels-area">
                                {this.getNewLabel()} 
                                {this.getRatingLabel()} 
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
		);
	}
}