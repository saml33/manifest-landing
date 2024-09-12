import Wrapper from "../shared/ComponentWrapper/Wrapper"

const INTEGRATIONS = [
    {
        name: 'Fill City',
        description: 'The Ultimate Spot Exchange',
        link: 'https://fill.city',
        linkText: 'Trade Now',
        imagePath: '/assets/integrations/fill-city.png',
        isComingSoon: true
    },
    {
        name: 'Mango',
        description: 'Cross-Margin Trading, Borrow, Lend',
        link: 'https://app.mango.markets',
        linkText: 'Trade Now',
        imagePath: '/assets/integrations/mango.png',
        isComingSoon: true
    },
    {
        name: 'CKS Systems',
        description: 'Blockchain Native Liquidity Provider',
        link: 'https://cks.systems/',
        linkText: 'Find out more',
        imagePath: '/assets/integrations/cks.png',
        isComingSoon: false
    }
]

const Integrations = () => {
    return (
        <div className="py-12 md:py-20 border-b border-brown">
        <Wrapper>
            <h2 className="text-center mb-6">Integrations</h2>
        <div className="grid grid-cols-12 gap-6 md:gap-10">
            {INTEGRATIONS.map((p) => {
                return <div className="col-span-12 md:col-span-4">
                <div className={`border border-night mb-4 w-full h-56 bg-cover bg-no-repeat bg-center`} 
        style={{ backgroundImage: `url(${p.imagePath})` }} />
        <div className="mb-1 flex items-center">
        <h3 className="mr-2">{p.name}</h3>
        {p.isComingSoon ? <span className="border border-sienna rounded text-xs text-sienna leading-none p-1 font-semibold">SOON</span> : null}
        </div>
        <p className="mb-2">{p.description}</p>
        <a href={p.link} target="_blank" rel="noopener noreferrer">{p.linkText}</a>
            </div>})
            }
            </div>
            </Wrapper>
            </div>
    )
}

export default Integrations