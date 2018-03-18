import React, { Component } from 'react';

export default class BountyTypeIcon extends Component {
    constructor(props) {
        super(props);
    }
    getIconSrc(){
        let prefix = 'img/marker_';
        switch(this.props.type){
            case 1:
                return prefix + 'sweets.svg';
            case 2:
                return prefix + 'food.svg';
            case 3:
                return prefix + 'activity.svg';
            case 4:
                return prefix + 'alcohol.svg';
            case 5:
                return prefix + 'voucher.svg'; 
            case 6:
                return prefix + 'drink.svg'; 
            default:
                return '';
        }
    }
    render() {
        return (
          <img className="bounty-type-icon" src={this.getIconSrc()} />
        );
    }
}