import React, { Component } from 'react';
import FamilyList from './FamilyList';

class Family extends Component {
  state = {
    familyMembers: {
      '6': { id: '6', name: 'Adam', children: [] },
      '5': { id: '5', name: 'Sara', children: [7, 8] },
      '7': { id: '7', name: 'Petra', children:[], favoriteColor: 'blue'},
      '8': { id: '8', name: 'Zara', children: [], favoriteColor: '', favoriteFood: 'meat'},
    },
  }

    renderFamilyMembers() {
      const { familyMembers } = this.state;
      return Object.keys(familyMembers).map(key => (
        <FamilyList key={key} members={familyMembers} />
      ))
    }

  render() {
    return (
      <div className="Family">
        <p className="Fam-intro">
          {this.renderFamilyMembers()}
        </p>
      </div>
    );
  }
}

export default Family;
