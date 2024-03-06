import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Pricing() {
    return (
        <div>
            <Navbar />
            <div className="text-center py-10">
                <h1 className="text-4xl font-bold">| Pricing</h1>
            </div>
            <h1 className="text-3xl font-bold text-center mb-8">View our pocket-friendly prices</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-8xl">
                <div className="dark:bg-gray-800 text-white rounded-lg p-6 hover:translate-y-[-15px] transition-transform ease-in-out">
                    <h2 className="text-xl font-bold mb-4">Park entrance fees</h2>
                    <ul className="list-disc list-inside">
                        <li>Citizen: Ksh 500</li>
                        <li>Resident: Ksh 1,000</li>
                        <li>Citizen-Resident-Child: Ksh 300</li>
                        <li>Non-Resident: $30</li>
                        <li>Non-Resident-Child: $10</li>
                    </ul>
                </div>
                <div className="hover:translate-y-[-15px] transition-transform ease-in-out dark:bg-gray-800 text-white rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Camping Fees</h2>
                    <ul className="list-disc list-inside">
                        <li>Adult: Ksh 1,000 per night</li>
                        <li>Child: Ksh 500 per night</li>
                        <li>Other - Firewood: Ksh 1,000 per night</li>
                    </ul>
                </div>
                <div className="hover:translate-y-[-15px] transition-transform ease-in-out dark:bg-gray-800 text-white rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Vehicle Fees</h2>
                    <ul className="list-disc list-inside">
                        <li>Ksh 500 per car</li>
                        <li>Ksh 300 per bike</li>
                    </ul>
                </div>
                <div className="hover:translate-y-[-15px] transition-transform ease-in-out dark:bg-gray-800 text-white rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Activities</h2>
                    <ul className="list-disc list-inside">
                        <li>Guiding: Depends on the number of the group and the activities interested in. </li>
                        <li>Overnight stay at a Maasai home: Ksh 1,000 per person. </li>
                        <li>Accommodation at a Maasai manyatta including supper, lunch, and breakfast: Ksh 4,500 per person & night. </li>
                    </ul>
                    <p className="text-sm mt-4">Guiding can be done for any / all of the following activities:</p>
                    <ul className="list-disc list-inside ml-8">
                        <li>Cave and baboon parliament visit</li>
                        <li>Hiking around and inside the crater</li>
                        <li>Going to natural steam vents</li>
                        <li>Experiencing and learn about the Maasai Culture, which includes:</li>
                        <ul className="list-disc list-inside ml-8">
                            <li>Traditional activities: Cow milking, Maasai Songs, Beadwork, and making of traditional fire.</li>
                            <li>Learn about Maasai marriages, lion killings, etc.</li>
                        </ul>
                    </ul>
                </div>
            </div><br /><br /><br />
            <Footer />
        </div>
    )
}

export default Pricing;
