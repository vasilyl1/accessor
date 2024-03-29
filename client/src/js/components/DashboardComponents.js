import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BellIcon } from '@heroicons/react/24/outline';
import { Overlay } from '../utils/Overlay';
import { 
    addMessageAssistant, 
    addMessageUser, 
    clearConversation,
    updateError 
} from '../utils/Actions';

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

export function Dialog() {

    //const { state, dispatch } = useAccessorState(); // access global state and dispatch function
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    // this state is used to save validated json data to be sent to the backend
    const [api, setApi] = useState(null);
    const [apiResponse, setApiResponse] = useState('Ask anything typing in the prompt and click "Request" button.');

    // this hook will run every time the api state is updated. api state contains validated form data
    useEffect(() => {
        const abc = async () => {
            if (api) { // call backend only if there is data in the state
                try {
                    setApiResponse('getting response...');
                    const res = await fetch('/api/openai/chat', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(api),
                    });
                    const response = await res.json();
                    dispatch(addMessageAssistant(response.response));
                    setApiResponse(response.response);
                } catch (err) { // if the server returning error for whatever reason inform the user
                    dispatch(updateError('ERROR','AI response error. Check if you are logged in and if the internet is up.'));
                }
                setApi(null);
            }
        };
        abc();
    }, [api]);

    const handleClick = (e) => {

        const promptData = document.getElementById('prompt');
        setApi({
            ...state.conversation,
            messages: [
                ...state.conversation.messages,
                { "role": "user", "content": promptData.value }
            ]
        }); // initiate the api call with the existing conversation
        dispatch(addMessageUser(promptData.value)); // add user prompt to state
        promptData.value = '';

    };

    const handleClearClick = (e) => {

        dispatch( clearConversation() );
        dispatch( updateError('NOTICE', 'Conversation history cleared') );

    };

    return (

        <form>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">

                    {state.error.message && <Overlay />}

                    <div className="px-4 py-6 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-1">Response</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {apiResponse}
                        </dd>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                            Prompt
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="prompt"
                                name="prompt"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">Input your prompt and click 'Request' to get AI model response.</p>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6 pr-4">
                        <button 
                            type="button"
                            className="text-sm font-semibold leading-6 text-gray-900"
                            onClick={handleClearClick}
                        >
                            Clear
                        </button>
                        <button
                            type="button"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={handleClick}
                        >
                            Request
                        </button>
                    </div>


                </div>
            </div>
        </form>

    );
}