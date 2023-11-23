import { Component } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import  './App.css';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import theseo from './theseo.webp'
function App() {
  return (
    <div className="Main">
    <header className="header">
        <h1 className="logo">OUSBUZ</h1>
        <nav className="nav">
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            {/* Add more navigation links as needed */}
        </nav>
    </header>
    <section className="welcome-section">
        <h2>CEO of world’s largest cryptocurrency exchange pleads guilty to money laundering violations</h2>
        <p className="intro-text">
            <img src={theseo} alt='theseo' height={500} width={800}/>
            
Billionaire Changpeng Zhao and leading cryptocurrency exchange Binance pleaded guilty on Tuesday to federal charges in a watershed moment designed to bring order to the often-lawless crypto industry.

As part of a coordinated settlement across the federal government, Binance has agreed to pay more than $4 billion in fines and other penalties. Zhao, one of the most powerful figures in crypto, has agreed to step down as CEO from the exchange that he founded.

Binance, the world’s largest crypto exchange, admitted to engaging in anti-money laundering, unlicensed money transmitting and sanctions violations.

US officials described this as the biggest-ever corporate resolution that includes criminal charges for an executive.

Following a years-long investigation, authorities allege Binance allowed bad actors to freely transact on the platform, enabling everything from child sex abuse and narcotics to terrorist financing for ISIS, Al Qaeda and Hamas’s Al-Qassam Brigades.

Zhao, who has amassed a fortune estimated at more than $23 billion, pled guilty to failing to maintain an effective anti-money laundering program.

US authorities hope the guilty plea from Binance and its founder, on top of the recent conviction of FTX co-founder Sam Bankman-Fried, will send a clear message to bad actors across the crypto industry.

“Binance became the world’s largest cryptocurrency exchange in part because of the crimes it committed – now it is paying one of the largest corporate penalties in US history,” Attorney General Merrick Garland said in a statement.

Zhao faces a maximum of 10 years behind bars, though his ultimate sentence will likely be far lower. Federal guidelines likely place the high end of a possible sentence for Zhao around 18 months. Sentencing is ultimately decided by a judge.

According to the plea deal, Zhao agreed to prosecutors’ recommendation that he pay a fine of $50 million.

“Binance turned a blind eye to its legal obligations in the pursuit of profits,” Treasury Secretary Janet Yellen said in a statement. “Its willful failures allowed money to flow to terrorists, cybercriminals and child abusers through its platform.”

The Binance guilty plea is part of a coordinated settlement reached with a wide range of government agencies, including the Justice Department, Treasury’s Financial Crimes Enforcement Network (FinCEN), the Office of Foreign Asset Controls (OFAC) and the Commodity Futures Trading Commission.

Binance did not respond to requests for comment.

<h1>What Binance allegedly did wrong</h1>
Federal prosecutors unsealed court records on Tuesday alleging Binance, led by Zhao, processed transactions by customers who operated illicit mixing services and “laundered proceeds of darknet market transactions, hacks, ransomware and scams.” Prosecutors allege that Binance had lax anti-money laundering procedures.

This alleged misconduct paved the way for Binance to become king of the crypto exchanges, prosecutors allege.

“In part because of this scheme, and because Defendant prioritized growth, market share and profits over compliance with US law (Binance) became the largest cryptocurrency exchange in the world,” prosecutors said.

Prosecutors allege Binance, “knowingly failed” to register as a money service business, willfully violated the Bank Secrecy Act by failing to implement and maintain an effective anti-money laundering program and willfully caused violations of US economic sanctions.

The charges, filed in the US District Court for the Western District of Washington, accused Binance of a “deliberate and calculated effort to profit from the US market without implementing controls required by US laws.”

Prosecutors allege the misconduct started as early as August 2017, continued until at least October 2022 and included certain Binance officers, directors, employees and agents.

Proponents of digital currencies point out that the great majority of business done via crypto is lawful and legitimate, and a cottage industry of companies have emerged in the last five years that work with law enforcement to track digital transactions.

Binance’s legal woes follow the collapse of another crypto exchange, FTX, and the conviction of it founder Sam Bankman-Fried on fraud charges. Those are the most extreme examples of the greater scrutiny that law enforcement and regulators have brought in recent months to the largely unregulated crypto industry.

But ransomware gangs from Russia and money launderers from North Korea, for example, continue to see crypto as core to their business model, and have often used publicly available tools, or “mixing services,” to hide their ill-gotten gains.

The US Justice Department in August unsealed federal charges against the co-founders of one such service, Tornado Cash, accusing them of moving $1 billion in cryptocurrency for criminals. One of the Tornado Cash co-founders has pleaded not guilty to the charges while the other remains at large.

<h1>What is Binance?</h1>
Binance was founded in 2017 by Zhao, a Canadian national. US market regulators this year brought civil cases against Binance, which they accuse of running an illegal exchange for unregistered securities in the United States. The Securities and Exchange Commission in June sued Binance, saying the company ran an “extensive web of deception, conflicts of interest, lack of disclosure, and calculated evasion of the law.”

Binance has long argued that it isn’t subject to US laws because it doesn’t have a physical headquarters in America.

The SEC also alleged that Zhao and Binance commingled customer assets and even diverted some to an entity controlled by Zhao.

Zhao claims that the company’s headquarters are wherever he is at any point in time, “reflecting a deliberate approach to attempt to avoid regulation,” according to a complaint by the Commodity Futures Trading Commission. That agency accused Binance and Zhao of violating US derivatives trading laws in multiple ways, including allegedly secretly coaching “VIP” customers within the United States on how to evade compliance controls.

A spokesperson for Binance said in June that the company takes the SEC’s allegations seriously, but it believes the agency’s accusations are “unjustified.”

“We respectfully disagree with the SEC’s allegations that Binance operated as an unregistered securities exchange or illegally offered and sold securities,” the company said in a statement. “Because of our size and global name recognition, Binance has found itself an easy target caught in the middle of a US regulatory tug-of-war.”

This story has been updated with additional developments.


        </p>
       {/* <Home/>*/}
    </section>
    {/* Add more sections as needed, such as About Me, Skills, Project Previews, etc. */}
</div>
  );
}

export default App;
