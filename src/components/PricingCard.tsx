interface PricingCardProps {
    title: string;
    price: string;
    storage: string;
    users: string;
    sendUp: string;
}

const PricingCard = ({ title,price,storage,users,sendUp }: PricingCardProps) => {
    return (
        <div className="p-8 rounded-lg text-center text-neutral-dark-grayish-blue bg-neutral-white w-full max-w-[30rem]">
            <header>
                <p className="card-title">{title}</p>
                <h1 className="card-price my-4 text-5xl">{price}</h1>
            </header>
            <div className="card-features">
                <div className="py-4 border-b border-neutral-light-grayish-blue">{storage}</div>
                <div className="py-4 border-b border-neutral-light-grayish-blue">{users} users in total</div>
                <div className="py-4 mb-8">{sendUp}</div>
            </div>
            <button className="card-btn cursor-pointer py-4 w-full rounded-lg bg-gradient-to-r from-primary-start to-primary-end border-2 border-transparent text-neutral-white transition ease-[0.125s]">
                READ MORE
            </button>
        </div>
    )
}

export default PricingCard
