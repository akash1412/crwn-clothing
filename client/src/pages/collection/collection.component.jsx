import React from "react";
import "./collection.styles.scss";
import { selectCategory } from "../../redux/shop/shop.selectors";

import { connect } from "react-redux";

import ColletionItem from "../../components/collection-item/collection-item.component";

const collectionPage = ({ match, collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <ColletionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCategory(ownProps.match.params.collection)(state)
});

export default connect(mapStateToProps)(collectionPage);
