import { Box } from "@mui/system";
import PostCard from "../components/Home/PostCard";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../style/Pagination.css";

export default function HomeScreen() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };

    return (
      <>
        <div>
          <Items currentItems={currentItems} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageCount={pageCount}
            pageRangeDisplayed={10}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName="pagination flex justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            hrefAllControls
          />
        </div>
      </>
    );
  }

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => <PostCard key={item.id} post={item} />)}
      </>
    );
  }

  if (error) {
    return (
      <Box>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Error: {error.message}</h1>
        </div>
      </Box>
    );
  } else if (!isLoaded) {
    return (
      <Box>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Loading...</h1>
        </div>
      </Box>
    );
  } else {
    return (
      <Box>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Home Screen</h1>
        </div>
        <div>
          <PaginatedItems itemsPerPage={10} />
        </div>
      </Box>
    );
  }
}
