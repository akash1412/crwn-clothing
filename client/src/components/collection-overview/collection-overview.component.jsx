import React from "react";
import "./collection-overview.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview.component";

const collectionOverview = props => {
  const { collections } = props;

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return (
          <CollectionPreview
            key={id}
            title={otherCollectionProps.title}
            items={otherCollectionProps.items}
            {...otherCollectionProps}
            {...props}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(collectionOverview);
