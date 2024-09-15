import React from 'react'
import SingleDeal from './child/single-deal'
import { dealsOfTheDayProducts } from '~/config/data'

type Props = {}

const DealsOfTheDay = (props: Props) => {
  return (
    <div className="mx-20 mb-32 mt-10 flex flex-col gap-8">
      <h2 className="text-2xl font-semibold">Deals Of The Day</h2>
      <div className='flex flex-row justify-center items-center gap-5'>
        {dealsOfTheDayProducts.map((item) => (
          <SingleDeal key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default DealsOfTheDay