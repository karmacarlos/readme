import React, { useState, useEffect, useContext } from "react"
import { QueryContext } from "../../context/QueryContext"
import RecommendationCard from "../RecommendationCard/RecommendationCard"
import "./RecommendationView.css"
import uniqueString from "unique-string"
import Nav from "../Nav/Nav"
import { Link, Redirect } from "react-router-dom"
import { getRecommendations } from "../../apiCalls"

const RecommendationView = () => {
  const [searchResults, setSearchResults] = useState([])
  const [error, setError] = useState("")
  const { query } = useContext(QueryContext)

  useEffect(() => {
    getRecommendations(query.category)
      .then(data => {
        const filteredResults = data.items
          .filter(result => result.volumeInfo.imageLinks && result.volumeInfo.categories && result.volumeInfo.title)
          .filter(result => result.volumeInfo.averageRating)
          .sort((a, b) => b.volumeInfo.averageRating - a.volumeInfo.averageRating)

        const cardInfo = filteredResults.map(result => {
          let bookKey = uniqueString()
          return {
            category: result.volumeInfo.categories[0],
            imageLinks: result.volumeInfo.imageLinks.thumbnail,
            title: result.volumeInfo.title,
            key: bookKey,
            averageRating: result.volumeInfo.averageRating,
            id: result.id,
            overview: result.volumeInfo.description,
          }
        })
        setSearchResults(cardInfo)
      })
      .catch(error => {
        console.error(error)
        setError("Something went side ways")
      })
  }, [query.category])

  const recommendationCards = searchResults.map(searchResult => {
    return (
      <Link to="/details" className="rec-card-link">
        <RecommendationCard
          imageLinks={searchResult.imageLinks}
          title={searchResult.title}
          key={searchResult.key}
          id={searchResult.id}
          overview={searchResult.overview}
        />
      </Link>
    )
  })

  const conditionalRendering = () => {
    if (!searchResults.length && !error) {
      return <h2>...Loading...</h2>
    } else if(!searchResults.length && error) {
      return <h2>We couldn't find good readings with that book, try again with another book</h2>
    } else {
      return {recommendationCards}
    }
  }

  return (
    <div className="recommendation-view">
      <Nav />
      <div className="display-body-recommendation">
        <p className="p-prompt-recommendation">
          Because you liked <b>{query.clickedTitle} </b>you might like these books:
        </p>
        <div className="card-container-recommendation">
          {!searchResults.length && error && !error && <h1>...Loading...</h1>}
          {error ? <h2>We couldn't find good readings with that book, try again with another book</h2> :
            recommendationCards}
        </div>
      </div>
    </div>
  ) 
}

export default RecommendationView
