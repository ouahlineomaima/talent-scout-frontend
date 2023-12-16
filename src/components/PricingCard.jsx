import React from 'react';

export default function PricingCard({ pack, includedFeatures, excludedFeatures, center }) {

    return (
        <div className={`w-64 p-4 bg-white ${center ? " border border-white" : ""} shadow-lg rounded-2xl dark:bg-darkBg`}>
            <div className="flex items-center justify-between text-darkBg dark:text-white">
                <p className="mb-4 text-4xl font-medium capitalize">
                    {pack.name}
                </p>
                <p className="flex flex-col text-3xl font-bold">
                    {pack.price}
                    <span className="text-sm font-thin text-right">
                        month
                    </span>
                </p>
            </div>
            <p className="mt-4 text-darkBg text-md dark:text-white">
                Plan includes:
            </p>
            <ul className="w-full mt-6 mb-6 text-sm text-darkBg dark:text-white">
                {includedFeatures.map((feature) => (
                    <li className="mb-3 flex items-center" key={feature}>
                        <svg className="w-6 h-6 mr-2 fill-darkBg dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" viewBox="0 0 1792 1792">
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                        </svg>
                        {feature}
                    </li>
                ))}
                {excludedFeatures.map((feature) => (
                    <li className="mb-3 flex items-center opacity-50" key={feature}>
                        <svg className="w-6 h-6 mr-2 fill-darkBg dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 1792 1792">
                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
            <button type="button" className="w-full px-3 py-3 text-sm text-darkBg dark:text-white bg-white dark:bg-darkBg rounded-lg shadow hover:bg-gray-100">
                Choose Plan
            </button>
        </div>
    );
}
