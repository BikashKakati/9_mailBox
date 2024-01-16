import React from 'react'
import Wrapper from '../../components/ui/Wrapper'

const Details = () => {
    return (
        <Wrapper>
            <div className="bg-white py-5 px-16">
                <p className="pb-8 text-2xl">Looking for an opportunity</p>
                <div className="font-semibold pb-6 flex justify-between">
                    <span>test@gam.com</span>
                    <span className="">12 sept</span>
                </div>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis consectetur aspernatur animi deleniti delectus debitis est sint nemo, nisi numquam voluptates neque ex perferendis sed? Deleniti asperiores ut vitae?</p>
            </div>
        </Wrapper>
    )
}

export default Details