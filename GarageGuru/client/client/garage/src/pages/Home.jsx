import React from 'react'

function Home() {
  return (
    <>
        <h2 className='text-center text-warning'>Today's Chart</h2>
        <table className='table table-dark table-bordered shadow mt-5'>
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Phone Number</th>
                    <th>Vehicle Number</th>
                    <th>Services</th>
                    <th>Notes</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Arjun MV</td>
                    <td>9947354942</td>
                    <td>KL 11 AG 1234</td>
                    <td>Oil Change</td>
                    <td>Use Premium</td>
                    <td>1000</td>
                    <td>Pending...<i className="fa-solid fa-clock" /></td>
                    <td></td>
                </tr>
            </tbody>

             
        </table>
    </>
  )
}

export default Home