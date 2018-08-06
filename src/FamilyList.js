import React, { Component } from 'react';

class FamilyList extends Component {
  depthSearch = (rootNode, depth) => depth 
    ? ({
      ...rootNode,
      children: rootNode.children.map(childId =>
        this.depthSearch(this.props.members[childId], depth - 1))
    })
    : rootNode

//<span /> renders descendants of this.props.members[5]
  renderNode = (node) => (
    <div>
    <h1>--{node.name}--</h1>
    <p>Descendants</p>
    <span> {node.children.map(this.renderNode)} </span>
    </div>
  )


  render() {
    const { members } = this.props;
    return (
      <div className="Family">
        <p className="Fam-intro">
          {this.renderNode(
            this.depthSearch(members[5], 1)
          )}
        </p>
      </div>
    );
  }
}

export default FamilyList;
