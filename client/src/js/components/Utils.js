import React from 'react';  
import { BellIcon } from '@heroicons/react/24/outline';

export function Notifications({ length }) {
    return (
        <div>
            {(length > 0)
                ? (<div className="relative inline-block>">
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                    {/*badge*/}
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center 
              px-1.5 py-0.75 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{length}</span>
                </div>)
                : <BellIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />}
        </div>
    );
}