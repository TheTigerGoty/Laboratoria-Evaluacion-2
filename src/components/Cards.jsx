import { Card } from './Card'
import FirstIcon from "./../../assets/card/First Icon.webp"
import SecondIcon from "./../../assets/card/Second Icon.webp"
import Thirdcon from "./../../assets/card/Third Icon.webp"



export const Cards = () => {
    return (

        <>
            <div className='flex flex-col items-center space-y-8'>

                <h3 className='text-3xl font-bold text-gray-400'>Manage your entire community in a single system</h3>
                <p>Who is Nextcent suitable for?</p>

                <div className='flex'>
                    <Card title='Membership Organisations' icon={FirstIcon} />
                    <Card title='National Associations' icon={SecondIcon}/>
                    <Card title='Clubs and Groups' icon={Thirdcon}/>
                </div>
            </div>

        </>
    )
}
