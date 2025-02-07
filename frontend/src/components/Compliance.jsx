import { useState } from "react";
import Navbar from './Navbar';

const CompliancePage = () => {
    const [status, setStatus] = useState("Compliant"); // Can be 'Compliant', 'Pending', 'Non-Compliant'
    const regulations = [
        { region: "USA", rule: "Proper disposal of hazardous waste is mandatory." },
        { region: "EU", rule: "Recycling 70% of construction waste is required." },
        { region: "India", rule: "C&D waste must be segregated at the source." },
    ];
    const penalties = [
        { violation: "Illegal dumping", fine: "$5,000" },
        { violation: "Non-segregation of waste", fine: "$2,000" },
        { violation: "Failure to report waste disposal", fine: "$1,500" },
    ];

    return (
        
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Compliance Dashboard</h1>

            {/* Compliance Status */}
            <Card className="mb-6">
                <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {status === "Compliant" && <CheckCircle className="text-green-500" />}
                        {status === "Pending" && <Info className="text-yellow-500" />}
                        {status === "Non-Compliant" && <AlertTriangle className="text-red-500" />}
                        <h2 className="text-lg font-semibold">Compliance Status: {status}</h2>
                    </div>
                    <Button onClick={() => setStatus("Pending")} variant="outline">
                        Refresh Status
                    </Button>
                </CardContent>
            </Card>

            {/* Regulatory Guidelines */}
            <Card className="mb-6">
                <CardContent className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Regulatory Guidelines</h2>
                    <ul className="list-disc pl-5">
                        {regulations.map((rule, index) => (
                            <li key={index} className="mb-1">
                                <strong>{rule.region}:</strong> {rule.rule}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            {/* Fines & Penalties */}
            <Card className="mb-6">
                <CardContent className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Fines & Penalties</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-2">Violation</th>
                                <th className="border p-2">Fine</th>
                            </tr>
                        </thead>
                        <tbody>
                            {penalties.map((penalty, index) => (
                                <tr key={index} className="border">
                                    <td className="border p-2">{penalty.violation}</td>
                                    <td className="border p-2">{penalty.fine}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardContent>
            </Card>

            {/* Training & Resources */}
            <Card className="mb-6">
                <CardContent className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Training & Resources</h2>
                    <p className="mb-2">Access guides and certification programs to stay compliant.</p>
                    <Button variant="default">View Resources</Button>
                </CardContent>
            </Card>
            <footer className="bg-gray-800 text-white py-10">
                <div className="container mx-auto text-center">
                    <p>Contact us: info@cdwastemanagement.com</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <SocialLink href="#" label="Facebook" />
                        <SocialLink href="#" label="Twitter" />
                        <SocialLink href="#" label="LinkedIn" />
                    </div>
                </div>
            </footer>
        </div>

    );
};

export default CompliancePage;
