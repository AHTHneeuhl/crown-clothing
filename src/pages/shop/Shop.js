import { Component } from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import { shopData } from "./shop.data";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: shopData,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div>
        {collections.map(({ id, ...props }) => (
          <CollectionPreview key={id} {...props} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
