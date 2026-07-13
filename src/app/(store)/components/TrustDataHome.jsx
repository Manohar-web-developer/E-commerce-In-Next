import Qulity from '../../assest/Icons/quality.svg'
import Deliverd from '../../assest/Icons/delivered.webp'
import FirstPlace from '../../assest/Icons/first-place_ce8f0f4b-78c3-4055-80a0-e1dbd38e8323.svg'
import Stop from '../../assest/Icons/stop-button.webp'
import Product from '../../assest/Icons/product-image.webp'
import shipping from '../../assest/Icons/free-shipping_1.webp'
import Image from 'next/image'


function TrustDataHome() {
    const data = [
        {
            Imeges: Qulity,
            Title: "30+ Years of Export Legacy"
        },
        {
            Imeges: Deliverd,
            Title: "1 Lakh+ Orders Delivered Pan India"
        },
        {
            Imeges: FirstPlace,
            Title: "India's First Brand with 100% Ready-to-Ship Inventory"
        },
        {
            Imeges: Stop,
            Title: "One-Stop Home Solution - Every Category, One Place"
        },
        {
            Imeges: Product,
            Title: "Real Product Images - Every Product, No Filters"
        }, {
            Imeges: shipping,
            Title: "Free Delivery Pan India"
        }
    ]
    return (
        <>
            <div className='bg-[#3C1D04] w-full'>
                <div className='w-[90%] md:h-[200px] mx-auto py-7 grid grid-cols-2 md:grid-cols-6 gap-5'>

                    {
                        data.map((v, i) => {
                            return (
                                <div key={i} className='w-full h-full flex flex-col justify-center items-center gap-5'>
                                    <Image src={v.Imeges} alt={v.Title} width={34}  />
                                    <p className='text-center text-[12px] text-white'>{v.Title}</p>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default TrustDataHome