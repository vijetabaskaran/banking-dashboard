import {Layers , CheckCircle , PiggyBank, Landmark} from "lucide-react";
export default function OverviewCards({products}){
    const cards=[
    { label: "Total Products", value: products.length, icon: Layers },
    { label: "Active Products", value: products.filter((p) => p.status === "Active").length, icon: CheckCircle },
    { label: "Total Savings", value: "₹2,45,000", icon: PiggyBank },
    { label: "Outstanding Loans", value: "₹3,20,000", icon: Landmark },
    ];

    return (
        <section className = "overview">
            {cards.map(({label , value, icon:Icon})=>(
                <div className="stat" key={label}>
                    <div className = "stat-icon"><Icon size={20} /></div>
                    <div>
                        <small>{label}</small>
                        <h3>{value}</h3>
                        </div>
                        </div>

            ))}
            </section>

    );
}