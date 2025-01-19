import Image from 'next/image';
import React from 'react';
interface props{
    name :string,
    logo:string
}
const partners:props[] = [
];

const OurPartner: React.FC = () => {
    return (
        <section
            className="relative py-24 sm:py-42 mb-5 "
            aria-labelledby="partners-heading"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2
                    id="partners-heading"
                    className="text-3xl font-extrabold text-white text-center"
                >
                    Our Collaborative Partners
                </h2>
                <p className="mt-4 text-white text-center">
                    We are proud to work with our trusted partners, building a better future together.
                </p>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center ">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center "
                            aria-label={`Partner: ${partner.name}`}
                        >
                            <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                height={80}
                                width={80}
                                className="rounded-lg shadow-md"
                            />
                            <p className="mt-2 text-sm  font-medium text-blue-400">{partner.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPartner;
