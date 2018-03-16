import React, { Component } from 'react';
import BountyResultItem from './BountyResultItem/BountyResultItem'

export default class BountyResults extends Component {
  constructor(props) {
    super(props);
	}
  componentDidMount() {
    var cmp = this;
    
    // Util.post("/api/getallbounty", null, {
    //   success: function(result) {
    //     cmp.setState({
    //       bountyResultItems: result
    //     });
    //   },
    //   complete: function(){
    //     //setloading false
    //   }
    // });
	}
  render() {
    return (
      <div className="bounty-results">
        {this.props.bounty.map((item, i) => <BountyResultItem key={item._id} item={item} />)}
      </div>
    );
  }
}