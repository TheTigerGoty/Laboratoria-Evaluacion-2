import React from 'react'
import { Card } from './Card'


export const Cards = () => {

    const Icon1 =
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-meat" width="186" height="186" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13.62 8.382l1.966 -1.967a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-1.82 1.821" />
            <path d="M5.904 18.596c2.733 2.734 5.9 4 7.07 2.829c1.172 -1.172 -.094 -4.338 -2.828 -7.071c-2.733 -2.734 -5.9 -4 -7.07 -2.829c-1.172 1.172 .094 4.338 2.828 7.071z" />
            <path d="M7.5 16l1 1" />
            <path d="M12.975 21.425c3.905 -3.906 4.855 -9.288 2.121 -12.021c-2.733 -2.734 -8.115 -1.784 -12.02 2.121" />
        </svg>

    const Icon2 =
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bath" width="186" height="186" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z" />
            <path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" />
            <path d="M4 21l1 -1.5" />
            <path d="M20 21l-1 -1.5" />
        </svg>

    const Icon3 =
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="186" height="186" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
        </svg>

    const title1 = "Alimenta el amor con delicias gourmet"
    const title2 = "Mantén a tu gato fresco y limpio con productos de calidad"
    const title3 = "Juguetes divertidos y camas acogedoras para mimar a tu gato"

    return (
        <div className='flex space-x-[127px] mt-[192px] justify-center'>
            <Card icon={Icon1} title={title1} />
            <Card icon={Icon2} title={title2} />
            <Card icon={Icon3} title={title3} />
        </div>
    )
}
