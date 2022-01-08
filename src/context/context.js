import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [user, setUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFolloweres] = useState(mockFollowers);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [query, setQuery] = useState("john-smilga");
  const [remainingRequests, setRemainingRequests] = useState(60);

  const submitSearchHandler = (e) => {
    e.preventDefault();
    setQuery(e.target[0].value);
  };

  useEffect(() => {
    const fetchInformation = async () => {
      const userUrl = rootUrl + "/users/" + query;
      const reposUrl = userUrl + "/repos?per_page=100";
      const followersUrl = userUrl + "/followers?per_page=100";
      console.log(userUrl);
      setLoading(true);
      setError(false);
      try {
        const userResponse = await axios(userUrl);
        const reposResponse = await axios(reposUrl);
        const followersResponse = await axios(followersUrl);

        setUser(userResponse.data);
        setRepos(reposResponse.data);
        setFolloweres(followersResponse.data);

        setLoading(false);
      } catch (e) {
        console.log(e);
        setError(true);
        setLoading(false);
      } finally {
        const response = await axios(rootUrl + "/rate_limit");
        setRemainingRequests(response.data.rate.remaining);
      }
    };
    fetchInformation();
  }, [query]);

  return (
    <GithubContext.Provider
      value={{
        user,
        repos,
        followers,
        isLoading,
        isError,
        remainingRequests,
        submitSearchHandler,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
