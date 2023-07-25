import axios from "axios";
import { useState, useEffect } from "react";

import Reload from "../Reload";

const apiURL = `https://api.api-ninjas.com/v1/quotes?category=success`;

type QuoteData = {
  quote: string;
  author: string;
  category: string;
};

const Quote = () => {
  const [quoteData, setQuoteData] = useState<QuoteData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get(apiURL, {
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_KEY,
        },
      });

      setQuoteData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="my-16 h-3/6 flex justify-center items-center">
        {isLoading ? (
          <span className="loading loading-bars loading-lg"></span>
        ) : (
          quoteData.map((quote, index) => (
            <div key={index} className="w-4/5 mx-auto">
              <h1 className="sm:text-5xl text-3xl font-lato mx-3 font-semibold text-center mb-6">
                {`"${quote.quote}"`}
              </h1>
              <p className="text-right mr-10 sm:text-3xl text-xl font-serif italic">{`- ${quote.author}`}</p>
            </div>
          ))
        )}
      </div>
      <Reload onClick={fetchQuote} />
    </>
  );
};

export default Quote;
