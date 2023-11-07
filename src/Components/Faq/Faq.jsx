

const Faq = () => {
    return (
        <div className="pt-12 px-6 md:px-20">
         
        <p className="text-[#efae37] text-xl my-5 text-center flex justify-center items-center md:text-left">FAQ</p>
        <h2 className="font-bold text-[#111111] text-2xl sm:text-3xl md:text-4xl text-center my-10 lg:text-5xl">
        Frequenty asked questions
        </h2>
  <div
    className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
    <div className="mx-auto px-5">
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> How do I book a service on your platform?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Provide a step-by-step guide on how users can browse, select, and book services offered by providers.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> How do I become a service provider on your website?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Explain the process for service providers to create profiles, list their services, and manage bookings.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> What payment methods are accepted for booking services?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Detail the payment options available on your platform, including credit cards, PayPal, or any other payment gateways.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Is there a cancellation policy for bookings?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Outline your platform's cancellation policy, including any applicable fees and the process for canceling a booking.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> How are service providers vetted and reviewed?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Describe the measures in place to ensure the quality and safety of services and how users can leave reviews and ratings.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> What do I do if I encounter an issue with a service or booking?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Provide information on how users can contact your support team and address any concerns, issues, or disputes.
                    </p>
                </details>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Faq;