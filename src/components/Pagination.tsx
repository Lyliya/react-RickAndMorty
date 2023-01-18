interface PaginationProps {
  currentPage: number;
  max: number;
  nextPage: (arg0: number) => void;
  prevPage: (arg0: number) => void;
  setPage: (arg0: number) => void;
}

export default function Pagination({
  currentPage,
  max,
  nextPage,
  prevPage,
  setPage,
}: PaginationProps) {
  return (
    <div className="gap-2 flex text-xl justify-center w-full my-2">
      {currentPage > 2 && (
        <>
          <button className="cursor-pointer" onClick={() => setPage(1)}>
            1
          </button>
          <span>...</span>
        </>
      )}
      {currentPage > 1 && (
        <button
          className="cursor-pointer"
          onClick={() => prevPage(currentPage - 1)}
        >
          &#60;
        </button>
      )}
      <span>Page {currentPage}</span>
      {currentPage < max && (
        <button
          className="cursor-pointer"
          onClick={() => nextPage(currentPage + 1)}
        >
          &#62;
        </button>
      )}
      {currentPage < max - 1 && (
        <>
          <span>...</span>
          <button className="cursor-pointer" onClick={() => setPage(max)}>
            {max}
          </button>
        </>
      )}
    </div>
  );
}
