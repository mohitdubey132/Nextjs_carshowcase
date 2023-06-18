"use client";
import React ,{useState,Fragment} from 'react';
import { Combobox ,Transition } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types';
import Image from 'next/image';
import { manufacturers } from '@/constants';
const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
  const [query ,setQuery] = useState('')
  const filterManufacturers =
   query ===''? manufacturers :
   manufacturers.filter((item)=>(item.toLocaleLowerCase().replace(/\s+/g,'').includes(query.toLocaleLowerCase().replace(/\s+/g,''))));


  return (
    <div className='search-manufacturer'>
        <Combobox value={manufacturer} onChange={setManufacturer} >
            <div className='relative w-full'>
              <Combobox.Button className='absolute top-{14px}'>
                   <Image src='./car-logo.svg' alt='car-svg' width={20}
                   height={20} className='mt-4' />
              </Combobox.Button>
              <Combobox.Input className='search-manufacturer__input'
              placeholder='Volkswagan'
              displayValue={(manufacturer:string)=>manufacturer}
               onChange={(e)=>(setQuery(e.target.value))}
              />
             <Transition as={Fragment}
             leave='trasition easy-in duration-100'
             leaveFrom='opacity-100'
             leaveTo='opacity-0'
             afterLeave={()=>(setQuery(''))}>
              <Combobox.Options>
                {filterManufacturers.length === 0 &&
                query !==''?(<Combobox.Option
                value={query}
                className='search-manufacturer__option'>
                  create "{query}"
                </Combobox.Option>):(
                  filterManufacturers.map((item)=>(
                    <Combobox.Option value={item}
                    key={item}
                    className={({active})=>
                    `relative search-manufacturer_option 
                    ${active ?'bg-primary-blue text-white':'text-black' }`}
                    >
                    {item}</Combobox.Option>
                  ))
                )}
              </Combobox.Options>
             </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer