import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'

const ViewQuotes = () => {
    const [quotesData, setData] = useState(
        []
    )

    const [isLoading, setIsLoading] = useState(true)

    const getData = () => {
        axios.get("https://dummyjson.com/quotes").then(
            (Response) => {
                setData(Response.data.quotes)
                setIsLoading(false)
            }
        )
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View Quotes</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Quote</th>
                                            <th scope="col">Author</th>
                                        </tr>
                                    </thead>
                                    {isLoading ? <div class="spinner-border text-success" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div> : <tbody>
                                        {quotesData.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.id}</th>
                                                    <td>{value.quote}</td>
                                                    <td>{value.author}</td>
                                                </tr>
                                            }
                                        )}

                                    </tbody>}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewQuotes