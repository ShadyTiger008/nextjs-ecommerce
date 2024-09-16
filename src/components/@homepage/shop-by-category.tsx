import React from 'react'
import FeaturedBanners from './child/featured-banners';

type Props = {}

const ShopByCategory = (props: Props) => {
  return (
    <section>
      <div>
        <h4>Featured Categories</h4>
        <FeaturedBanners/>
      </div>
    </section>
  );
}

export default ShopByCategory