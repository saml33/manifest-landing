import Wrapper from "../shared/ComponentWrapper/Wrapper"

const FeaturesNew = () => {
    return (
        <div className="py-12 md:py-20 border-b border-brown">
        <Wrapper>
            <h2 className="text-center mb-6">Features</h2>
        <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-4">
                <h3 className="mb-2">Zero fees</h3>
                <p>No trading fees, forever. Zero maker & taker fees marks the beginning of the end for value extracting crypto exchanges.</p>
            </div>
            <div className="col-span-12 md:col-span-4">
                <h3 className="mb-2">Permissionless markets</h3>
                <p>Anyone can create markets for negligible cost, enabling infinite trading pairs. All you need is the token mint.</p>
            </div>
            <div className="col-span-12 md:col-span-4">
                <h3 className="mb-2">Endless customization</h3>
                <p>Next gen Solana program architecture that includes a core & wrapper to enable greater composability for traders and exchange interfaces.</p>
            </div>
            <div className="col-span-12 md:col-span-4">
                <h3 className="mb-2">Capital efficient</h3>
                <p>A novel global order type unlocks unparalleled capital efficiency. Add multiple bids or offers simultaneously utilizing the same funds. No more locked tokens in open order accounts.</p>
            </div>
            <div className="col-span-12 md:col-span-4">
                <h3 className="mb-2">Optimized compute</h3>
                <p>Innovative design that utilizes expandable accounts to save on rent. The stripped down, pay as you go program benchmarks as the top orderbook protocol in existence.</p>
            </div>
            <div className="col-span-12 md:col-span-4">
                <h3 className="mb-2">Verified immutability</h3>
                <p>The only immutable formally verified on-chain orderbook. Targeting formal verification from a Certora audit to permit the program to become confidently immutable.</p>
            </div>
        </div>
        </Wrapper>
        </div>
    )
}

export default FeaturesNew