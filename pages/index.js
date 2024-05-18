import React, { useState } from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {

  const [selectedTab, setSelectedTab] = useState("US");

  const handleClick = (clickedTab) => {
    setSelectedTab(clickedTab);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div className="pb-10">Company Financials Cheat Sheets For Newbies In Investing 🐣</div>
      <div role="tablist" className="tabs tabs-boxed">
        <a role="tab" className={`tab ${selectedTab === 'US' ? 'tab-active' : ''}`} onClick={() => handleClick("US")}>🇺🇸 US Company Financials Cheat Sheets</a>
        <a role="tab" className={`tab ${selectedTab === 'TR' ? 'tab-active' : ''}`} onClick={() => handleClick("TR")}>🇹🇷 TR Company Financials Cheat Sheets</a>
      </div>
      {selectedTab === "US" &&
        <div className="overflow-x-auto pt-5">
          <div role="tablist" className="tabs tabs-bordered pb-5">
            <a role="tab" className="tab">Income Statement</a>
            <a role="tab" className="tab tab-active">Balance Sheet</a>
            <a role="tab" className="tab">Cash Flow</a>
          </div>
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>ENES KÖKSALMIL</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>4</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      }

      {selectedTab === "TR" &&
        <div className="overflow-x-auto">
          <div>🇹🇷</div>
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>4</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      }
    </main>
  );
}
